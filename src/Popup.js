
export default function Popup(props) {
  console.log(props);
  return (
    <div className="container">
    <div className="popup">

      <h4 className='popupheader'>name:{props.pick[4]}</h4>
      <img className='img' src={props.pick[1]} alt={props.pick[4]}></img>
      <h4 className='popupbody'>capital:{props.pick[0]}</h4>
      <h4 className='popupfooter'>population:{props.pick[2]}</h4>
      {/* <h4 className='cardfooter'>languages:{props.pick}</h4> */}

    
    </div>
    </div>
  );
}



