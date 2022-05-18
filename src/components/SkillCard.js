import React from 'react';

const SkillCard = ({skill: {icon , title , about}}) =>
    <div className="col-lg-6">
        <div className="skill-card">
            <img src={icon} alt="icon" className="skill-card_icon" />
            <div className="skill-card_body">
                <h6 className="skill-card_title">{title}</h6>
            </div>
        </div>
    </div>

export default SkillCard;