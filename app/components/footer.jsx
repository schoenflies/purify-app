import React from 'react';

const Footer = React.createClass({
  handleSubmit: function(){
    let recipient = 'purifycss@gmail.com';
    let subject = 'message from purify app'
    let message = this.refs.message.getDOMNode().value;
    let str = 'http://mail.google.com/mail/?view=cm&fs=1'+
          '&to=' + recipient +
          '&su=' + subject +
          '&body=' + message +
          '&ui=1';
    location.href = str;
  },
  render() {
    return (
      <div>
        <section id="footer">
        <div class="container">
          <form>
            <div class="row uniform">
              <div class="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
              <div class="6u$ 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
              <div class="12u$"><textarea ref="message" id="message" placeholder="Message" rows="4"></textarea></div>
              <div class="12u$">
                <ul class="actions">
                  <div onClick={this.handleSubmit}><input type="submit" value="Send Message" class="special" /></div>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <footer>
          <ul class="copyright">
            <div>&copy; Purify CSS</div>
          </ul>
        </footer>
      </section>
      </div>
    );
  }
});

export default Footer;