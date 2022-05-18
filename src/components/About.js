import React from 'react';
import api from '../assets/icons/api.svg'
import SkillCard from './SkillCard';

const skills = [
    {
        icon: api,
        title: "Front-End Development"
    },
    {
        icon: api,
        title: "Back-End Development"
    },
    {
        icon: api,
        title: "Java-Development"
    },
    {
        icon: api,
        title: "API-Development"
    },
    {
        icon: api,
        title: "UI/UX Development"
    },
    {
        icon: api,
        title: "Other Tasks"
    }
]

const About = () => {
    return (
        <div className="about">
            <h6 className="about_intro">
            Experienced in writing codes in Java & JavaScript and developing Applications through
            React & AEM. Supportive and enthusiastic team player dedicated to streamlining processes and efficiently
            resolving project issues.<strong>A Software Engineer and a Web Developer.</strong>
            </h6>
            <div className="container about_container">
                <h6 className="about_heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <SkillCard skill={skill} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default About;