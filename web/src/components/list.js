import React from 'react'

const List = (props) => {

  // iterate
  const keys = Object.keys(props);
  const listItems = keys.map((index) =>
   <li
     onClick={props.handleClick.bind(index)}
     key={index}>{props[index].text}
   </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default List;
