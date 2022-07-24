import React, {Component} from 'react';
import './App.css';
import { withNamespaces } from 'react-i18next';
import InfoField from "./components/infoField/InforField";
import SkillTag from "./components/skill/SkillTag";
import UnorderList from "./components/unorderList/UnorderList";
import Project from "./components/project/Project";
import {projects} from "./resources/projects";
import {skillGroups} from "./resources/skills";
import {Avatar} from "./components/avatar/Avatar";
import {getLocalizedValue} from "./helpers/languageHelper";
const moment = require('moment')


const me = {
    fullname: {
        _en: 'TERRY TU NGUYEN',
        _vi: 'TERRY TÚ NGUYỄN',
    },
    commonInfo: {
        dob: '1993',
        email: 'terry.tu.nguyen@gmail.com',
        phone: '0378.678.349',
        facebook: (<a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/shinigami.nguyen.1414'>Nguyễn Tú</a>),
        place: {
            _en: (
                <a target='_blank' rel='noopener noreferrer' href='https://tinyurl.com/y5dvobem'>
                    613 Huỳnh Tấn Phát Street, District 7, HCMC
                </a>
            ),
            _vi: (
                <a target='_blank' rel='noopener noreferrer' href='https://tinyurl.com/y5dvobem'>
                    613 Huỳnh Tấn Phát, Quận 7, TP.HCM
                </a>
            ),
        },
    },
    educations: [{
        school: {
            _en: 'University of Science (Viet Nam National University)',
            _vi: 'Đại học Khoa học Tự nhiên (Đại học Quốc gia Thành phố Hồ Chí Minh)',
        },
        from: {
            _en: moment('2012-09-01').format('MMM-YYYY'),
            _vi: moment('2012-09-01').format('MM/YYYY'),
        },
        degree: {
            _en: 'B.S Software Engineering',
            _vi: 'Cử nhân',
        },
    }],
    exps: [{
        title: 'Software Engineer & Senior Software Engineer, Quod AI',
        duration: {
            from: moment('2019-11-06'),
            to: moment('2021-06-01'),
        },
        descriptions: [
            'Created QuodAI web for users with ReactJS & NodeJS with big database underneath.',
            'Created an internal tool for data labeling & processing.',
            'Powered searching with Elasticsearch.',
            'Managed database migration.',
            'Integrated version-control platforms such as Github, Gitlab & Bitbucket into the systems.',
            'Quickly responed to user issues and bug reports. Improved systems with short-term & long-term solutions.',
            'Questioned & analyzed about user needs to bring the best values in each deliveries.',
        ]
    },
    {
        title: 'Software Engineer, Rockship',
        duration: {
            from: moment('2017-09-09'),
            to: moment('2019-03-21'),
        },
        descriptions: [
            'Created backend services with NodeJS & Python-Flask.',
            'Integrated 3th-party services such as VOIP, Stripe Connect (a payment platform for marketplaces), Kill Bill (a billing & subscriptions manamagement system), etc.',
            'Responsed & discussed about UI to improve designed designs.',
        ]
    },
    {
        title: 'Intern & Software Engineer, Fsoft',
        duration: {
            from: moment('2016-01-01'),
            to: moment('2017-02-01'),
        },
        descriptions: [
            'Mantained an Android app for comics & manga reading platform - Shonen Jump',
        ]
    }],
    avatar: {
        src: `${process.env.PUBLIC_URL}/images/avatar.png`,
        sizeWidth: '160%',
        sizeHeight: 'auto',
        positionX: '60%',
        positionY: '35%',
    },
    targets: [
        {
            _en: 'To be a senior backend and frontend developer',
            _vi: 'Trờ thành senior developer mảng backend và frontend',
        }, {
            _en: 'To use English fluently (100+ TOEFL)',
            _vi: 'Sử dụng tiếng Anh thuần thục (100+ TOEFL)',
        }, {
            _en: 'To be a leader 2+ projects which has 4+ members',
            _vi: 'Quản lý 2+ dự án có 4+ thành viên',
        }
    ],
    strengths: [
        {
            _en: 'High sense of responsibility',
            _vi: 'Làm việc có trách nhiệm',
        }, {
            _en: 'Hard-working and focused',
            _vi: 'Làm việc chăm chỉ và tập trung',
        }, {
            _en: 'Good communication and team-working',
            _vi: 'Có kỹ năng làm việc nhóm',
        }, {
            _en: 'Following processes and coding-conventions consciously',
            _vi: 'Tự giác tuân thủ quy trình và coding-conventions',
        }, {
            _en: 'Ability to work in a high pressure environment',
            _vi: 'Làm việc được dưới môi trường áp lực',
        }, {
            _en: 'Reading documents in English fairly well',
            _vi: 'Đọc tài liệu tiếng Anh tốt',
        }, {
            _en: 'Eager to learn new techniques and things',
            _vi: 'Sẵng lòng học công nghệ và kiến thức mới',
        },
    ],
    hobbies: [
        {
            _en: 'Reading books',
            _vi: 'Đọc sách',
        }, {
            _en: 'Fishing',
            _vi: 'Câu cá',
        }, {
            _en: 'Drawing, cooking & DIY',
            _vi: 'Vẽ, nấu ăn và đồ thủ công',
        }, {
            _en: 'Fixing things (bugs excluded)',
            _vi: 'Sửa chữa này nọ (không bao gồm bug)',
        },
    ],
}

class App extends Component {
    constructor(props) {
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
    }

    changeLanguage (i18n, langCode) {
        i18n.changeLanguage(langCode);
    }

    render() {
        const { t, i18n } = this.props;

        return (
            <div className="container main">
                <div className="row section section-light">
                    <div className="col-md-4"><
                        Avatar avatar={me.avatar}/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="name">{getLocalizedValue(me.fullname, i18n)}</h1>
                        <h1 className="title">SENIOR FULL-STACK DEVELOPER</h1>

                        <div className="row" style={{marginTop: '4rem'}}>
                            {
                                Object.keys(me.commonInfo).map(key => {
                                    return (
                                        <div className="col-md-6 col-12" key={key}>
                                            <InfoField
                                                type={key}
                                                value={me.commonInfo[key]}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="row section section-dark">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_SKILLS')}</h3></div>
                    </div>
                    <div className="col-12 section-content">
                        {
                            skillGroups.map((skillGroup, idx) => (
                                <div className="skill-group">
                                    <div className="skill-group-name">{skillGroup.name}:</div>
                                    <div className="skill-tags">
                                        {
                                            skillGroup.skills.map((skill, idx) => (
                                                <SkillTag key={idx} skill={skill}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="col-12">
                        <hr/>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>{t('TAG_MY_STRENGTHS')}</h3></div>
                            </div>
                            <div className="col-12 section-content">
                                <UnorderList list={me.strengths} columns={2} stubborn={false}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row section section-light">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_WORKING_EXPERIENCE')}</h3></div>
                    </div>
                    {
                        me.exps.map((exp, idx) => (
                            <div className="col-12 section-content" key={idx} style={{paddingLeft: '2rem'}}>
                                <h5>
                                    <b>{getLocalizedValue(exp.title, i18n)}</b>&nbsp;
                                    (
                                        {exp.duration.from.format(t('MONTH_FORMAT'))}
                                        &nbsp;-&nbsp;
                                        {exp.duration.to.format(t('MONTH_FORMAT'))}
                                    )
                                </h5>
                                <div>
                                    <ul>
                                        {
                                            exp.descriptions.map(des => (
                                                <li>
                                                    {getLocalizedValue(des, i18n)}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    
                                </div>
                            </div>
                        ))
                    }


                    <div className="col-12">
                        <hr/>
                    </div>

                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_PROJECTS')}</h3></div>
                    </div>
                    <div className="row col-12 section-content" >
                    {
                        projects.map((p, idx) => (
                            <div
                                key={idx}
                                className="col-md-2 col-6"
                                style={{padding: '0', marginBottom: '1rem'}}
                            >
                                <Project project={p}/>
                            </div>
                        ))
                    }
                    </div>
                </div>

                
                <div className="row section section-dark" style={{paddingBottom: '3rem'}}>
                <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_EDUCATION')}</h3></div>
                    </div>
                    {
                        me.educations.map((edu, idx) => (
                            <div className="col-12 section-content" key={idx} style={{paddingLeft: '2rem'}}>
                                <h5><b>{getLocalizedValue(edu.degree, i18n)}</b></h5>
                                <div style={{paddingLeft: '2rem'}}>
                                    {getLocalizedValue(edu.school, i18n)} ({getLocalizedValue(edu.from, i18n)})
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="footer">
                </div>
            </div>
        );
    }
}

export default withNamespaces('componentApp')(App);
