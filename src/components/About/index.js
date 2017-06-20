// Dependencies
import React, { Component } from 'react';

// Assets
import '../Global/css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About Me</h1>
        <img src="/images/components/about/AboutMe.jpg" alt="About Me" />
        <h2>I'm passionate Front End Engineer.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et nunc mauris. Vivamus in ante tristique nisl sodales tincidunt in ac nulla. Quisque auctor iaculis nisl, id vehicula dui dignissim id. Vivamus elementum arcu orci, vehicula laoreet mi porta non. Vivamus sollicitudin porttitor congue. Proin imperdiet ornare mattis. Cras consectetur turpis sapien, quis vehicula augue volutpat quis. Proin tempor orci vel nisl rhoncus rutrum eu eget magna. Vestibulum at metus ultricies, rutrum elit id, rutrum est. Aenean pulvinar commodo convallis. Nunc aliquet ligula eu nibh rhoncus, vel varius tellus pellentesque.</p>
      </div>
    );
  }
}

export default About;
