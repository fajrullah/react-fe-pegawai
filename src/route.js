import Karyawan from './components/karyawan/index.component';
import Divisi from './components/divisi/index.component';
import Jabatan from './components/jabatan/index.component';

import createJabatan from './components/jabatan/create.component';
import createKaryawan from './components/karyawan/create.component';
import createDivisi from './components/divisi/create.component';

import editJabatan from './components/jabatan/create.component';
import editKaryawan from './components/karyawan/create.component';
import editDivisi from './components/divisi/create.component';
// const routes = [
//     {path : '/create' , exact : true , component : Create , name : 'Divisi Create'},
//     {path : '/edit/:id' ,  component : Edit , name : 'Divisi Create'},
//     {path : '/index' ,  component : Index , name : 'Divisi Create'}
// ]

const routes = [
    {path : '/karyawan' , exact : true , component : Karyawan , name : 'Karyawan'},
    {path : '/divisi' ,  component : Divisi , name : 'Divisi'},
    {path : '/jabatan' ,  component : Jabatan , name : 'Jabatan'},
    {path : '/createJabatan' ,  component : createJabatan , name : 'Jabatan'},
    {path : '/createDivisi' ,  component : createDivisi , name : 'Divisi'},
    {path : '/createKaryawan' ,  component : createKaryawan , name : 'Karyawan'},
    {path : '/editJabatan' ,  component : editJabatan , name : 'Jabatan'},
    {path : '/editKaryawan' ,  component : editKaryawan , name : 'Karyawan'},
    {path : '/editDivisi' ,  component : editDivisi, name : 'Divisi'}
]

export default  routes