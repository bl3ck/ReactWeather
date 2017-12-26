var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>A weather application build on React. I have built this for
         my small react course
      </p>
      <p>Here are the tools i used</p>
      <ul>
        <li><a href="https://facebook.github.io/react" target="_blanck">React </a>This was the JavaScript framework used</li>
        <li><a href="http://openweathermap.org" target="_blanck">Open Weather Map </a>I used Open Weather Map to search for weather data by city name</li>
      </ul>
    </div>
  )
};

module.exports = About;
