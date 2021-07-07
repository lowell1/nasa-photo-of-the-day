import React, {useState, useEffect} from "react";
import Image from "./Image";
import PageHeader from "./PageHeader";
import axios from "axios";
import DateSelector from "./DateSelector";
import DatePicker from "react-datepicker";
import FunButtons from "./FunButtons";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const [datePickerDate, setDatePickerDate] = useState(new Date());

  const setUrlDate = newDate => {
    console.log(newDate);
    setDate(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
    setDatePickerDate(newDate);
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

  // handleDateChange

  return (
    <div className="App">
      <PageHeader/>
      <Image data={data}/>
      <FunButtons setUrlDate={setUrlDate}/>
      <DatePicker selected={datePickerDate} onChange={setUrlDate}/>
    </div>
  );
}

export default App;
