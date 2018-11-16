import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function BodyHome(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      <div>
      <h1>Tap Room!</h1>
      <Link to="/">Home</Link> | <Link to="/events">See Events</Link> | <Link to="/about">About Us</Link> | <Link to='/inventory'>Inventory</Link>
    </div>
    </div>
  );
}

//BodyHome.propTypes = {
//};

export default BodyHome;
