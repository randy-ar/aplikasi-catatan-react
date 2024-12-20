import React from "react";

class NavbarLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <nav className="navbar">
        <h1>Aplikasi Ambasing untuk Member JMK 48</h1>
        <input maxLength={50} value={this.props.cari} onChange={this.props.onCariChangeHandler} placeholder="Cari catatan" type="text"/>
      </nav>
    )
  }

}

export default NavbarLayout