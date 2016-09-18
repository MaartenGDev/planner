import React from "react";
import Navigation from "./../Navigation";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {input: {title: '', description: '', start: '', end: ''}};
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const token = localStorage.token;
        fetch('/api/event/' + this.props.params.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                const {title, description, start, end} = data;
                this.setState({input: {title, description, start, end}})
            });
    }

    updateEvent(e) {
        e.preventDefault();
        const form = document.getElementById('editForm');
        const token = localStorage.token;

        fetch('/api/event/' + this.props.params.id, {
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
        const {title, description, start, end} = this.state.input;
        return (
            <div>
                <Navigation/>
                <div className="container">
                    <div className="card event-form">
                        <h3 className="event-form-title">Edit Event</h3>
                        <form id="editForm" onSubmit={this.updateEvent} method="POST">
                            <p className="input-label">Title</p>
                            <input id="username" type="text" onChange={this.handleChange} name="title" value={title}/>
                            <p className="input-label">Description</p>
                            <textarea onChange={this.handleChange} name="description" value={description}/>
                            <p className="input-label">Dates</p>
                            <input onChange={this.handleChange} name="start" type="date" value={start} />
                            <input onChange={this.handleChange} name="end" type="date" value={end}/>
                            <input type="hidden" name="_method" value="PATCH"/>
                            <input className="btn btn-primary event-form-btn" type="submit" value="Save"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Edit;