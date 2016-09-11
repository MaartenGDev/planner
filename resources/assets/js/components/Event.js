import React from "react";

class Event extends React.Component {
    render() {
        const {title, description, start, end} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <p><b>{start}</b> <i>tot</i> <b>{end}</b></p>
            </div>
        )
    }
}
export default Event;