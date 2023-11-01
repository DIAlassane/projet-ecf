import React from 'react'
import ContactForm from '../component/ContactForm'
import Navbar from '../nav-footer/Navbar'
import Footer from '../nav-footer/Footer'
import HoraireCard from './HoraireCard'
import imgContact from '../assets/contactimg.jpeg'

import '../style/Contact.css'

function Contact() {
  return (
    <div>
        <Navbar />
        <div className="contactpage">
            <div className="contactleft">
                <ContactForm />
            </div>
            <div className="contactright">
                <img src={imgContact} alt="" />
            </div>
        </div>
        <div className="horairehome">
          <HoraireCard />
        </div>
        <Footer />
    </div>
  )
}

export default Contact