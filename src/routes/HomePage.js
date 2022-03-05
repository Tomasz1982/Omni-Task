import AddNote from "../components/AddNote"
import NotesList from "../components/NotesList";
import '../styles/App.css';

const HomePage = (props) => {
    return (
        <>
            <AddNote add={props.addNote}/>
            <NotesList
                notes={props.notes}
                deleteNote={props.deleteNote}
            />
        </>

    )
}

export default HomePage;
