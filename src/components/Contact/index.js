// Dependencies
import React, { Component } from 'react';

// Assets
import '../Global/css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact Me</h1>

        <section className="contactInformation">
          <p className="information">Contact Me</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id purus maximus, laoreet risus in, aliquet tellus.</p>
          <p className="information">PHONE</p>
          <p>1-800-123-4567</p>
          <p>1-800-123-4567</p>
          <p>1-800-123-4568</p>
          <p className="information">EMAIL</p>
          <p>telematicacristina@gmail.com</p>
          <p className="information">ADDRESS</p>
          <p>Los Angeles, California</p>
        </section>


        <section className="contactForm">
          <form>
            <label>Name</label>
            <input type="text" name="status" maxlength="140" />

            <label>Email</label>
            <input type="text" name="status" maxlength="140" />

            <textarea rows="25" cols="90">
            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
            </textarea>

            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
