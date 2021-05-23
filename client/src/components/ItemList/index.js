import React from 'react';

const ItemList = ({ items, title }) => {
    if (!items.length) {
        return <h3>No Items Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {items &&
                items.map(item => (
                    <div key={item._id} className="card mb-3">
                        <p className="card-header">
                            {item.username}
              item on {item.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{item.description}</p>
                            <p className="mb-0">
                                Comments: {item.commentCount} || Click to{' '}
                                {item.commentCount ? 'see' : 'start'} the discussion!
              </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ItemList;