import React from "react";
import Navigation from './Navigation';
import Event from './Event';

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

                const {title,description,start,end} = event;

                return (
                    <Event title={title} description={description} start={start} end={end} showButtons={false}/>
                )
            }
        );

        return (
            <div>
                <Navigation/>
                <h1>Event Calendar</h1>
                {eventList}
            </div>
        )
    }
}
export default Home;