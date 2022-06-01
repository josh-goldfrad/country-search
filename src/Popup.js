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
        <h3 className={'popupheader'+hide}>name:{props.pick[4]}</h3>
        <img className={'img'+hide} src={props.pick[1]} alt={props.pick[4]}></img>
        <h3 className={'popupbody'+hide}>capital:{props.pick[0]}</h3>
        <h3 className={'popupfooter'+hide}>population:{props.pick[2]}</h3>
        <h3 className={'popupfooter'+hide}>total land area in km:{props.pick[5]}</h3>
        <h3 className={'popupfooter'+hide}>is the country landlocked `("true" is yes)`:{props.pick[7]}</h3>
        <h3 className={'popupfooter'+hide}>continent:{props.pick[6]}</h3>



      </div>
    </div>
  );
}



