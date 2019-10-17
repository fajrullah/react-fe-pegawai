import React, { Component } from 'react';
import axios from 'axios'
export default class Index extends Component {
    state = {
        data : []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/jabatan/')
        .then(res => res.data)
        .then(data => this.setState({data}))
    }
    render() {
        const { data } = this.state
        return (
            <div>
            <h3 align="center">Jabatan</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama Jabatan</th>
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
                                    {key.nama_jabatan}
                                </td>
                                <td>
                                    <button className="btn btn-primary">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
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