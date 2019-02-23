import React , {Component} from 'react';

class AddTodo extends Component {
    state = {
        content :''
    }
    addTodo =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
        
    }
    submitForm = (e)=>{
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div className="AddForm">
                <form onSubmit={this.submitForm} className="TodoFom">
                    <label htmlFor="content">Add Your Todo List Here!</label>
                    <input type="text" id="content" onChange ={this.addTodo} value={this.state.content}/>  
                </form>
            </div>
        )
    };
}
export default AddTodo; 