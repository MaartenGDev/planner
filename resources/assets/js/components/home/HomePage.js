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
        fetch('/api/events', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
            }
        })
            .then((res) => res.json())
            .then((data) => this.setState({events: data}));
    }

    render() {
        const events = this.state.events;

        const eventList = events.map(({title, description, start, end, id }) => {
                return (
                    <Event key={id} title={title} description={description} start={start} end={end} user={event.user.name}/>
                )
            }
        );

        return (
                <div className="event-app">
                    <h1 className="title">Event Calendar</h1>
                    <div className="event-list">
                        {eventList}
                    </div>
                </div>
        )
    }
}
export default HomePage;
