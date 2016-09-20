import React from "react";
import Navigation from '../common/Header';
import Event from './Event';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {events: []};

        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
        const token = localStorage.token;
        fetch('/api/events', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => res.json())
            .then((data) => this.setState({events: data}));
    }

    render() {
        const events = this.state.events;

        const eventList = events.map((event) => {
                const {title, description, start, end} = event;

                return (
                    <Event title={title} description={description} start={start} end={end} user={event.user.name}/>
                )
            }
        );

        return (
            <div>
                <div className="event-app">
                    <h1 className="title">Event Calendar</h1>
                    <div className="event-list">
                        {eventList}
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage;