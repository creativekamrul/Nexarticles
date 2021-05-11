import './App.css';
import React from "react";
import Header from "./components/Header";
import BlogPage from "./components/BlogPage";
import SingleBlogPage from "./components/SingleBlogPage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Button from "@material-ui/core/Button";

function App() {

  return (
      <>
      <Router>
              <div>
                  <Header/>
                  <Switch>
                      <Route path="/" exact >
                          <BlogPage/>
                      </Route>
                      <Route path="/posts/:id" children={<SingleBlogPage/>}>
                      </Route>
                      <Route path="*" exact >
                          <div className='loading'>
                              <h1>Opps! The link is wrong</h1>
                              <Button variant="contained" color="primary" href='/'>
                                  Home
                              </Button>
                          </div>
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
      </Router>

      </>
  );
}

export default App;
