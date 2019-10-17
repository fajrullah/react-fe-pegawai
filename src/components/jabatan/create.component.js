import React, { Component } from 'react';
import axios from 'axios'
export default class Create extends Component {
constructor(props){
    super(props)
    this.state = {
        jabatan : null
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
}
 
  onSubmit(e) {
    e.preventDefault();
    const { jabatan } = this.state
    axios({
        method: 'post',
        url: 'http://localhost:8000/jabatan/',
        data: {
          nama_jabatan: jabatan,
        }
      })
    .then(res => res.data)
    .then(status => {
        alert(status)
    })
  }
  handlerChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
  }
    render() {
        console.log(this.state.jabatan)
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Jabatan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Jabatan:  </label>
                        <input type="text" className="form-control" name="jabatan" value={this.state.value} 
                        onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}