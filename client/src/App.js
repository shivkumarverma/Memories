import React from 'react';
import  {Container}  from '@material-ui/core';
//import { render } from "react-dom";
import { BrowserRouter,Switch,Route,Redirect} from "react-router-dom";

import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails.jsx'


const App = () => {

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
    <Container maxWidth="xl">
     <Navbar/>  
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/posts" />}/>
      <Route path="/posts" exact component={Home}/>
      <Route path="/posts/search" exact component={Home}/>
      <Route path="/posts/:id" exact component={PostDetails}/>
      <Route path="/auth"  component={() => (!user ? <Auth/>:<Redirect to="/posts"/>)}/>
    </Switch>
    
    </Container>
     </BrowserRouter>
  );
  
};

export default App;