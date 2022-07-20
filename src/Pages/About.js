import React, { Component } from "react";
import AboutApp from "../Pages/AboutApp";
import AboutTeam from "../Pages/AboutTeam";
import {Route,Routes,Link,Outlet} from 'react-router-dom';


class About extends Component {
  constructor() {
    super();
    console.log("About -> constructor");
  }
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: 55 });
  };

  componentDidMount() {
    console.log("About -> componentDidMount");
  }

  componentDidUpdate(a, b, c, d) {
    console.log("About -> componentDidUpdate", a, b, c, d);
  }

  render() {
    console.log("About -> render");

    return (
      <div>
        
        <h1>About Page</h1>
         <div className="row">
          <div className="col-3">
            {/* Don't Forget Use NavLink In Header .. Important */}
            {/* Using Outlet To Nested Route */}
            <Link className="d-block" to="/about/team">  Our Team </Link>
            <Link className="d-block" to="/about/app">  Our App </Link>
            <Outlet/>
          </div>
         </div>


        {/* Nested Routes .. Part 2 OF Task */}
       {/* <Routes>
        <Route path="team" element={<AboutTeam />} />
        <Route path="app" element={<AboutApp />} />
       </Routes> */}
      </div>
    );
  }
}

export default About;