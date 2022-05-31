import Main from "./ContextChildren/Main";
import Header from "./ContextChildren/Header";
import { createContext, useEffect, useState } from "react";
import CountryList from "./CountryList"
import CountrySelect from "./CountrySelect";

export const SupremeContext = createContext()
function Layout(props) {
  const [Countries, setCountries] = useState([])
  const [filterd, setFilterd] = useState([])
  const [inputVal, setInputVal] = useState("")
  const [popUp_pick,setPopUp_pick]=useState([])
  const[filterWithApi,setFilterWithApi]=useState([])
// console.log(filterd);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
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
        // console.log(data);
        setCountries((data))
        
        
        setFilterd(data)
      })
  }, [])

  useEffect(()=>{
    console.log(filterWithApi);
  },[filterWithApi])
  useEffect(() => {
    setFilterd(Countries.filter((country) => country.name.common.toLowerCase().startsWith(inputVal)))
    console.log(inputVal);
  }, [inputVal,CountrySelect])

  useEffect(()=>{
   
    props.setPick(popUp_pick)
  },[popUp_pick])

  if (Countries.length === 0) {
    return <h1>loading...</h1>
  }
  return (
    <>
<    SupremeContext.Provider value={{filterd,setInputVal,inputVal,setFilterd,Countries,setFilterWithApi}}>
      <Header setInputVal={setInputVal} Countries={Countries} setFilterd={setFilterd}setFilterWithApi={setFilterWithApi}>
      </Header>
      <CountryList Countries={Countries} filterd={filterd} setPopUp_pick={setPopUp_pick} >
      
      </CountryList >
      </SupremeContext.Provider>



    </>
  );
}

export default Layout;