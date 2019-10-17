import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Index extends Component {
    state = {
        data : []
    }
    fetchData(){
        axios.get('http://localhost:8000/karyawan/')
        .then(res => res.data)
        .then(data => this.setState({data}))
    }
    componentDidMount(){
        this.fetchData()
    }
    onClick(e){
        axios.delete(`http://localhost:8000/karyawan/${e}`)
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
            <h3 align="center">Karyawan</h3>
            <Link to={"/createKaryawan"} className="btn btn-success">Add</Link>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Karyawan</th>
                  <th>Jabatan</th>
                  <th>Divisi</th>
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
                                    {key.nama_karyawan}
                                </td>
                                <td>
                                    {key.jabatan.nama_jabatan}
                                </td>
                                <td>
                                    {key.divisi.nama_divisi}
                                </td>
                                <td>
                                    <Link to={"/editKaryawan/"+key.id} className="btn btn-warning">Edit</Link>
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