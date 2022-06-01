import { useState } from "react";
import './App.css';
import Layout from "./Layout";
import Popup from "./Popup";



function App() {
  const [pick, setPick] = useState([]);
  

  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }
  return (
    <>
      <Popup  pick={pick} setPick={setPick} />
      <Layout  setPick={setPick} pick={pick}
      // togglePopup={togglePopup}
      >
      </Layout>
    </>
  );
}

export default App;
