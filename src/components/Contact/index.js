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
            <div className="contactName">
              <label>Name <span>*</span></label>
              <input type="text" name="name" maxlength="140" />
            </div>

            <div className="contactEmail">
              <label>Email <span>*</span></label>
              <input type="text" name="email" maxlength="140" />
            </div>

            <textarea rows="15" cols="90"></textarea>

            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
