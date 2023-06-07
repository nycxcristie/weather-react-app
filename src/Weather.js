import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleresponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}°C`
    );
  }
  let apiKey = `a2dda52dce059eb8a14e95aaa0db6ab7`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleresponse);
  return <h2>Hello from Weather!</h2>;
}
