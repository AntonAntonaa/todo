import { useState } from "react";
import { addToDoRedux, switchfilterRedux } from "../action/action";
import { useDispatch } from "react-redux";
import { clearListRedux } from "../action/action";
import { getSelectFilter } from "../selector/selector";
import { useSelector } from "react-redux";

function AddToDo() {
  const buttonFilter = useSelector(getSelectFilter);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === ""){
      return
    }
    dispatch(addToDoRedux(value.trim()));
    setValue("");
  };

  const clearList = () => {
    dispatch(clearListRedux());
  };

  const filter = () => {
    dispatch(switchfilterRedux());
  };

  return (
    <form className="addtodo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        className="input"
        onChange={handleSetValue}
      />
      <button className="save" type="submit">
        Добавить
      </button>
      <div>
        <button className="clear" type="button" onClick={clearList}>
          Очистить
        </button>
        <button className="filter" type="button" onClick={filter}>
          {buttonFilter ? "Активные" : "Все"}
        </button>
      </div>
    </form>
  );
}

export default AddToDo;
