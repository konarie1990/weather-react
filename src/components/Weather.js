import React from "react";

const Weather = props => {
  return (
    <div>
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {/* // error message below */}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;

// REFACTORED CODE ABOVE
// class Weather extends React.Component {
//   render() {
//     return (
//       <div>
//       {this.props.city && this.props.country && (
//         <p>
//           Location: {this.props.city}, {this.props.country}
//         </p>
//       )}
//       {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//       {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//       {this.props.description && <p>Conditions: {this.props.description}</p>}
//       {/* // error message below */}
//       {this.props.error && <p>{this.props.error}</p>}
//     </div>
//     );
//   }
// }

// export default Weather;
