import React from "react";
import FontAwesome from 'react-fontawesome';

class Event extends React.Component {
    render() {
        const {title, description, start, end} = this.props;
        return (
            <div className="event">
                <h3 className="event-title">{title}</h3>
                <p className="event-description">{description}</p>
                <div className="event-details">
                    <FontAwesome name='calendar' /> <b className="event-details-time">{start} - {end}</b>
                </div>
            </div>
        )
    }
}
export default Event;