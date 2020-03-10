import React from "react"
import './contacts.css'

class contact extends React.Component {
    componentDidMount() {
        document.title = "Contacts | Andy Kim"
    }
    render() {
        return <div class="contact">
            <h1 class="contact_title">contacts</h1>
            <span class="contact_text">Leave me a email or Text message<br></br> I'm happy to talk to you</span>
            <span class="contact_contact">Email: hyungseok.kim@outlook.com</span>
            <span class="contact_contact">Moblie: 022-350-6196</span>

        </div>
    }

}

export default contact;