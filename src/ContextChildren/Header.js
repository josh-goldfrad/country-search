import { useContext } from "react";
import CountrySelect from "../CountrySelect";
import { SupremeContext } from "../Layout";


function Header(props) {
  const { filterd } = useContext(SupremeContext)
  const { setFilterd } = useContext(SupremeContext)
  const { setFilterWithApi } = useContext(SupremeContext)
const{setInputVal}=useContext(SupremeContext)


  return (
    <>
      <h3>number of countries:{filterd.length}</h3>
      <input type="text" onChange={() => {setInputVal(window.event.target.value)}}></input>

      {/* <CountrySelect setFilterWithApi={setFilterWithApi}></CountrySelect> */}

    </>
  );
}

export default Header;