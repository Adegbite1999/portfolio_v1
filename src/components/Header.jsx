import React,{useState} from 'react';
import '../styles/style.css';
import { navbar } from '../data/data';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const navbarHandler = () =>{
        setNavOpen(!navOpen)
    }
    return (
        <header>
            <nav>
                <div className="title__box">
                    <h3 className="title">
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BwzYgqOJrTVCRnkWW6NYBfg%3D%3D">Adegbite.io</a>
                        </h3>
                </div>
                <ul onClick={navbarHandler} className={`navigation ${navOpen? 'block' : 'none'}`}  >
                    {navbar.map((item, index) => {
                        return (
                            <li  key={index} className="navigation__item"><a href={item.link}>{item.value}</a></li>
                        )
                    })}
                </ul>
                <div className="hambuger" onClick={navbarHandler}>
                    <button><GiHamburgerMenu /></button>
                </div>
            </nav>
        </header>
    )
}

export default Header
