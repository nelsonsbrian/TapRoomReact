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
            <style jsx>{`
                h1, h3{
                    text-align: center;
                    color: white;
                }
            `}</style>
            <h1>Welcome to the Tap Room</h1>
            <h3>Happy Hour Kegs</h3>
            <h3><Link to="/">Home</Link> | <Link to="/events">See Events</Link> | <Link to="/about">About Us</Link> | <Link to='/inventory'>Inventory</Link></h3>
        </div>
    );
}

export default Header;
