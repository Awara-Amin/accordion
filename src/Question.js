import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className= 'question'>
      <header>
        <h4>{title}</h4>
        {/*                                                this is the opposite to the showInfo value */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </header>
      {showInfo && <p>{info}</p>}
      {/* <p>{info}</p> */}
    </article>
  );
      // <h2>question component</h2>;
};

export default Question;
