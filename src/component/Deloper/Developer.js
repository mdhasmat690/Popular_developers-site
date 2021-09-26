import React, { useEffect, useState } from "react";
import Cart from "../Card/Cart";
import './Developer.css'
import TotalIncome from "../TotaIncome/TotalIncome";

const Developer = () => {
  const [people, setPeople] = useState([]);
  const [countPeople, setCountPeople]= useState([])
  useEffect(() => {
    fetch("./Developer.json")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);


  const handleAddToCart= (people) => {
    for(const mimber of countPeople) {
      if(mimber===people){
        setCountPeople([...countPeople])
        return
      }
    }
    const newPeople = [...countPeople, people];
    setCountPeople(newPeople)
  
  }

  return (
   
         
      <div className="people-container">
        <div className="display-container">
          {
              people.map(peoples=><Cart
                key={peoples.role}
                peoples ={peoples}
                handleAddToCart = {handleAddToCart}></Cart>)
          }
        </div>
        <div className="cart-container">
        <TotalIncome people={countPeople}></TotalIncome>

         {/* <h5>item order: {countPeople.length}</h5> */}
        </div>
      </div>
      

   
  );
};

export default Developer;
