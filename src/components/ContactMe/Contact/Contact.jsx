import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
  return (
    <div id='Contact_Background'>
    <div id='Contact_BackgroundOpacity'></div>
    <div id='Contact_LinksFlex'>
     <Link className='Contact_Links' to='/Skills'>Skills</Link>
     <Link className='Contact_Links' to='/AboutMe'>About Me</Link>
     <Link className='Contact_Links' to='/Projects'>Projects</Link>
    </div>
    <h2 id='Contact_H2'>Contact me</h2>
    <div id='Contact_ContactContainer'>
    <div id="fcf-form">
    <h3 className="fcf-h3">Contact</h3>

    <form id="fcf-form-id" class="fcf-form-class" action="https://formsubmit.co/rodrigolcontreras1317@gmail.com" method="POST">
        
        <div class="fcf-form-group">
            <label for="Name" class="fcf-label">Your name</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" placeholder='Example: Rodrigo Contreras' name="Name" class="fcf-form-control" required/>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Your email address</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" placeholder='Example:Rodrigolcontreras1317@gmail.com' name="Email" class="fcf-form-control" required/>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Your message</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>

        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
        </div>
     </form>
    </div>
    
    </div>
    </div>
  )
}

export default Contact