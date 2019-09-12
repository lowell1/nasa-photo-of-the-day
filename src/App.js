import React, {useState, useEffect} from "react";
import Image from "./Image";
import PageHeader from "./PageHeader";
import axios from "axios";
import DateSelector from "./DateSelector";
import FunButtons from "./FunButtons";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");

  const setUrlDate = newDate => {
    // console.log(newDate);
    setDate(newDate);
  }
  
  useEffect(() => {
//    console.log("date = " + date);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=tqvTjfcNImC6UOPhJO1UaQBgWevjeaAt3EOZ40gh&date=${date}`)
      .then((resp) => {
        setData(resp.data);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [date]);


  return (
    <div className="App">
      <PageHeader/>
      <Image data={data}/>
      <DateSelector setUrlDate={setUrlDate}/>
      <FunButtons/>
    </div>
  );
}

export default App;
