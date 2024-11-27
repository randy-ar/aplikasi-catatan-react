import React from "react"

const ButtonCardCatatan = (props) => {
  return <button className={props.className} onClick={() => props.onClickHandler(props.catatan.id)}>{props.children}</button>
}

export default ButtonCardCatatan