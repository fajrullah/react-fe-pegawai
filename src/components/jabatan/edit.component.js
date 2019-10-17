import React, { Component } from 'react';
import axios from 'axios'
export default class Edit extends Component {
constructor(props){
    super(props)
    this.state = {
        jabatan : 'Loading...',
        id : null,
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
}
    fetchData(){
        axios.get(`http://localhost:8000/jabatan/${this.props.match.params.id}`)
        .then(res => res.data[0])
        .then(data => {
            this.setState({
                id : data.id,
                jabatan : data.nama_jabatan,
            })
        })
    }
    componentDidMount(){
        this.fetchData()
    }

  onSubmit(e) {
    e.preventDefault();
    const { jabatan, id } = this.state
    console.log(id)
    axios({
        method: 'put',
        url: `http://localhost:8000/jabatan/${id}`,
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
        console.log(this.state.data)
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Jabatan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Jabatan:  </label>
                        <input type="text"  className="form-control" name="jabatan" value={this.state.jabatan} 
                        onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}