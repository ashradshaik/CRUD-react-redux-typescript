import * as React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getNotes, deleteNote} from '../redux/actions/notes'
import './notes.css'
import AddNotes from './addNotes'
import {Link} from 'react-router-dom'
import UpdateNote from '../components/updateNotes'

class Notes extends React.Component<any>{
    state={
        update:false,
        id:'',
        delete:false
    }
    static propTypes = {
        getNotes:PropTypes.func.isRequired,
        deleteNote:PropTypes.func.isRequired,
        notes:PropTypes.array.isRequired
    }
    static defaultProps={
        notes:[]
    }
    componentWillMount() {
        this.props.getNotes()
      }
      handleUpdate(_id:any){
        //console.log(_id)
        this.setState({update:true, id:_id})
      }
      handleDelete(_id:any){
        //this.setState({delete:true, id:_id})
        this.props.deleteNote(_id)
        document.location.reload(true)  
      }
      componentWillUnmount(){
          this.setState({update:false,id:''})
      }
  render(){
    
    interface Inotes{
        _id:string,
        title:string,
        content:string
    }
    const singleNote = this.props.notes.notes.map((note:Inotes)=>(
        <div key={note._id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button onClick={()=>this.handleUpdate(note._id)}>Edit</button>
                <button onClick={()=>this.handleDelete(note._id)}>Delete</button>
            </div>
    ))
    return(
        <div className="noteLists">
            <h1>Notes:</h1>
            <div className="container">
                <div className="childContainers">
                    {singleNote}
                </div>
                <div className="childContainers">
                    <h3>{this.state.update ? 'Update Note' : 'Add Notes'}</h3>
                    {this.state.update ? <UpdateNote value={this.state.id} /> : <AddNotes />}
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state:any) =>({
    notes:state.notes
})

// const dispatchToProps = (dispatch:any) => ({
//     getNotes: () => dispatch(getNotes()),
//     deleteNote: () =>dispatch(deleteNote())
//  })

export default connect(mapStateToProps, {getNotes, deleteNote})(Notes);

