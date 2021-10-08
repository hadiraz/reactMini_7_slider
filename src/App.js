import './assets/App.css';
import data from "./data";
import {ImQuotesRight} from "react-icons/im" ;
import {FiChevronLeft , FiChevronRight} from "react-icons/fi" ;
import { useEffect, useState } from 'react';
function App() {
  const[current , setCurrent] = useState(0);

  const changeSlide = (mode) => {
    const newIndex = mode + current ;
    if(newIndex < 0){
      setCurrent(data.length - 1)
    }else if(newIndex > data.length - 1){
      setCurrent(0)
    }else{
      setCurrent(newIndex)
    }
  }

  // useEffect(()=>{
  //   let intervalChange = setInterval(()=>{
  //     changeSlide(1)
  //   },3000);
  //   return ()=>{clearInterval(intervalChange)}
  // },[current])

  return (
    
    <section className="container-fluid flex-column App d-flex justify-content-center align-items-center">
      <div className="title w-100 d-flex justify-content-center align-items-center">
        <h2>
          <span className="slash mx-3 text-warning">/</span>Reviews
        </h2>
      </div>
      <section className="slider-container w-100 d-flex justify-content-between align-items-center position-relative">

        <button onClick={()=>changeSlide(1)}  className="slider-right left-right-btn d-flex justify-content-center align-items-center h-100">
          <FiChevronLeft className="left-right-icon" />
        </button>

        {
          data.map((value,index)=>{
            const {id,image,name,title,quote} = value ;
            let position = "next" ;
            if(index === current){
              position = "active"
            }else if(index === current - 1){
              position = "last"
            }
            if(index === data.length - 1 && index !== current){
              position = "last"
            }
            return(
              <div key={id} className={`slider-center d-flex justify-content-center align-items-center h-100 flex-column ${position}`}>
            <img className="review-image mb-3" src={image} alt={name}/>
            <div className="name-title-box">
              <p className="name m-0 mb-1">{name}</p>
              <p className="item-title m-0">{title}</p>
            </div>
            <article className="description-box d-flex justify-content-center align-items-center mt-5">
              <p className="description px-5 d-flex justify-content-center align-items-center">{quote}</p>
            </article>
            <ImQuotesRight className="quotes-icon"/>
        </div>
            )
          })
        }
        <button onClick={()=>changeSlide(-1)} className="slider-left left-right-btn d-flex justify-content-center align-items-center h-100">
          <FiChevronRight className="left-right-icon"/>
        </button>
      </section>
    </section>
  );
}

export default App;
