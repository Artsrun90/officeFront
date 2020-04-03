import React from "react";
import Lod from "../loading.gif"

class Lodding extends React.Component {

  lodding(){
    if(this.props.lodding){
      return <img src={Lod} alt="Lodding"/>
    }
  }
  
  render() {
      return(
            <div style={{marginLeft: "650px", marginTop: "80px"}}>
               {this.lodding()}
            </div>       
           );
  }
}
export default Lodding;
