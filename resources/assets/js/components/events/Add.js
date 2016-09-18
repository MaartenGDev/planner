import React from "react";
import Navigation from "./../Navigation";

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {input: {title: '', description: '', start: '', end: ''}};
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateEvent(e) {
        e.preventDefault();
        const form = document.getElementById('addForm');
        const token = localStorage.token;

        fetch('/api/event/', {
            method: 'POST',
            body: new FormData(form),
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log(data));

    }

    handleChange(event) {
        const inputName = event.target.name;
        this.setState({input: {[inputName]: event.target.value}});
    }

    render() {
        return (
            <div>
                <Navigation/>
                <div className="container">
                    <div className="card event-form">
                        <form id="addForm" onSubmit={this.updateEvent} method="POST">
                            <p className="input-label">Title</p>
                            <input id="username" type="text" name="title"/>
                            <p className="input-label">Description</p>
                            <textarea name="description"/>
                            <p className="input-label">Dates</p>
                            <input name="start" type="date"/>
                            <input name="end" type="date"/>
                            <input type="hidden" name="_method" value="PATCH"/>
                            <input className="btn btn-primary event-form-btn" type="submit" value="Create"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Add;