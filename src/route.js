import Karyawan from './components/karyawan/index.component';
import Divisi from './components/divisi/index.component';
import Jabatan from './components/jabatan/index.component';


// const routes = [
//     {path : '/create' , exact : true , component : Create , name : 'Divisi Create'},
//     {path : '/edit/:id' ,  component : Edit , name : 'Divisi Create'},
//     {path : '/index' ,  component : Index , name : 'Divisi Create'}
// ]

const routes = [
    {path : '/karyawan' , exact : true , component : Karyawan , name : 'Karyawan'},
    {path : '/divisi' ,  component : Divisi , name : 'Divisi'},
    {path : '/jabatan' ,  component : Jabatan , name : 'Jabatan'}
]

export default  routes