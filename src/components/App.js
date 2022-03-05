import '../styles/App.css';
import {Component} from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Routes, useNavigate, useParams} from 'react-router-dom'
import HomePage from "../routes/HomePage";
import ErrorPage from "../routes/ErrorPage";
import OneNote from "./OneNote";

class App extends Component {
    state = {notes: []}

    getOneNoteId = () => {
        let id = Number(useParams().noteId);
        return id
    }

    deleteNote = (id) => {
        let notes = [...this.state.notes];
        notes = notes.filter(note => note.id !== id)
        this.setState(
            {
                notes
            }
        )
    }
    addNote = (note, important) => {
        const newNote = {
            id: Math.floor(Math.random() * 10000000000000),
            note,
            date: new Date().toISOString().slice(0, 19),
            important,
        }
        this.setState(prevState => ({
            notes: [...prevState.notes, newNote]
        }))
        return true
    }

    render() {
        return (
            <Router>
                <>
                    <div className="App">
                        <h1>Omni-Notes APP</h1>
                    </div>

                </>

                <Routes>
                    <Route path="/" element={<HomePage addNote={this.addNote}
                                                       notes={this.state.notes}
                                                       deleteNote={this.deleteNote}/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/notes" element={<OneNote notes={this.state.notes}
                                                           deleteNote={this.deleteNote}
                                                           getOneNoteId={this.getOneNoteId}
                    />}>

                        <Route path=":noteId" element={<App/>}/>
                    </Route>
                </Routes>

            </Router>

        )
    }
}

export default App;
