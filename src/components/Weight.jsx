import React from "react";

const Weight = ({ weights, removeWeight }) => {
  return weights.map((weight, index) => (
    <div className="weight-row" key={index}>
      <div key={weight.id}>{weight.text}</div>
      <button onClick={() => removeWeight(weight.id)} className="delete-icon" />
    </div>
  ));
};

export default Weight;
