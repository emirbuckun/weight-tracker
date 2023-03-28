import React from "react";

const WeightForm = (props) => {
  const [input, setInput] = useState("");
  const [id, setId] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const getId = () => {
    const returnId = id;
    setId(id + 1);
    return returnId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: getId(),
      date: new Date().getTime(),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="weight-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={input}
        placeholder="Add weight"
        className="weight-input"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className="add-button"></button>
    </form>
  );
};

export default WeightForm;
