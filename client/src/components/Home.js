import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapWidget from './MapWidget';

class Home extends Component {
  render() {
    if (this.props.user) {
      if (this.props.user.role[0] === 'Neighborhood Ambassador') {
        return(
          <div>
            <br/>
            <p>Ambassador dashboard</p>
            <MapWidget user={this.props.user} />
          </div>
        );
      }
      else if (this.props.user.role[0] === 'Prospective Homebuyer') {
        return(
          <div>
            <br/>
            <p>Prospective Homebuyer dashboard</p>
            <MapWidget user={this.props.user} />
          </div>
        );
      }
    }
    return(
      <div>
        <br/>
        <h2>Sign up as:</h2>
        <Link to="/ambassador-registration"><button className="btn btn-primary role-button">Neighborhood Ambassador</button></Link>
        <Link to="/homebuyer-registration"><button className="btn btn-primary role-button">Prospective Home-buyer</button></Link>
      </div>
    );
  }
}

export default Home;