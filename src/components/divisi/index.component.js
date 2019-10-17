import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Index extends Component {
    state = {
        data : []
    }
    fetchData(){
        axios.get('http://localhost:8000/divisi/')
        .then(res => res.data)
        .then(data => this.setState({data}))
    }
    componentDidMount(){
        this.fetchData()
    }
    onClick(e){
        axios.delete(`http://localhost:8000/divisi/${e}`)
        .then(res => res.data)
        .then(status => {
            alert(status)
            this.fetchData()
        })
    }
    render() {
        const { data } = this.state
        return (
            <div>
            <h3 align="center">Divisi</h3>
            <Link to={"/createDivisi"} className="btn btn-success">Add</Link>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Divisi</th>
                  <th colSpan="2">Act</th>
                </tr>
              </thead>
              <tbody>
                    {
                        data.map((key,index) => {
                            return (
                            <tr key={key.id}>
                                <td>
                                    {key.id}
                                </td>
                                <td>
                                    {key.nama_divisi}
                                </td>
                                <td>
                                    <Link to={"/editDivisi/"+key.id} className="btn btn-warning">Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={this.onClick.bind(this,key.id)}>Delete</button>
                                </td>
                            </tr>)
                        })

                    }
              </tbody>
            </table>
          </div>
        )
    }
}