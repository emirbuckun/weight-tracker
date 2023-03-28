import React from "react";
import WeightForm from "./WeightForm";
import Weight from "./Weight";

const WeightList = () => {
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localWeights")) {
      const storedList = JSON.parse(localStorage.getItem("localWeights"));
      setWeights(storedList);
    }
  }, []);

  const addWeight = (weight) => {
    if (!weight.text || /^\s*$/.test(weight.text)) {
      return;
    }
    localStorage.setItem("localWeights", JSON.stringify([weight, ...weights]));
    const newTodos = [weight, ...weights];
    setWeights(newTodos);
  };

  const removeWeight = (id) => {
    const deleted = [...weights].filter((weight) => weight.id !== id);
    setWeights(deleted);
    localStorage.setItem("localWeights", JSON.stringify(deleted));
  };

  return (
    <div>
      <h1>What's your weight today?</h1>
      <WeightForm onSubmit={addWeight} />
      <Weight weights={weights} removeWeight={removeWeight} />
    </div>
  );
};

export default WeightList;
