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
import ExpItem from "./components/ExpItem/ExpItem";
import {getLocalizedValue} from "./helpers/languageHelper";
import {mmoment} from "./helpers/timeHelper";


const me = {
    fullname: {
        _en: 'TERRY TU NGUYEN',
        _vi: 'TERRY TÚ NGUYỄN',
    },
    commonInfo: {
        dob: '1993',
        email: 'terry.tu.nguyen@gmail.com',
        phone: '0378.678.349',
        linkedin: (<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/terry-tu-nguyen'>Terry Tú Nguyễn</a>),
        place: {
            _en: "District 7, HCMC",
            _vi: "Quận 7, TP.HCM",
        },
    },
    educations: [{
        school: {
            _en: 'University of Science (Viet Nam National University)',
            _vi: 'Đại học Khoa học Tự nhiên (Đại học Quốc gia Thành phố Hồ Chí Minh)',
        },
        from: {
            _en: mmoment('2012-09-01').format('YYYY'),
            _vi: mmoment('2012-09-01').format('YYYY'),
        },
        degree: {
            _en: 'B.S in Software Engineering',
            _vi: 'Cử nhân',
        },
    }],
    exps: [{
        title: 'Tech Lead & Senior Software Engineer, FunnelBeam',
        duration: {
            from: mmoment('2021-10-19'),
            to: undefined,
        },
        descriptions: [
            'Developed Admin dashboard for back-office tasks.',
            'Developed a micro-services system to process data in CRM industry.',
            'Managed database migration.',
            'Managed deployment & scalability.',
            'Integrated CRM platforms: Salesforces, Hubspot, Marketo, etc.',
            'Improved systems with short-term & long-term solutions.',
            'Developed & maintained knowledge wiki for the company to reduce training effort.',
            'Supported & trained team members.',
        ]
    },
    {
        title: 'Senior Software Engineer, Quod AI',
        duration: {
            from: mmoment('2019-11-06'),
            to: mmoment('2021-06-01'),
        },
        descriptions: [
            'Created QuodAI web for users with ReactJS & NodeJS with big database underneath.',
            'Created an internal tool for data labeling & processing.',
            'Powered searching with Elasticsearch.',
            'Managed database migration.',
            'Integrated version-control platforms such as Github, Gitlab & Bitbucket into the systems.',
        ]
    },
    {
        title: 'Software Engineer, Rockship',
        duration: {
            from: mmoment('2017-09-09'),
            to: mmoment('2019-03-21'),
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
            from: mmoment('2016-01-01'),
            to: mmoment('2017-02-01'),
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
    targets: [],
    strengths: [
        {
            _en: 'Focusing on added value for my customers & company',
            _vi: 'Quyết định dựa trên lợi ích của khách hàng và công ty',
        }, {
            _en: 'High sense of responsibility',
            _vi: 'Làm việc có trách nhiệm',
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
            _en: 'Drawing, cooking & DIY',
            _vi: 'Vẽ, nấu ăn và đồ thủ công',
        }, {
            _en: 'Fixing things',
            _vi: 'Sửa chữa này nọ',
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
                            skillGroups.map((skillGroup, gIdx) => (
                                <div className="skill-group" key={gIdx}>
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
                                <ExpItem exp={exp}/>
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
