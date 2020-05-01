import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ShowMap extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch(
  //     "https://cors-anywhere.herokuapp.com/http://129.146.43.239:5000/data",
  //     { mode: "cors" }
  //   )
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       // console.log(jsonData);
  //       this.setState({
  //         data: jsonData,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  static defaultProps = {
    center: {
      lat: 37.773972,
      lng: -122.431297,
    },
    zoom: 11,
  };

  render() {
    // console.log(this.props.data);
    let config = require("../config.json");
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.google_maps_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={{
            positions: this.props.data.map((value) => {
              return {
                lat: value.lat,
                lng: value.lng,
                weight: [value.confirmed].map((v) => {
                  if (v > 20000) {
                    return 20000;
                  } else {
                    return v;
                  }
                })[0],
              };
            }),
            options: {
              radius: 80,
              opacity: 0.7,
            },
          }}
        >
          {/* {this.state.data.map((value, index) => (
            <Figure lat={value.lat} lng={value.lng}>
              <Figure.Image width={5 * Math.log(value.confirmed)} src={pin} />
            </Figure>
          ))} */}
        </GoogleMapReact>
      </div>
    );
  }
}
