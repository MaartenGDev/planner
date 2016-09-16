import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {input: {title: '',description: '',start: '',end: ''}};
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    updateEvent(e){
        e.preventDefault();
        const form = document.getElementById('addForm');
        const token = localStorage.token;

        fetch('/api/event/', {
            method: 'POST',
            body: new FormData(form),
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
            })
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log(data));

    }
    handleChange(event){
        const inputName = event.target.name;
        this.setState({input: {[inputName]: event.target.value}});
    }
    render() {
        return (
            <div>
                <form id="addForm" onSubmit={this.updateEvent} method="POST">
                    <input name="title"></input>
                    <textarea name="description"></textarea>

                    <input name="start" type="date"/>
                    <input name="end" type="date"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Add;