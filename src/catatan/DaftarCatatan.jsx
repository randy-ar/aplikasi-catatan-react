import CardCatatan from "./parts/CardCatatan"

const DaftarCatatan = (props) => {
  return (
    <div className="container-catatan">
      <h2 className="judul-catatan">{props.title}</h2>
      <div className="daftar-catatan">
        {
          props.daftar_catatan.length === 0 ? <p className="text-center colspan-all">Tidak ada catatan</p> :
          props.daftar_catatan.map((catatan) => {
            return (
              <CardCatatan
                key={catatan.id}
                catatan={catatan}
                deleteCatatan={props.deleteCatatan}
                archiveCatatan={props.archiveCatatan}
              ></CardCatatan>
            )
          })
        }
      </div>
    </div>
  )
}

export default DaftarCatatan