import React from "react";
import FontAwesome from 'react-fontawesome';

class Event extends React.Component {
    render() {
        const {title, description, start, end, user} = this.props;
        return (
            <div className="event">
                <h3 className="event-title">{title}</h3>
                <p className="event-description">{description}</p>
                <div className="event-details">
                    <p className="event-time"><FontAwesome name='calendar' /> <b className="event-details-time">{start} - {end}</b></p>
                    <p className="event-user"><FontAwesome name='user' /> <span>{user}</span></p>
                </div>

            </div>
        )
    }
}
export default Event;