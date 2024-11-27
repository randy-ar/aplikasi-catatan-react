import React from "react";
import NavbarLayout from "./Navbar";
import { FilterContext } from "../utils/context/FilterContext";

class AppLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cari: "",
    }

    this.onCariChangeHandler = this.onCariChangeHandler.bind(this)
  }
  
  render() {
    return (
      <div>
        <FilterContext.Provider value={{cari: this.state.cari}}>
          <NavbarLayout 
            cari={this.state.cari}
            onCariChangeHandler={this.onCariChangeHandler}
          />
          {this.props.children}
        </FilterContext.Provider>
      </div>
    )
  }

  onCariChangeHandler(event) {
    console.log("Cari Changed", event.target.value)
    this.setState({
      cari: event.target.value
    })
  }
}

export default AppLayout