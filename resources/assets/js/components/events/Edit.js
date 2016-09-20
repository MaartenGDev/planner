import React from "react";
import Navigation from "../common/Header";
import {Notification} from 'react-notification';

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {notification: false, status: 'ERROR', statusTitle: 'Something went wrong',input: {title: '', description: '', start: '', end: ''}};
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleNotification.bind(this);
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
                const statusOk = res.status === 200;

                this.setState({
                    statusTitle: statusOk ? 'SUCCESS' : 'ERROR',
                    status: statusOk ? 'The event has been updated.' : 'Something went wrong'
                });

                this.toggleNotification();

                return res.json();
            })
            .then((data) => console.log(data));


    }

    handleChange(event) {
        const inputName = event.target.name;
        this.setState({input: {[inputName]: event.target.value}});
    }

    toggleNotification() {
        this.setState({notification: !this.state.notification})
    }

    render() {
        const {title, description, start, end} = this.state.input;
        return (
            <div>
                <div className="container">
                    <div className="card event-form">
                        <h3 className="event-form-title">Edit Event</h3>
                        <form id="editForm" onSubmit={this.updateEvent} method="POST">
                            <p className="input-label">Title</p>
                            <input id="username" type="text" onChange={this.handleChange} name="title" value={title}/>
                            <p className="input-label">Description</p>
                            <textarea onChange={this.handleChange} name="description" value={description}/>
                            <p className="input-label">Dates</p>
                            <input onChange={this.handleChange} name="start" type="date" value={start}/>
                            <input onChange={this.handleChange} name="end" type="date" value={end}/>
                            <input type="hidden" name="_method" value="PATCH"/>
                            <input className="btn btn-primary event-form-btn" type="submit" value="Save"/>
                        </form>
                    </div>
                </div>
                <Notification
                    isActive={this.state.notification}
                    message={this.state.status}
                    action="Dismiss"
                    title={this.state.statusTitle}
                    style={false}
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() => this.setState({notification: false})}
                />
            </div>
        )
    }
}
export default Edit;