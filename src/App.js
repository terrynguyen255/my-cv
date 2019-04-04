import React, {Component} from 'react';
import './App.css';
import {InfoField} from "./components/infoField/InforField";
import {Skill} from "./components/skill/Skill";
import {UnorderList} from "./components/unorderList/UnorderList";
import {Project} from "./components/project/Project";
import {ProjectStackType} from "./components/projectStack/ProjectStack";

const moment = require('moment')

const me = {
    commonInfo: {
        dob: '14 - Nov - 1993',
        email: 'nogias9x@gmail.com',
        idCard: '079.193.004.392',
        phone: '0378.678.349',
        place: '458/17 Huynh Tan Phat Street, District 7, HCMC',
        facebook: 'xxxxxxxxxxxxxxxxxxxxxxxx',
        github: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    },
    avatar: `${process.env.PUBLIC_URL}/images/avatar.png`,
    skills: [
        {
            name: 'Multiple page web',
            points: 8,
            description: 'HTML, CSS, Javascript',
        },
        {
            name: 'ReactJS',
            points: 4,
            description: '',
        }, {
            name: 'Python-Flask',
            points: 6.5,
            description: '9 months',
        }, {
            name: 'NodeJS',
            points: 7.5,
            description: '1 year',
        }, {
            name: 'PostgreSQL',
            points: 8,
            description: '1.5 year',
        }, {
            name: 'VC-Git',
            points: 8,
            description: '',
        }, {
            name: 'English',
            points: 7,
            description: 'Intermediate',
        },
    ],
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
    projects: [
        {
            name: 'Predict It',
            logo: `${process.env.PUBLIC_URL}/images/project-predictit-logo.png`,
            owner: 'Sibyl Entertainment',
            about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu suscipit, mattis leo nec, commodo odio. Phasellus imperdiet risus ut tristique hendrerit. Quisque elementum eu neque a rhoncus. Etiam eget nisi aliquet, pellentesque odio nec, imperdiet mauris. Phasellus sapien felis, volutpat non eros vel, consectetur tempor dui. In id dui a urna congue gravida. Morbi dignissim leo nec magna pulvinar hendrerit. Vivamus ultricies ultricies finibus. Etiam feugiat commodo aliquet. Nullam facilisis ut magna quis scelerisque. Proin laoreet nisi a massa volutpat, et condimentum nibh volutpat.`,
            status: 'Beta',
            stacks: [
                ProjectStackType.PYTHON,
                ProjectStackType.POSGRESQL,
                ProjectStackType.CELERY,
                ProjectStackType.DOCKER,
                ProjectStackType.SENTRY,
                ProjectStackType.SENGRID,
                ProjectStackType.SWIFT,
                ProjectStackType.KOTLIN,
                ProjectStackType.REACT,
                ProjectStackType.SLACK,
                ProjectStackType.TRELLO,
            ],
            teamSize: 7,
            myRoles: [{
                name: 'Backend Dev',
                description: ''
            }],
            from: moment('2019-1-18'),
            to: moment('2019-3-21'),
            photos: [
                {
                    title: '',
                    subTitle: '',
                    src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-1.jpg`
                }, {
                    title: '',
                    subTitle: '',
                    src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-2.jpg`
                }, {
                    title: '',
                    subTitle: '',
                    src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-3.png`
                }, {
                    title: '',
                    subTitle: '',
                    src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-4.jpg`
                }, {
                    title: '',
                    subTitle: '',
                    src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-5.jpg`
                },
            ],
        },
        {
            name: 'Home Ground',
            logo: `${process.env.PUBLIC_URL}/images/project-rovo-logo.png`,
            owner: 'Rovo',
            about: `
Home Ground is a new platform that targets Sports Businesses. Home Ground is initially targeted at clubs or sports halls that have physical facilities such as tennis courts, badminton courts, soccer pitches etc. The premise of Home Ground is to provide all the technology that a club needs to run their business effectively with just 10 minutes of setup. 
While we’re starting with just sports clubs & halls, eventually Home Ground would even support advertisers, sports brands & shops. Home Ground will include public APIs that developers can integrate with to provide customised software or apps to Sports businesses.  For example, a smart lock device can integrate with APIs to allow unlocking of tennis courts from phones based on the bookings.
Home Ground is also intended to be used by clubs worldwide. With the above factors in mind, it’s important to design Home Ground to support multi tenancy, localisation from the beginning. In addition to that, it’s important do design the architecture such that modules can be added incrementally by us internally & also be 3rd party developers in future.
`,
            status: 'Production',
            stacks: [
                ProjectStackType.NODEJS,
                ProjectStackType.POSGRESQL,
                ProjectStackType.KILLBILL,
                ProjectStackType.BULL,
                ProjectStackType.SENTRY,
                ProjectStackType.SENGRID,
                ProjectStackType.SWIFT,
                ProjectStackType.KOTLIN,
                ProjectStackType.REACT,
                ProjectStackType.SLACK,
                ProjectStackType.BASECAMP,
            ],
            teamSize: 6,
            myRoles: [
                {
                    name: 'Team leader',
                    description: ''
                }, {
                    name: 'Backend developer',
                    description: ''
                }
            ],
            from: moment('2018-4-9'),
            to: moment('2019-2-12'),
            photos: [
                {
                    title: `Home screen`,
                    subTitle: `All modules' shortcuts`,
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-1.png`
                }, {
                    title: 'Customers management',
                    subTitle: 'Viewing, creating, updating, deleting, filtering, import customers from CSV',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-2.png`
                }, {
                    title: 'Memberships management',
                    subTitle: 'Viewing, creating, updating, deleting, filtering staff',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-3.png`
                }, {
                    title: 'Ratings & reviews management',
                    subTitle: `Reply customers' reviews, view statistics of ratings and reviews`,
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-4.png`
                }, {
                    title: 'Booking management',
                    subTitle: 'Booking facility from user web',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-5.png`
                }, {
                    title: 'Booking management',
                    subTitle: 'Manage bookings from admin dashboard',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-6.png`
                }, {
                    title: 'Staff management',
                    subTitle: 'Viewing, creating, updating, deleting, filtering staff',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-7.png`
                }, {
                    title: 'Email campaigns management',
                    subTitle: 'Viewing, creating, updating, deleting, running, filtering campaigns',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-8.png`
                }, {
                    title: 'Statistics',
                    subTitle: 'Rendering statistics for pages views, revenues, reviews',
                    src:`${process.env.PUBLIC_URL}/images/project-rovo-photo-9.png`
                },
            ],
        },
        // {
        //     name: '',
        //     logo: '',
        //     owner: '',
        //     about: '',
        //     status: '',
        //     stacks: [],
        //     teamSize: '',
        //     myPositions: [{
        //         name: '',
        //         description: ''
        //     }],
        //     from: new Date(),
        //     to: new Date(),
        //     photos: [
        //         {
        //             title: 'xxxx',
        //             subTitle: 'xxxx',
        //             src:`${process.env.PUBLIC_URL}/images/project-xxxxx-photo-xxxxxx.xxx`
        //         },
        //     ],
        // }
    ]
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
                            me.skills.map(skill => (
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
                    <div className="col-4">
                        {
                            me.projects.map(p => <Project project={p}/>)
                        }
                    </div>
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
