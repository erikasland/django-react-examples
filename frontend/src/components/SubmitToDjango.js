import React from 'react';
import axios from 'axios';


class SubmitToDjango extends React.Component {
    todoItems = [
        {
          id: 1,
          title: "Go to Market",
          description: "Buy ingredients to prepare dinner",
          completed: true,
        },
        {
          id: 2,
          title: "Study",
          description: "Read Algebra and History textbook for the upcoming test",
          completed: false,
        },
        {
          id: 3,
          title: "Sammy's books",
          description: "Go to library to return Sammy's books",
          completed: true,
        },
        {
          id: 4,
          title: "Article",
          description: "Write article on how to use Django with React",
          completed: false,
        },
      ];
    
    djangoRef = React.createRef();
    
    getTodo = () => {
        axios.get("/api/todos/").then((res) => {
            console.log(res);
        }).catch((err) => console.log(err));
    }

    handleCreate = (e) => {
        e.preventDefault();

        let data = {
          id: parseInt(this.id.current.value),
          title: this.title.current.value,
          description: this.description.current.value,
          completed: true
        };

        axios.post("http://localhost:8000/api/todos/", data).then((res) => {
            console.log(res);
        }).catch((err) => console.log(err));
    }

    id = React.createRef();
    title = React.createRef();
    description = React.createRef();
    completed = React.createRef();

    render() {
        return (
            <div>
                <h1>Create</h1>
                <form onSubmit={(e) => { this.handleCreate(e) }}>
                    <label>ID: <input ref={this.id} type="text"></input></label><br></br>
                    <label>TITLE: <input ref={this.title} type="text"></input></label><br></br>
                    <label>DESCRIPTION: <input ref={this.description} type="textarea"></input></label><br></br>
                    <label>COMPLETED: <input ref={this.completed} type="checkbox"></input></label>
                    <button>Create</button>
                </form>
                <br></br>
                <br></br>
                <h1>Delete</h1>
                <form onSubmit={(e) => { this.handleCreate(e) }}>
                    <label>ID: <input ref={this.id} type="text"></input></label><br></br>
                    <label>TITLE: <input ref={this.title} type="text"></input></label><br></br>
                    <label>DESCRIPTION: <input ref={this.description} type="textarea"></input></label><br></br>
                    <label>COMPLETED: <input ref={this.completed} type="checkbox"></input></label>
                    <button>Delete</button>
                </form>
            </div>
        )
    }
}


export default SubmitToDjango;