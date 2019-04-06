import React, {Component} from 'react';
import './App.css';
import { withNamespaces } from 'react-i18next';
import {InfoField} from "./components/infoField/InforField";
import {Skill} from "./components/skill/Skill";
import {UnorderList} from "./components/unorderList/UnorderList";
import {Project} from "./components/project/Project";
import {projects} from "./resources/projects";
import {skills} from "./resources/skills";
import {Avatar} from "./components/avatar/Avatar";
const moment = require('moment')


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
    educations: [{
        school: 'University of Science (Viet Nam National University Ho Chi Minh City)',
        from: moment('2012-09-01'),
        major: 'Software Engineering',
        degree: 'Bachelor of Science',
        gpa: 7.31,
    }],
    avatar: {
        src: `${process.env.PUBLIC_URL}/images/avatar.png`,
        sizeWidth: '160%',
        sizeHeight: 'auto',
        positionX: '60%',
        positionY: '35%',
    },
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

const languages = [
    {
        code: 'en',
        flag: `${process.env.PUBLIC_URL}/images/language-en.png`
    },
    {
        code: 'vi',
        flag: `${process.env.PUBLIC_URL}/images/language-vn.png`
    }
]

class App extends Component {
    constructor(props) {
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.state = { currentLanguage: 'en' }
    }

    changeLanguage (i18n, langCode) {
        i18n.changeLanguage(langCode);
        this.setState({currentLanguage: langCode})
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <div className="container main">
                <div className="row">
                    <div className="col-12">
                        {
                            languages.map(lang => (
                                <button
                                    className="toggle-language-button"
                                    style={{backgroundImage: `url('${lang.flag}')`}}
                                    onClick={() => this.changeLanguage(i18n, lang.code)}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="row section-light">
                    <div className="col-md-3"><
                        Avatar avatar={me.avatar}/>
                    </div>
                    <div className="col-md-9">
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
                <div className="row section-light">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_EDUCATION')}</h3></div>
                    </div>
                    {
                        me.educations.map(edu => (
                            <div className="col-12" style={{paddingLeft: '2rem'}}>
                                <h5><b>{edu.school}</b></h5>
                                <div style={{paddingLeft: '2rem'}}>
                                    <b>From</b>: {edu.from.format('MMM-YYYY')}<br/>
                                    <b>Major</b>: {edu.degree} in {edu.major}<br/>
                                    <b>GPA</b>: {edu.gpa}<br/>
                                </div>
                            </div>
                        ))
                    }
                </div>


                <div className="row section-dark">
                    <div className="col-12">
                        <div className="section-tag"><h3>MY TARGETS</h3></div>
                    </div>
                    <div className="col-12">
                        Within next 2 years, I want to:
                        <ul>
                            <li>Become a senior Website and Android developer</li>
                            <li>Use English fluently (100+ TOEFL)</li>
                            <li>Be able to lead a team of 4+ developers</li>
                        </ul>
                    </div>
                    <div className="col-12"><hr/></div>
                    <div className="col-12">
                        <div className="section-tag"><h3>MY SKILLS</h3></div>
                    </div>
                    <div className="col-12">
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
                                <UnorderList list={me.strengths} columns={2} stubborn={false}/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>MY HOBBIES</h3></div>
                                <UnorderList list={me.hobbies} columns={2} stubborn={false}/>
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
                            <div
                                className="col-md-2 col-6"
                                style={{paddingRight: 0, marginBottom: '1rem'}}
                            >
                                <Project project={p}/>
                            </div>
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

export default withNamespaces('componentApp')(App);
