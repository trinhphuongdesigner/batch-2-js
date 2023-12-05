import React from 'react';
import './style.css';

// style 1
// export default function Block() {
//   return (
//     <div className="block"></div>
//   )
// }

// style 2
// function Block(props) {
//   return (
//     <>
//       {!props.isInside && <h3>{props.title}</h3>}
//       {props.number && <h4>{props.number}</h4>}

//       {props.description ? <p>{props.description}</p> : null}

//       <div className="block">{props.isInside && <h3>{props.title}</h3>}</div>
//     </>
//   );
// }

// export default Block;

// style 3
function Block({ no, number, isInside, description, style }) {
  // const { title, number, isInside, description } = props;
  // const title = props.title;

  const titleStr = <h3>đây là khối {no}</h3>;

  return (
    <>
      {!isInside && titleStr}
      {number && <h4>{number}</h4>}

      {description ? <p>{description}</p> : null}

      <div className="block" style={style}>{isInside && titleStr}</div>
    </>
  );
}

export default Block;
