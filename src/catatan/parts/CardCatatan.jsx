import React from "react"
import ButtonCardCatatan from "./ButtonCardCatatan"


class CardCatatan extends React.Component {
  constructor(props) {
    super(props)

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
  }
  render() {
    return (
      <div className="card-catatan">
        <div>
          <h3>{this.props.catatan.title}</h3>
          <small>{this.formatTanggal(this.props.catatan.createdAt)}</small>
          <p>{this.props.catatan.body}</p>
        </div>
        <div className="card-catatan-action">
          <ButtonCardCatatan
            className="btn-danger"
            catatan={this.props.catatan}
            onClickHandler={this.onDeleteHandler}
          >
            Hapus
          </ButtonCardCatatan>
          <ButtonCardCatatan
            className={this.props.catatan.archived ? "btn-warning" : "btn-primary"}
            catatan={this.props.catatan}
            onClickHandler={this.onArchiveHandler}
          >
            {this.props.catatan.archived ? "Pulihkan" : "Arsipkan"}
          </ButtonCardCatatan>
        </div>
      </div>
    )
  }

  formatTanggal(date) {
    const newDate = new Date(date)
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(newDate);
    return formattedDate
  }

  onDeleteHandler(id) {
    this.props.deleteCatatan(id)
  }

  onArchiveHandler(id) {
    this.props.archiveCatatan(id)
  }
}

export default CardCatatan