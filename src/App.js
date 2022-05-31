import { useState } from "react";
import './App.css';
import Layout from "./Layout";
import Popup from "./Popup";




function App() {
  const[pick,setPick]=useState([])

  return (
    <>
      <Popup  pick={pick} />
      <Layout setPick={setPick}>
      </Layout>
    </>
  );
}

export default App;
