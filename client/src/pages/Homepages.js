import React from 'react';

import Login from '../components/Login';
import NoMatch from '../components/NoMatch';
import Profile from '../components/Profile';
import Signup from  '../components/Signup';
import ingleitems from '../pages/SingleItem';


import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS} from '../utils/queries';
import { LOGIN_USER } from '../utils/mutations';

const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const { data: userData } = useQuery(LOGIN_USER);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <Profile/>
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QUERY_ITEMS ={thoughts} title="Any good Barters?(s)..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <singleitems
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
