import React, {Component} from 'react';
import './App.css';
import { withNamespaces } from 'react-i18next';
import InfoField from "./components/infoField/InforField";
import Skill from "./components/skill/Skill";
import UnorderList from "./components/unorderList/UnorderList";
import Project from "./components/project/Project";
import {projects} from "./resources/projects";
import {skills} from "./resources/skills";
import {Avatar} from "./components/avatar/Avatar";
import {getLocalizedValue} from "./helpers/languageHelper";
const moment = require('moment')


const me = {
    fullname: {
        _en: 'TU NGUYEN',
        _vi: 'TÚ NGUYỄN',
    },
    commonInfo: {
        dob: {
            _en: 'Nov 14, 1993',
            _vi: '14/11/1993',
        },
        email: 'nogias9x@gmail.com',
        idCard: '079.193.004.392',
        phone: '0378.678.349',
        facebook: (<a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/shinigami.nguyen.1414'>Nguyễn Tú</a>),
        github: (<a target='_blank' rel='noopener noreferrer' href='https://github.com/nogias9x'>Nogias9x</a>),
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
            _en: 'University of Science (Viet Nam National University Ho Chi Minh City)',
            _vi: 'Đại học Khoa học Tự nhiên (Đại học Quốc gia Thành phố Hồ Chí Minh)',
        },
        from: {
            _en: moment('2012-09-01').format('MMM-YYYY'),
            _vi: moment('2012-09-01').format('MM/YYYY'),
        },
        major: {
            _en: 'Software Engineering',
            _vi: 'Kỹ thuật Phần mềm',
        },
        degree: {
            _en: 'Bachelor of Science',
            _vi: 'Cử nhân',
        },
        gpa: '7.31/10',
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
            _en: 'Hard-working and focus',
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
            _en: (<a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/shinigami.nguyen.1414/media_set?set=a.775055715986837&type=3'>Drawing, cooking & DIY</a>),
            _vi: (<a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/shinigami.nguyen.1414/media_set?set=a.775055715986837&type=3'>Vẽ, nấu ăn và đồ thủ công</a>),
        }, {
            _en: 'Fixing things (bugs excluded)',
            _vi: 'Sửa chữa này nọ (không bao gồm bug)',
        },
    ],
}

const languages = [
    {
        code: '_en',
        flag: `${process.env.PUBLIC_URL}/images/language-en.png`
    },
    {
        code: '_vi',
        flag: `${process.env.PUBLIC_URL}/images/language-vn.png`
    }
]

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
                <div className="row">
                    <div className="col-12">
                        {
                            languages.map((lang, idx) => (
                                <button
                                    key={idx}
                                    className="toggle-language-button"
                                    style={{backgroundImage: `url('${lang.flag}')`}}
                                    onClick={() => this.changeLanguage(i18n, lang.code)}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="row section section-light">
                    <div className="col-md-4"><
                        Avatar avatar={me.avatar}/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="name">{getLocalizedValue(me.fullname, i18n)}</h1>
                        <h1 className="title">FULL STACK DEVELOPER</h1>

                        <div className="row">
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
                <div className="row section section-light">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_EDUCATION')}</h3></div>
                    </div>
                    {
                        me.educations.map((edu, idx) => (
                            <div className="col-12 section-content" key={idx} style={{paddingLeft: '2rem'}}>
                                <h5><b>{getLocalizedValue(edu.school, i18n)}</b></h5>
                                <div style={{paddingLeft: '2rem'}}>
                                    <b>{t('FROM')}</b>: {getLocalizedValue(edu.from, i18n)}<br/>
                                    <b>{t('MAJOR')}</b>: {getLocalizedValue(edu.degree, i18n)} {t('CONJ_IN_MAJOR')} {getLocalizedValue(edu.major, i18n)}<br/>
                                    <b>{t('GPA')}</b>: {edu.gpa}<br/>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="row section section-dark">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_TARGETS')}</h3></div>
                    </div>
                    <div className="col-12 section-content">
                        {t('TARGETS_INTRO')}
                        <UnorderList list={me.targets} columns={1}/>
                    </div>
                    <div className="col-12"><hr/></div>
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_SKILLS')}</h3></div>
                    </div>
                    <div className="col-12 section-content">
                        {
                            skills.map((skill, idx) => (
                                <Skill key={idx} skill={skill}/>
                            ))
                        }
                    </div>
                </div>

                <div className="row section section-light">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>{t('TAG_MY_STRENGTHS')}</h3></div>
                            </div>
                            <div className="col-12 section-content">
                                <UnorderList list={me.strengths} columns={2} stubborn={false}/>
                            </div>
                        </div>
                        <hr/>

                        <div className="row">
                            <div className="col-12">
                                <div className="section-tag"><h3>{t('TAG_MY_HOBBIES')}</h3></div>
                            </div>
                            <div className="col-12 section-content">
                                <UnorderList list={me.hobbies} columns={2} stubborn={false}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row section section-dark">
                    <div className="col-12">
                        <div className="section-tag"><h3>{t('TAG_MY_PROJECTS')}</h3></div>
                    </div>
                    {
                        projects.map((p, idx) => (
                            <div
                                key={idx}
                                className="col-md-2 col-6 section-content"
                                style={{paddingRight: 0, marginBottom: '1rem'}}
                            >
                                <Project project={p}/>
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
