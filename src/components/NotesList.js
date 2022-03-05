import Note from "../components/Note";
import "../styles/NotesList.css";

const NotesList = (props) => {

    props.notes.sort(
        function (b, a) {
            return Date.parse(a.date) - Date.parse(b.date)
        }
    )
    const notes = props.notes.map(note =>
        <Note
            key={note.id}
            note={note}
            deleteNote={props.deleteNote}
            date={props.date}
            important={props.important}
        />
    )
    return (
        <div className="notes-list">
            <h1>Notes</h1>
            {notes}
        </div>
    )

}
export default NotesList;
