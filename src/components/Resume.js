import React from 'react'
import white_dot from '../assets/icons/react.svg'
import Bar from './Bar'

const languages = [
    {
        icon: white_dot,
        name: 'Java',
        level: '80'
    },
    {
        icon: white_dot,
        name: 'JavaScript',
        level: '80'
    },
    {
        icon: white_dot,
        name: 'HTML',
        level: '70'
    }
]

const tools = [
    {
        icon: white_dot,
        name: 'CSS',
        level: '60'
    },
    {
        icon: white_dot,
        name: 'React',
        level: '70'
    },
    {
        icon: white_dot,
        name: 'Node Js',
        level: '70'
    }
]

const Resume = () => {
    return(
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Education
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-card_name">
                            MPEC Affiliated to AKTU, Lucknow
                        </p>
                        <p className="resume-card_details">Graduated at Maharana Pratap Engineering College (AKTU) of batch 2017-2021 with an aggregate of 8.3 CGPA.</p>
                    </div>
                </div>

                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card_heading">
                        Experience
                    </h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title">
                            Full Stack AEM Developer
                        </h5>
                        <p className="resume-card_name">
                            To The New Pvt Ltd.
                        </p>
                        <p className="resume-card_details">Had a great experience working with this organization so far, developed my skills in AEM, Java & React.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            languages.map(Language =>
                                <Bar value={Language} />
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language_heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language_body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;