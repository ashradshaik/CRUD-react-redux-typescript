import * as React from 'react'
import {updateNote} from '../redux/actions/notes'
import {connect} from 'react-redux'

class UpdateNote extends React.Component<any>{
    state={
        title:'',
        content:"",
        _id:this.props.value
    }
    handleChange =(e:any) => {
        this.setState({[e.target.name]:e.target.value})
    }
    hanldeSubmit(e:any){
        const _id = this.state._id
        e.preventDefault() 
        const note ={
            title:this.state.title,
            content:this.state.content,
            _id:_id
        }
        //alert(_id) 
        this.props.updateNote(note)  
        document.location.reload(true)  
    }
    render(){
        return(
            <div>
                <p>{this.props.value}</p>
                <form onSubmit={this.hanldeSubmit.bind(this)}>
                    <label>Title</label><br />
                    <input type="text" placeholder="Enter Title" name="title" onChange={this.handleChange} />
                    <br />
                    <label>Content</label>
                    <br />
                    <textarea name="content" placeholder="Add Content" onChange={this.handleChange}></textarea><br />
                    <button>Update Note</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {updateNote})(UpdateNote)