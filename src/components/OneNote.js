import Note from "../components/Note";
import "../styles/NotesList.css";
import {Link, NavLink, useNavigate} from "react-router-dom";
import React from "react";

const OneNote = (props) => {
    const idToDisplay = props.getOneNoteId();
    const navigate = useNavigate();
    navigate('/');
    const note = props.notes.filter(note => note.id === idToDisplay).map(note =>

        <Note
            key={note.id} e
            note={note}
            deleteNote={props.deleteNote}
            date={props.date}
            important={props.important}
            one={true}
        />
    )
    return (
        <div className="notes-list">
            <h1>Note:  </h1>
            {note}
            <NavLink to="/"><button  className="go-home">Go back to home page </button></NavLink>
        </div>

    );

}
export default OneNote;
