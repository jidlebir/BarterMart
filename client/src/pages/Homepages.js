import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS } from '../utils/queries';
import ItemList from '../components/ItemList';

const Homepages = () => {
  const { loading, data } = useQuery(QUERY_ITEMS);
  const items = data?.items || [];
  console.log(items);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ItemList items={items} title="Some Feed for Item(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Homepages;