import React, {Component} from "react";
import "../styles/AddNote.css";
import {NavLink, useNavigate} from "react-router-dom";

class AddNote extends Component {
    state = {
        note: '',
        important: false,
date: ''
    }
    handleText = (e) => {
        this.setState({
            note: e.target.value,
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            important: e.target.checked,
        })
    }
    handleClick = () => {
        const {note, important, date} = this.state;
        console.log(important)
        if (this.props.add(note, important, date)) {
            this.setState({
                note: '',
                important: false,
            })
        }

    }

    errorHandler = ( ) =>{
        if(this.state.note==='') return
         else  return this.handleClick()
    }


    render() {
        return (
            <div className="form">
                <h4>Add new Note</h4>
                <textarea className="new-note" type="text" placeholder="Add your note here" value={this.state.note}
                          onChange={this.handleText}/> <br/>
                <input className="checkbox" type="checkbox" checked={this.state.important} id="important"
                       onChange={this.handleCheckbox}/>
                <label className="checkbox" htmlFor="important"> Important?</label> <br/>
                <br/>

                <button className="add-note-btn" onClick={ this.errorHandler}> {this.state.note ? 'ADD Note': <NavLink to="/0signs">ADD NOTE </NavLink>}</button>


            </div>
        );
    }
}

export default AddNote
