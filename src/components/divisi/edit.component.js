import React, { Component } from 'react';
import axios from 'axios'
export default class Edit extends Component {
constructor(props){
    super(props)
    this.state = {
        divisi : 'Loading...',
        id : null,
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
}
    fetchData(){
        axios.get(`http://localhost:8000/divisi/${this.props.match.params.id}`)
        .then(res => res.data[0])
        .then(data => {
            this.setState({
                id : data.id,
                divisi : data.nama_divisi,
            })
        })
    }
    componentDidMount(){
        this.fetchData()
    }

  onSubmit(e) {
    e.preventDefault();
    const { divisi, id } = this.state
    console.log(id)
    axios({
        method: 'put',
        url: `http://localhost:8000/divisi/${id}`,
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
        console.log(this.state.data)
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Divisi</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Divisi:  </label>
                        <input type="text"  className="form-control" name="divisi" value={this.state.divisi} 
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