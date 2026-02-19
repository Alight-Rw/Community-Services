import React from 'react'
import { ContactUs } from '../../Components/Client/ContactUs'
import GlobalSearch from '../../Components/Shared/GlobalSearch'
import GlobalHeader from '../../Components/Shared/GlobalHeader'

const Contact = () => {
  return (
    <div>
       <GlobalSearch/>
       <GlobalHeader title='Get in Touch with Us' subtitle="Have a question or need assistance? We'd love to hear from you. Reach out to our team and we'll get back to you as soon."/>
      <ContactUs />
    </div>
  )
}

export default Contact