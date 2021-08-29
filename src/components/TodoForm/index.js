import PropTypes from "prop-types";
import React, { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;

  const [value, setValue] = useState("");

  function onValueChangeHandler(e) {
    setValue(e.target.value);
  }

  function onSubmitHandler(e) {
    //Prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };

    value ? onSubmit(formValues) : alert("Input new todo");

    //Reset form
    setValue("");
  }

  return (
    <form action="" onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={value}
        placeholder="Add new todo"
        onChange={onValueChangeHandler}
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
