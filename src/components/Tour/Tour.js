import React from "react";
import "./Tour.scss";
export default class Tour extends React.Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="image of the tour" />
          <span onClick={() => removeTour(id)} className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>City:{city}</h3>
          <h4>Tour:{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
