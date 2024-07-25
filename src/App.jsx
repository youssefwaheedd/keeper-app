/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.note}
          onDelete={deleteNote}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
