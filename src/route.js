import Create from './components/divisi/create.component';
import Edit from './components/divisi/edit.component';
import Index from './components/divisi/index.component';


// const routes = [
//     {path : '/create' , exact : true , component : Create , name : 'Divisi Create'},
//     {path : '/edit/:id' ,  component : Edit , name : 'Divisi Create'},
//     {path : '/index' ,  component : Index , name : 'Divisi Create'}
// ]

const routes = [
    {path : '/karyawan' , exact : true , component : Create , name : 'Karyawan'},
    {path : '/divisi' ,  component : Edit , name : 'Divisi'},
    {path : '/jabatan' ,  component : Index , name : 'Jabatan'}
]

export default  routes