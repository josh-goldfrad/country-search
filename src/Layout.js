import Header from "./ContextChildren/Header";
import { createContext, useEffect, useState } from "react";
import CountryList from "./CountryList"

export const SupremeContext = createContext()
function Layout(props) {
  const [Countries, setCountries] = useState([])
  const [filterd, setFilterd] = useState([])
  const [inputVal, setInputVal] = useState("")
  const [popUp_pick,setPopUp_pick]=useState([])
// console.log(filterd);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        data.map((country)=> ! country.cca2.includes("PS"))
        function compare( a, b ) {
          if ( a.cca2 < b.cca2 ){
            return -1;
          }
          if ( a.cca2 > b.cca2 ){
            return 1;
          }
          return 0;
        }
        data.sort( compare );
        setCountries((data))
        
        
        setFilterd(data)
      })
  }, [])

 
  useEffect(() => {
    setFilterd(Countries.filter((country) => country.name.common.toLowerCase().includes(inputVal)))
  }, [inputVal])

  useEffect(()=>{
   
    props.setPick(popUp_pick)
  },[popUp_pick])

  if (Countries.length === 0) {
    return <h1>loading...</h1>
  }
  return (
    <>
<    SupremeContext.Provider value={{filterd,setInputVal,inputVal,setFilterd,Countries}}>
      <Header setInputVal={setInputVal} Countries={Countries} setFilterd={setFilterd}>
      </Header>
      <CountryList  Countries={Countries} filterd={filterd} setPopUp_pick={setPopUp_pick} pick={props.pick}>
      {/* // togglePopup={props.togglePopup} */}
       
      
      </CountryList >
      </SupremeContext.Provider>



    </>
  );
}

export default Layout;