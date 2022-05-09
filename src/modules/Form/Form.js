import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemActionCreator } from "../../redux/features/listSlice";

const Form = () => {
  const initialItemToDo = { id: 10, name: "", done: false };
  const [itemToDo, setItemToDo] = useState(initialItemToDo);
  const dispatch = useDispatch();

  const handleNameInputChange = (event) => {
    setItemToDo({ ...itemToDo, name: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!itemToDo.name) {
      return;
    }
    dispatch(addItemActionCreator(itemToDo));
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={itemToDo.name}
          onChange={handleNameInputChange}
        />

        <input type="submit" value="Create" className="submit-input" />
      </form>
    </>
  );
};

export default Form;
