import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function Header() {
    return (
        <div>
            <h1>Tap Room!</h1>
            <Link to="/">Home</Link> | <Link to="/events">See Events</Link> | <Link to="/about">About Us</Link> | <Link to='/inventory'>Inventory</Link>

        </div>
    );
}



export default Header;
