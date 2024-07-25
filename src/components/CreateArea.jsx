/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";
function CreateArea(props) {
  const [textField, setTextField] = useState({
    title: "",
    note: "",
  });
  const [isTrue, setIsTrue] = useState(false);

  function handleZoom() {
    setIsTrue(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setTextField((prevTextField) => ({
      ...prevTextField,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    setIsTrue(false);
    props.onAdd(textField);
    setTextField({
      title: "",
      note: "",
    });
  }

  return (
    <div className="flex flex-col justify-center ">
      <form onSubmit={submitNote} className="create-note">
        {isTrue && (
          <input
            name="title"
            placeholder="Title"
            value={textField.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="note"
          placeholder="Take a note..."
          rows={isTrue ? 3 : 1}
          value={textField.note}
          onChange={handleChange}
          onClick={handleZoom}
        />
        <Zoom in={isTrue}>
          <Fab type="submit">
          <IoIosAddCircle />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
