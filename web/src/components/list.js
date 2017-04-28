import React from 'react'

const List = (props) => {
;
  console.log('[List] items'. props);
  console.log(props);


  // iterate
  const keys = Object.keys(props);
  const listItems = keys.map((item) =>
   <li key={item}>{props[item].text}</li>
  );

  return (
    <div className="q-list">
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
