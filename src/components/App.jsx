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
    <div>
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
