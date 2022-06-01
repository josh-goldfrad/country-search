import { useState } from "react";
export default function Popup(props) {
  // console.log(props.pick);
  // const[close,setClose]=useState(false)
  let hide ="";
 
    if (props.pick.length === 0) {
      console.log(window.event);
      hide ="hidden"
    }
  else {
    hide="";
    // if(window.event){
    //   // hide="hidden"
    //   console.log(window.event);

    // }
  }

  return (
    <div className={"container"+hide} onClick={()=>props.setPick([])}
    //  onClick={()=>hide="hidden"} >
    >
      <div className={"popup"+hide}>
        <span className="close-icon" >x</span>
        <h4 className={'popupheader'+hide}>name:{props.pick[4]}</h4>
        <img className={'img'+hide} src={props.pick[1]} alt={props.pick[4]}></img>
        <h4 className={'popupbody'+hide}>capital:{props.pick[0]}</h4>
        <h4 className={'popupfooter'+hide}>population:{props.pick[2]}</h4>


      </div>
    </div>
  );
}



