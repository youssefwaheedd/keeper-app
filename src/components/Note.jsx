/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (props.onSave) {
      props.onSave(props.id, title, content);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="bg-[#fff] note rounded-lg flex flex-col p-8 shadow-md"  onClick={handleEdit} onBlur={handleSave}>
      <div className="flex-grow">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              value={content}
              onChange={handleContentChange}
              rows="3"
              className="w-full p-2 border rounded"
            />
          </>
        ) : (
          <>
            <h1 className="text-lg font-semibold mb-2">{title}</h1>
            <p className="text-gray-700">{content}</p>
          </>
        )}
      </div>
      <button
        className="self-end mt-4 text-red-500 hover:text-red-700"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <MdDelete size={24} />
      </button>
    </div>
  );
}

export default Note;
