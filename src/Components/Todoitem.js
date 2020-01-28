import React, { Component } from 'react'

class Todoitem extends Component {
    getStyle =()=>{
     
            return{
                background: "#996839",
                color:"white",
                padding:"10px",
                borderBottom:"1px solid grey",
                textDecoration: this.props.attritodo.completed ?"line-through":"none"
            }
    }
    
    render() {
       
        return (
            <div style={this.getStyle()}>
                
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.attritodo.id)}></input>
                   {" "} {this.props.attritodo.title}
                   <button onClick={this.props.delTodo.bind(this, this.props.attritodo.id)}style={btn}>Delete</button>
                </p>
            </div>
        
        )
    }
}
const btn={
background:"grey",
padding:"5px",
borderRadius:"5px",
float:"right",
color:"white",    
}
export default Todoitem
