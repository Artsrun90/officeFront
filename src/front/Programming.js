import React from "react";
import s from "./style.module.css";
import MPP from "./MPP.png"

class Programming extends React.Component {

  
  
  render() {
    console.log("props",this.props.history)
    console.log("render")
    return (
      <div className={s.div}>
        <img src={MPP}/>
      </div>
    );
  }
}

export default Programming;
