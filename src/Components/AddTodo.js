import React, { Component } from 'react'

class AddTodo extends Component {
    state={
        title: " "
    }
    
    onChange=(e)=>{this.setState({
        [e.target.name]: e.target.value
    });
    console.log(e.target.value);
}

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:""});
        console.log(this.state.title);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}style={{ display: "flex" }}>
                <input type="text" name="title"
                    placeholder="Add to do...." 
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{ flex: "8", height: "50px" }} />
                <input type="submit" value="Add"
                    className="btn" style={{ flex: "2" }} />
            </form>
        )
    }
}

export default AddTodo
