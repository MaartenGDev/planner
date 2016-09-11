import React from "react";

class Edit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {input: {title: '',description: '',start: '',end: ''}};
        this.updateEvent = this.updateEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const token = localStorage.token;
        fetch('/api/event/' + this.props.params.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((res) => res.json())
            .then((data) => {
                const {title, description, start, end} = data;
                this.setState({input: {title,description,start,end}})
            });
    }
    updateEvent(e){
        e.preventDefault();

        const form = document.getElementById('editForm');
        const token = localStorage.token;

        fetch('/api/event/' + this.props.params.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            method: 'PATCH',
            body: new FormData(form)
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

    }
    handleChange(event){
        const inputName = event.target.name;
        console.log(inputName);
        this.setState({input: {[inputName]: event.target.value}});
    }
    render() {
        const {title, description, start, end} = this.state.input;
        return (
            <div>
                <form id="editForm" onSubmit={this.updateEvent}>
                    <input onChange={this.handleChange} name="title" value={title}></input>
                    <textarea onChange={this.handleChange} name="description" value={description}></textarea>

                    <input onChange={this.handleChange} name="start" type="date" value={start}/>
                    <i>tot</i>
                    <input onChange={this.handleChange} name="end" type="date" value={end}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
export default Edit;