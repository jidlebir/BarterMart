import React from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEM } from '../utils/queries';

const SingleItem = props => {
    const { id: itemId } = useParams();

    const { loading, data } = useQuery(QUERY_ITEM, {
        variables: { id: itemId }
    });
    const item = data?.item || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {item.username}
                    </span>{' '}
          item on {item.createdAt}
                </p>
                <div className="card-body">
                    <p>{item.description}</p>
                </div>
            </div>

            {item.commentCount > 0 && <CommentList comments={item.comments} />}
        </div>
    );
};

export default SingleItem;