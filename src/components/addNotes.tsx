import * as React from 'react'
import {addNotes} from '../redux/actions/notes'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

interface Inote{
    title:string,
    content:string,
    preventDefault:()=>VoidFunction
}

class AddNotes extends React.Component<any>{
    state={
        title:'',
        content:""
    }
    handleChange =(e:any) => {
        this.setState({[e.target.name]:e.target.value})
    }
    hanldeSubmit =(e:any) =>{
        e.preventDefault()
        const note={
            title:this.state.title,
            content:this.state.content
        }
        this.props.addNotes(note)
        document.location.reload(true)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    <label>Title</label><br />
                    <input type="text" placeholder="Enter Title" name="title" onChange={this.handleChange} />
                    <br />
                    <label>Content</label>
                    <br />
                    <textarea name="content" placeholder="Add Content" onChange={this.handleChange}></textarea><br />
                    <button>Add Note</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addNotes})(AddNotes)