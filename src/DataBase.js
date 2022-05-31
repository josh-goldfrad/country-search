import { useEffect } from 'react';

export default function DataBase(props) {
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);/// this dosent stop printing
        props.DataBaseBuilder((data))
      },[] )
  })
}