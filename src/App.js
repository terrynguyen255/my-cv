import React, {Component} from 'react';
import './App.css';
import {InfoField} from "./components/infoField/InforField";
import {Skill} from "./components/skill/Skill";
import {UnorderList} from "./components/unorderList/UnorderList";
import {Project} from "./components/project/Project";
import {projects} from "./resources/projects";
import {skills} from "./resources/skills";


const me = {
    commonInfo: {
        dob: '14 - Nov - 1993',
        email: 'nogias9x@gmail.com',
        idCard: '079.193.004.392',
        phone: '0378.678.349',
        facebook: (<a target='_blank' href='https://www.facebook.com/shinigami.nguyen.1414'>Nguyễn Nhật-Nguyên</a>),
        github: (<a target='_blank' href='https://github.com/nogias9x'>Nogias9x</a>),
        place: (
            <a target='_blank' href='http://tinyurl.com/y6pltt5u'>
                458/17 Huỳnh Tấn Phát Street, District 7, HCMC
            </a>
        ),
    },
    avatar: `${process.env.PUBLIC_URL}/images/avatar.png`,
    strengths: [
        'High sense of responsibility',
        'Hard-working',
        'Good communication and team-working',
        'Following processes and coding-conventions consciously',
        'Ability to work in a high pressure environment',
        'Reading documents in English fairly',
    ],
    hobbies: [
        'Reading books of literature, sciences and psychology',
        'Fishing',
        'Making some handmade things',
        'Fixing things',
    ],
}

class App extends Component {
    render() {
        return (
            <div className="container main">
                <div className="row section-light">
                    <div className="col-3">
                        <div className="avatar-container">
                            <img src={me.avatar}/>
                        </div>
                    </div>
                    <div className="col-9">
                        <h1 className="name">TU NGUYEN</h1>
                        <h1 className="title">BACKEND DEVELOPER</h1>

                        <div className="row">
                            {
                                Object.keys(me.commonInfo).map(key => {
                                    return (
                                        <InfoField
                                            type={key}
                                            value={me.commonInfo[key]}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="row section-dark">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4">
                                <div className="section-tag"><h3>MY TARGETS</h3></div>
                            </div>
                            <div className="col-8">
                                Within next 2 years, I want to:
                                <ul>
                                    <li>Become a senior Website and Android developer</li>
                                    <li>Use English fluently (100+ TOEFL)</li>
                                    <li>Be able to lead a team of 4+ developers</li>
                                </ul>
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>MY SKILLS</h3></div>
                            </div>
                        </div>

                        {
                            skills.map(skill => (
                                <Skill
                                    name={skill.name}
                                    points={skill.points}
                                    description={skill.description}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="row section-light">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>MY STRENGTHS</h3></div>
                                <UnorderList list={me.strengths} columns={2}/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>MY HOBBIES</h3></div>
                                <UnorderList list={me.hobbies} columns={2}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row section-dark">
                    <div className="col-12">
                        <div className="section-tag"><h3>MY PROJECTS</h3></div>
                    </div>
                    {
                        projects.map(p => (
                            <div className="col-2" style={{paddingRight: 0}}><Project project={p}/></div>
                        ))
                    }
                </div>

                <div className="row">
                    <div className="col-1">
                        One of 1 columns
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
