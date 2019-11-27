import React from "react";
import Tour from "../Tour";
import "./TourList.scss";
import { tourData } from "../../tourData";

export default class TourList extends React.Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    const { tours } = this.state;
    const sortedtours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedtours
    });
  };

  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
