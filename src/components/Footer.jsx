import React from 'react';
import {BsGithub, BsTwitter,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import '../styles/style.css'

function Footer() {
    return (
        <footer className="contactme" id="contact">
            <h2 className="contact__title">CONNECT WITH ME</h2>
            <div className="contact__socials">
                <button><a href="https://github.com/Adegbite1999"><BsGithub size={20}/></a></button>
                <button><a href="https://twitter.com/kelvin_ademola"><BsTwitter size={20}/></a></button>
                <button><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BIXets8AGSymmVPMt4c1Ahg%3D%3D"><BsLinkedin size={20}/></a></button>
                <button><a href="https://api.whatsapp.com/send?phone=8104750773&text=Hello%20kelvin"><BsWhatsapp size={20}/></a></button>
            </div>
            <hr/>
            <div className="right">
                <p>All rights reserved. (C) 2020</p>
                <p>Designed and developed by <a className='link-dev' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BIXets8AGSymmVPMt4c1Ahg%3D%3D">Ademola Kelvin</a></p>
            </div>
        </footer>
    )
}

export default Footer
