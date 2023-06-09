import React from "react";

const Weight = ({ weights, removeWeight }) => {
  return weights.map((weight, index) => (
    <div className="weight-row" key={index}>
      <div key={weight.id}>
        {weight.text} ({weight.date})
      </div>
      <button onClick={() => removeWeight(weight.id)} className="delete-button">
        Delete
      </button>
    </div>
  ));
};

export default Weight;
