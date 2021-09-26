import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarry } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
const Cart = (props) => {
  const { name, country, img, age, salarry } = props.peoples;
  const element = <FontAwesomeIcon icon={faPeopleCarry} />;
  return (
    <div className="card">
      <img src={img} className="card-img-top w-100 h-50" alt="" />
      <div className="card-body cards">
        <h4 className="card-title">Name: {name}</h4>
        <h5>Counter: {country}</h5>
        <h5>Age: {age}</h5>
        <p className="card-text">Salary$ {salarry}</p>
        <button
          className="btn-purchease"
          onClick={() => props.handleAddToCart(props.peoples)}
        >
          {" "}
          {element} Meet any person
        </button>

        <div className="icon-contaienr">
          <i className="fab fa-whatsapp whatsup"></i>
          <i className="fab fa-linkedin-in linkdin"></i>
        </div>
      </div>
    </div>
  );
};

export default Cart;
