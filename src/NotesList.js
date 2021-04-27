import React from "react";
import Note from "./Note.js";

const keepSearchMatches = (note) => note.doesMatchSearch;
const renderNote = (note) => <Note note={note} key={note.id} />;

const NotesList = (props) => {
  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElements = props.notes.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;
