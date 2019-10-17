import React, { Component } from 'react';
import axios from 'axios'
export default class Create extends Component {
constructor(props){
    super(props)
    this.state = {
        karyawan : null,
        divisi : 2,
        jabatan : 1,
        optionJabatan : [],
        optionDivisi : []
     }
     this.handlerChange = this.handlerChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
}
    fetchDataJabatan(){
        axios.get('http://localhost:8000/jabatan/')
        .then(res => res.data)
        .then(optionJabatan => this.setState({optionJabatan}))
    }
    fetchDataDivisi(){
        axios.get('http://localhost:8000/divisi/')
        .then(res => res.data)
        .then(optionDivisi => this.setState({optionDivisi}))
    }
    componentDidMount(){
        this.fetchDataJabatan()
        this.fetchDataDivisi()
    }

  onSubmit(e) {
    e.preventDefault();
    const { jabatan , karyawan , divisi } = this.state
    console.log(jabatan,divisi)
    axios({
        method: 'post',
        url: 'http://localhost:8000/karyawan/',
        data: {
          nama_karyawan: karyawan,
          jabatan,
          divisi
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
        const { optionDivisi , optionJabatan} = this.state
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Karyawan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Karyawan:  </label>
                        <input type="text" className="form-control" name="karyawan" value={this.state.value} 
                        onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <label>Jabatan:  </label>
                        <select className="form-control" name="jabatan" value={this.state.jabatan} onChange={this.handlerChange}>
                           {
                               optionJabatan.map((key,index) => {
                                   return <option key={key.id} value={key.id}>{key.nama_jabatan}</option>
                               })
                                
                           }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Divisi:  </label>
                        <select className="form-control" name="divisi" value={this.state.divisi} onChange={this.handlerChange}>
                           {
                               optionDivisi.map((key,index) => {
                                   return <option key={key.id} value={key.id}>{key.nama_divisi}</option>
                               })
                                
                           }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}