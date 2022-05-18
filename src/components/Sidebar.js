import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/mightycoder.svg'
import mypic from '../assets/rafi.jpeg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:rafi.workaholic@gmail.com")
    }
    return(
        <div className="sidebar">
            <img src={mypic} alt="avatar" className="sidebar_avatar"/>
            <div className="sidebar_name">Mohammad <span>Rafi</span></div>
            <div className="sidebar_item sidebar_title">Web-Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar_item sidebar_resume">
                <img src={tie} alt="resume" className="sidebar_icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar_social_icons my-2">
                <a href="https://www.facebook.com/profile.php?id=100006435786804"><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
                <a href="https://www.instagram.com/mr_cuber_1998/"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
            </figure>
            <div className="sidebar_contact">
                <div className="sidebar_item sidebar_github">
                    <a href="https://github.com/rafimohammad839"><img src={github} alt="github" className="sidebar_icon mr-2"/>github</a>
                </div>
                <div className="sidebar_location">
                    <img src={pin} alt="location" className="sidebar_icon mr-2"/>
                    Noida, India
                </div>
                <div className="sidebar_item">rafi.workaholic@gmail.com</div>
                <div className="sidebar_item">7089102570</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;
