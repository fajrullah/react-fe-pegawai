import React, { Component } from 'react';
import axios from 'axios'
export default class Edit extends Component {
constructor(props){
    super(props)
    this.state = {
        karyawan : 'Loading...',
        id : null,
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

    fetchData(){
        axios.get(`http://localhost:8000/karyawan/${this.props.match.params.id}`)
        .then(res => res.data[0])
        .then(data => {
            this.setState({
                id : data.id,
                karyawan : data.nama_karyawan,
     
            })
        })
    }
    componentDidMount(){
        this.fetchData()
        this.fetchDataJabatan()
        this.fetchDataDivisi()
    }

  onSubmit(e) {
    e.preventDefault();
    const { karyawan, divisi , jabatan, id } = this.state
    console.log(karyawan, divisi , jabatan, id)
    axios({
        method: 'put',
        url: `http://localhost:8000/karyawan/${id}`,
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
        [e.target.name] : e.target.value,
        jabatan : this.refs.jabatan.value,
        divisi : this.refs.divisi.value
    })
  }
    render() {
        const { optionDivisi , optionJabatan} = this.state
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Karyawan</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nama Karyawan:  </label>
                        <input type="text"  className="form-control" name="karyawan" value={this.state.karyawan} 
                        onChange={this.handlerChange}/>
                    </div>
                    <div className="form-group">
                        <label>Jabatan:  </label>
                        <select className="form-control" ref="jabatan" value={this.state.jabatan} onChange={this.handlerChange}>
                           {
                               optionJabatan.map((key,index) => {
                                   return <option key={key.id} value={key.id}>{key.nama_jabatan}</option>
                               })
                                
                           }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Divisi:  </label>
                        <select className="form-control" ref="divisi" value={this.state.divisi} onChange={this.handlerChange}>
                           {
                               optionDivisi.map((key,index) => {
                                   return <option key={key.id} value={key.id}>{key.nama_divisi}</option>
                               })
                                
                           }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}