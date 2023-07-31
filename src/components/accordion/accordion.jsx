import React, { useState,useRef } from "react";
import  "./accordion.css";

import arrowup from './../../assets/chevron-up.png'
import arrowdown from './../../assets/chevron-down.png'


function Accordion(props) {
  const [clicked, setClicked] = useState(null);
  const contentRef = useRef(null);

  const toggle = (index) => {
   
    if (clicked === index ) {
       
      // If click is already active, close it
      return setClicked(null);
      
    }
    setClicked(index);
    if (contentRef.current) {
        setTimeout(() => {
          scrollToContent();
        }, 100); // Adjust the delay if needed
      }
    };
  const scrollToContent = () => {
    contentRef.current.scrollIntoView({
     
      block: "end",
    });
  };



  return (
    <div className="accordion-section">
      <button className="accordion"  onClick={() => toggle(props.index)} key={props.index}  >
        <p className="accordion__title">{props.title}</p>
        <span>{clicked === props.index ? <img src={arrowdown} alt="arrow-down"></img> :<img src={arrowup} alt="arrow-up"></img>}</span>
      </button>
      <div className={clicked === props.index ? "accordion-content show" : "accordion-content hide"} ref={contentRef}>
       
                <ul>
                {Array.isArray(props.description) ? (
                  props.description.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                  <div>{props.description}</div>
                )}
              </ul>
              
               

            
       
      </div>
    </div>
  );
}

export default Accordion;
