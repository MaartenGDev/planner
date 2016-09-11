import React from "react";

class Event extends React.Component {
    render() {
        const {title, description, start, end,id} = this.props;
        return (
            <td>
                <td>{title}</td>
                <td>{description}</td>
                <td><b>{start}</b> <i>tot</i> <b>{end}</b></td>
                <td><a href={"/#/events/" + id + "/edit"}>Edit</a></td>
            </td>
        )
    }
}
export default Event;