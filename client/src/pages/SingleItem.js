import React from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEM } from '../utils/queries';
import ItemCard from "../components/Cards/product";

const SingleItem = () => {
    const { loading, data } = useQuery(QUERY_ITEM);
    console.log(data);
    // const { data: userData } = useQuery(QUERY_ACCOUNT_BASIC);
    const item = data?.item || [];
  
    // const loggedIn = Auth.loggedIn();
  
    return (
      <main>
        <h1>Single Item Page</h1>
  
        <ItemCard item={item} />
      </main>
    );
  };
  
  export default SingleItem;


// const SingleItem = props => {
//     const { id: itemId } = useParams();

//     const { loading, data } = useQuery(QUERY_ITEM, {
//         variables: { id: itemId }
//     });
//     const item = data?.item || {};

//     if (loading) {
//         return <div>Loading...</div>;
//     }
// export default function SingleItem({ item }) {
//     //const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
  
//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };

//     return (
//         <div>
//             <div className="card mb-3">
//                 <p className="card-header">
//                     <span style={{ fontWeight: 700 }} className="text-light">
//                         {/* {item.username} */}
//                     </span>{' '}
//           item on {item.createdAt}
//                 </p>
//                 <div className="card-body">
//                     <p>{item.description}</p>
//                 </div>
//             </div>

//             {item.commentCount > 0 && <CommentList comments={item.comments} />}
//         </div>
//     );
// };

//export default SingleItem;