import React from "react";
import "./TotalIncome.css";
const TotalIncome = (props) => {
  const { people } = props;
  let total = 0;
  for (const peoples of people) {
    total = total + peoples.salarry;
  }
  return (
    <>
      <div className="income-contaienr">
        <h4>People add :{props.people.length}</h4>
        <h4>Total Income$ {total}</h4>
        <button className="btn-style">
          <i className="fas fa-phone-volume"></i> Call now
        </button>
      </div>

      <div className="name-container">
        {people.map((people) => (
          <h4>{people.name}</h4>
        ))}
      </div>
    </>
  );
};

export default TotalIncome;
