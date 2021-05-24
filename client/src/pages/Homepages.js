import React from 'react';
import ItemList from '../components/ItemList';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS } from '../utils/queries';
import Auth from '../utils/auth';

const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  // const { data: userData } = useQuery(QUERY_ACCOUNT_BASIC);
  const items = data?.items || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ItemList items={items} title="Some Feed for Item(s)..." />
          )}
        </div>
        {/* {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Homepages;
