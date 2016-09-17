import React from "react";
import Navigation from './../components/Navigation';
import Event from './../components/events/Event';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };

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

                const {title,description,start,end,id} = event;

                return (
                    <Event title={title} description={description} start={start} end={end} id={id}/>
                )
            }
        );

        return (
            <div>
                <Navigation/>
                <h1>Event Calendar</h1>
                <a href="/#/events/create">Add Event</a>
                <table>
                {eventList}
                </table>
            </div>
        )
    }
}
export default Home;