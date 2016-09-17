import React from "react";

class Event extends React.Component {
    removeEvent(id) {
        let form = new FormData();
        form.append('id',id);
        form.append('_method','DELETE');

        const token = localStorage.token;

        fetch('/api/event/' + id, {
            method: 'POST',
            body: form,
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log(data));

    }

    render() {
        const {title, description, start, end, id} = this.props;
        return (
            <tr>
                <td>{title}</td>
                <td>{description}</td>
                <td><b>{start}</b> <i>tot</i> <b>{end}</b></td>
                <td><a href={"/#/events/" + id + "/edit"}>Edit</a></td>
                <td><span href="" onClick={() => this.removeEvent(id)}>Remove</span></td>
            </tr>
        )
    }
}
export default Event;