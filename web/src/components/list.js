import React from 'react'

const List = (props) => {

  // iterate over keys
  const keys = Object.keys(props.items || []);
  const listItems = keys.map((index) =>
   <li
     onClick={voteOnItem.bind(index)}
     key={index}>{props.items[index].text}
   </li>
  );

  // return list
  return (
    <ul>{listItems}</ul>
  );
}

export default List;
