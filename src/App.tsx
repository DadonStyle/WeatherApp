import { useState } from 'react';
import axios from "axios"
import './App.css';
import notify from './Services/Notify';
import 'notyf/notyf.min.css';

function App() {
  const APIkey = "fe60ba74c8b5e3ce0b37558b7b51afdd"
  const [cityName, setCityName] = useState(String);
  const [weather, setWeather] = useState(Number);

  const fetchData = async () => {
    try {
        console.log(cityName);
        const data = await axios.get(
          "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&" + "units=metric" + "&" + "appid=" + APIkey
        );
        setWeather(data.data.main.temp)
        notify.success("succeed")
      }catch (err) {
        notify.error("something went wrong")
      }
    }



  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="inputBTN" onChange={e=>{setCityName(e.target.value)}} placeholder="city name"/><br/>
        <input type="submit" id="submitBTN" onClick={fetchData}/>
        <p>the current temp is: {weather}{'\u00b0'}</p>
      </header>
    </div>
  );
}

export default App;


