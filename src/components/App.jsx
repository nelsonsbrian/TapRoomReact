import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  BodyHome  from './BodyHome';
import  BodyAbout  from './BodyAbout';
import  BodyEvents  from './BodyEvents';
import  BodyInventory  from './BodyInventory';
import  Header  from './Header';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App() {
    return (
        <div className="bgBody">
            <style jsx>{`
                .bgBody {
                    background: black;
                    background-image: url("https://wallpaperstock.net/wallpapers/thumbs1/25693wide.jpg");
                    background-repeat: no-repeat;
                    background-position-y: 125px; 
                    background-attachment: fixed;
                    height: 900px;
                }
                `}</style>
            <Header />
            <Switch>
                <Route exact path='/' component={BodyHome} />
                <Route path='/about' component={BodyAbout} />
                <Route path='/events' component={BodyEvents} />
                <Route path='/inventory' component={BodyInventory} />
            </Switch>
        </div>
    );
}


export default App;
