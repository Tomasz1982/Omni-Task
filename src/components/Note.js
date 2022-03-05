import '../styles/Note.css';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom'

const Note = (props) => {
    const style = {
        background: 'orange',
        fontWeight: 'bold',
    }
    console.log(props)
    const {id, note, date, important} = props.note;

    return (
        <div className="note" style={important ? style : null}>
            <h3 >{important ? 'Important Note!' : ''}</h3>
            <p > {note}</p>
            <hr/>
            <br/>
            {props.one ?
                `${date.slice(0, 10)}` :
                <Link note={note} to={'/notes/' + id}><button  className="note-link">{date.slice(0, 10)}</button></Link>
            }


            <button
                onClick={() => {
                    props.deleteNote(id)
                }}
                className="delete-note">
                Delete note
            </button>
        </div>

    );
}
export default Note;
