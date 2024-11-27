import React, { useContext } from "react"
import DaftarCatatan from "./DaftarCatatan"
import TambahCatatan from "./TambahCatatan"
import { getInitialData } from "../utils/catatan"
import Swal from 'sweetalert2'
import { FilterContext } from "../utils/context/FilterContext"

class CatatanApp extends React.Component{
  constructor(props){
    super(props)

    console.log("Props", props);
    this.state = {
      daftar_catatan: getInitialData(),
    }

    this.addCatatan = this.addCatatan.bind(this)
    this.deleteCatatan = this.deleteCatatan.bind(this)
    this.archiveCatatan = this.archiveCatatan.bind(this)
  }

  render(){

    return (
      <div className="app-catatan">
        <h1>{this.state.cari}</h1>
        <TambahCatatan
          addCatatan={this.addCatatan}
        ></TambahCatatan>
        <FilterContext.Consumer>
          {
            ({cari}) => {
              let filtered_catatan = this.state.daftar_catatan.map(catatan => catatan);
              filtered_catatan = filtered_catatan.filter(catatan => {
                console.log("filter cari: ",cari.toLowerCase());
                console.log("title: ", catatan.title.toLowerCase());
                console.log("boolean: ", catatan.title.toLowerCase().includes(cari.toLowerCase()));
                return catatan.title.toLowerCase().includes(cari.toLowerCase())
              })
              console.log("state: ",this.state.daftar_catatan);
              console.log("filtered: ",filtered_catatan);
              return (
                <>
                  <DaftarCatatan
                    title="Catatan Aktif"
                    daftar_catatan={filtered_catatan.filter(catatan => !catatan.archived)}
                    deleteCatatan={this.deleteCatatan}
                    archiveCatatan={this.archiveCatatan}
                  ></DaftarCatatan>
                  <DaftarCatatan
                    title="Arsip Catatan"
                    daftar_catatan={filtered_catatan.filter(catatan => catatan.archived)}
                    deleteCatatan={this.deleteCatatan}
                    archiveCatatan={this.archiveCatatan}
                  ></DaftarCatatan>
                </>
              )
            }
          }
        </FilterContext.Consumer>
      </div>
    )
  }

  addCatatan({title, body}){
    this.setState((previousState) => {
      return {
        daftar_catatan: [
          ...previousState.daftar_catatan,
          {
            id: +new Date(),
            title: title,
            body: body,
            archived: false,
            createdAt: new Date().toISOString(),
          }
        ]
      }
    })
  }

  deleteCatatan(id){
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: "Catatan akan dihapus secara permanen",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.setState((previousState) => {
          return {
            daftar_catatan: previousState.daftar_catatan.filter(catatan => catatan.id !== id)
          }
        });
      }
    })
  }

  archiveCatatan(id){
    this.setState((previousState) => {
      return {
        daftar_catatan: previousState.daftar_catatan.map((catatan) => {
          if(catatan.id === id){
            return {
              ...catatan,
              archived: !catatan.archived
            }
          }
          return catatan
        })
      }
    })
  }

  cariCatatan(cari){
    this.setState((previousState) => {
      const filtered_catatan = previousState.daftar_catatan;
      if(cari){
        filtered_catatan.filter(catatan => 
          catatan.title.toLowerCase().includes(cari.toLowerCase())
        )
      }
      return {
        daftar_catatan: filtered_catatan
      }
    })
  }
}

export default CatatanApp