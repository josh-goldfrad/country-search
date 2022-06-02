export default function Popup(props) {
  // console.log(props.pick);
  // const[close,setClose]=useState(false)
  let hide ="";
 
    if (props.pick.length === 0) {
      // console.log(window.event);
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
        <h3 className={'popupheader'+hide}>Name: {props.pick[4]}</h3>
        <img className={'img'+hide} src={props.pick[1]} alt={props.pick[4]}></img>
        <h3 className={'popupbody'+hide}>Capital: {props.pick[0]}</h3>
        <h3 className={'popupfooter'+hide}>Population: {props.pick[2]}</h3>
        <h3 className={'popupfooter'+hide}>Total land area in km: {props.pick[5]}</h3>
        <h3 className={'popupfooter'+hide}>Is the country landlocked :{  (props.pick[7]===true?"yes":"no")}</h3>
        <h3 className={'popupfooter'+hide}>Continent: {props.pick[6]}</h3>



      </div>
    </div>
  );
}



