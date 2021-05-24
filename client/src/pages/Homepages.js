import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS } from '../utils/queries';





import Auth from '../utils/auth';

const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {/* <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ThoughtForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            
          </div>
        ) : null}
      </div> */}

    </main>
  );
};

export default Homepages;
