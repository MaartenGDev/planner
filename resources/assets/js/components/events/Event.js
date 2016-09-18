import React from "react";

class Event extends React.Component {
    render() {
        const {title, description, start, end, id} = this.props;
        return (
            <tr>
                <td>{title}</td>
                <td>{description.substr(0,30)+ "..."}</td>
                <td><b>{start}</b> <i>to</i> <b>{end}</b></td>
                <td><a className="btn btn-default link-button event-action-btn" href={"/#/events/" + id + "/edit"}>Edit</a></td>
                <td><span className="btn btn-danger link-button event-action-btn" href="" onClick={this.props.removeEvent}>Remove</span></td>
            </tr>
        )
    }
}
export default Event;