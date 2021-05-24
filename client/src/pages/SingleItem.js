import React from 'react';

const SingleItem = props => {
    return (
        <div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        Username
          </span>{' '}
          item on createdAt
        </p>
                <div className="card-body">
                    <p>Item Description</p>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;