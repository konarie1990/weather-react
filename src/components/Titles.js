import React from "react";

const Titles = () => (
  <div>
    <h1 className="title-container__title">Weather App</h1>
    <h3 className="title-container__subtitle">
      Delivering current weather updates courtesy of OpenWeatherMap API
    </h3>
  </div>
);

export default Titles;

// REFACTORED CODE ABOVE
// class Titles extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Weather Finder</h1>
//         <p>Find out temperature conditions and more</p>
//       </div>
//     );
//   }
// };

// export default Titles;
