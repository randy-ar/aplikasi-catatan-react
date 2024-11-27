import React from "react"

class TambahCatatan extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      body: "",
    }

    this.maxLength = 50

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
  }
  render() {
    return (
      <div className="tambah-catatan">
        <h2>Buat Catatan</h2>
        <form className="form-catatan" onSubmit={this.onSubmitHandler}>
          <small>Sisa input karakter {this.maxLength - this.state.title.length}</small>
          <input required onChange={this.onTitleChangeHandler} placeholder="Judul Catatan" type="text" name="title" id="title" value={this.state.title} />
          <textarea required onChange={this.onBodyChangeHandler} placeholder="Tulis catatan disini" rows={8} name="bodyt" id="bodyt" value={this.state.body}></textarea>
          <div className="form-catatan-action">
            <input type="submit" value="Tambah" className="btn-primary"/>
          </div>
        </form>
      </div>
    )
  }

  onTitleChangeHandler(e) {
    if(e.target.value.length <= this.maxLength) {
      this.setState({
        title: e.target.value
      })
    }
  }

  onBodyChangeHandler(e) {
    this.setState({
      body: e.target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault()
    this.props.addCatatan(this.state)

    this.setState({
      title: "",
      body: "",
    })
  }
}

export default TambahCatatan