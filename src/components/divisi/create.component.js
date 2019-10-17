import React, { Component } from 'react';
import axios from 'axios'
export default class Create extends Component {
constructor(props){
    super(props)
    this.state = {
        divisi : null
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
}
 
  onSubmit(e) {
    e.preventDefault();
    const { divisi } = this.state
    axios({
        method: 'post',
        url: 'http://localhost:8000/divisi/',
        data: {
          nama_divisi: divisi,
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
        console.log(this.state.divisi)
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Divisi</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Divisi:  </label>
                        <input type="text" className="form-control" name="divisi" value={this.state.value} 
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