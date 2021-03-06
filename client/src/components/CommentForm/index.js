import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ itemId }) => {
    const [commentText, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    // update state based on form input changes
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentText, itemId }
            });

            // clear form value
            setBody('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 300 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/300
        {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Hello, I'd like to barter for..."
                    value={commentText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button className="btn col-12 col-md-3" type="submit">
                    Submit
        </button>
            </form>

            {error && <div>Something went wrong...</div>}
        </div>
    );
};

export default CommentForm;