import {ProjectStackType} from "../components/projectStack/ProjectStack";
import React from 'react';
const moment = require('moment')

export const projects = [
    {
        name: 'Predict It',
        logo: `${process.env.PUBLIC_URL}/images/project-predictit-logo.png`,
        owner: 'Sibyl Entertainment',
        about: (
            <div>
                <p>Predict It is an entertainment application in which players can predicts everything of life.</p>
                <p>The application has a various ways to motivate to predict more such as points, stars, achievements, trophies, social network sharing, etc.</p>
            </div>
        ),
        status: 'Beta',
        stacks: [
            ProjectStackType.PYTHON,
            ProjectStackType.POSGRESQL,
            ProjectStackType.CELERY,
            ProjectStackType.DOCKER,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.REACT,
            ProjectStackType.SLACK,
            ProjectStackType.TRELLO,
        ],
        teamSize: 7,
        myRoles: [
            {
                name: 'Backend Team Leader',
                description: ''
            }, {
                name: 'Backend Dev',
                description: ''
            },
        ],
        from: moment('2019-1-18'),
        to: moment('2019-3-21'),
        photos: [
            {
                title: '',
                subTitle: 'Choosing interesting categories',
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-1.jpg`
            }, {
                title: '',
                subTitle: 'Viewing new feeds of predictions',
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-2.jpg`
            }, {
                title: '',
                subTitle: 'Predicting a prediction',
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-3.png`
            }, {
                title: '',
                subTitle: 'Revealing rate of predicted answers',
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-4.jpg`
            }, {
                title: '',
                subTitle: 'Viewing leaderboard',
                src: `${process.env.PUBLIC_URL}/images/project-predictit-photo-5.jpg`
            },
        ],
    },
    {
        name: 'Home Ground',
        logo: `${process.env.PUBLIC_URL}/images/project-rovo-logo.png`,
        owner: 'Rovo',
        about: (
            <div>
                <p>Home Ground is a platform that targets Sports Businesses. Home Ground is targeted at clubs or sports halls that have physical facilities such as tennis courts, badminton courts, soccer pitches etc. The premise of Home Ground is to provide all the technology that a club needs to run their business effectively with just 10 minutes of setup.</p>
                <p>Home Ground is can be used by clubs worldwide. It supports multi tenancy and localisation.</p>
            </div>
        ),
        status: 'Production',
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.POSGRESQL,
            ProjectStackType.KILLBILL,
            ProjectStackType.STRIPE_CONNECT,
            ProjectStackType.BULL,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
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
    {
        name: 'Chợ tin tức (News market)',
        logo: `${process.env.PUBLIC_URL}/images/project-htvNews-logo.png`,
        owner: 'HTV Technology Media Services Ltd.',
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec arcu suscipit, mattis leo nec, commodo odio. Phasellus imperdiet risus ut tristique hendrerit. Quisque elementum eu neque a rhoncus. Etiam eget nisi aliquet, pellentesque odio nec, imperdiet mauris. Phasellus sapien felis, volutpat non eros vel, consectetur tempor dui. In id dui a urna congue gravida. Morbi dignissim leo nec magna pulvinar hendrerit. Vivamus ultricies ultricies finibus. Etiam feugiat commodo aliquet. Nullam facilisis ut magna quis scelerisque. Proin laoreet nisi a massa volutpat, et condimentum nibh volutpat.`,
        status: 'Beta',
        stacks: [
            ProjectStackType.NODEJS,
            ProjectStackType.POSGRESQL,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.REACT,
            ProjectStackType.SLACK,
        ],
        teamSize: 3,
        myRoles: [{
            name: 'Backend developer',
            description: ''
        }],
        from: moment('2018-11-01'),
        to: moment(),
        photos: [],
    },
    {
        name: 'Lịch HTV (Calendar for HTV TV channel)',
        logo: `${process.env.PUBLIC_URL}/images/project-htvCalendar-logo.jpg`,
        owner: 'HTV Technology Media Services Ltd.',
        about: '',
        status: 'Production',
        stacks: [],
        teamSize: 2,
        myRoles: [{
            name: 'Backend developer',
            description: ''
        }],
        from: moment('2018-09-14'),
        to: moment('2019-4-4'),
        photos: [
            {
                title: 'Home',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-1.jpg`
            }, {
                title: 'Program trailer',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-2.jpg`
            }, {
                title: 'Events',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-3.jpg`
            }, {
                title: 'Program schedule',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-4.jpg`
            }, {
                title: 'Calendar',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-5.jpg`
            }, {
                title: 'Creating new event',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-6.jpg`
            }, {
                title: 'Creating new event',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-7.jpg`
            }, {
                title: 'Creating new event',
                subTitle: '',
                src:`${process.env.PUBLIC_URL}/images/project-htvCalendar-photo-8.jpg`
            },
        ],
    },
    {
        name: 'Iura',
        logo: `${process.env.PUBLIC_URL}/images/project-iura-logo.png`,
        owner: 'Rockship Ltd.',
        about: (
            <div>
                <p>IURA is a pioneering mobile-based application designed to provide end-to-end connectivity solutions between customers and lawyers.</p>
                <p>Created using the latest and most advanced technology, the outstanding advantages that IURA brings to you are:</p>
                <ul>
                    <li>Leading lawyers, professional specialists - with full qualifications, certificates and direct professional practice in 64 provinces - who will give you the most reliable advice.</li>
                    <li>Clear, transparent, minimized costs and time savings.</li>
                    <li>Diverse languages of counsel in addition to Vietnamese such as English, French, Chinese, Japanese, ... helping to better facilitate your dialogue.</li>
                </ul>
                <p>With IURA, everyone has their own "personal lawyer" anywhere, at any time in a way that cannot be simpler.</p>
            </div>
        ),
        status: 'Production',
        stacks: [
            ProjectStackType.PYTHON,
            ProjectStackType.POSGRESQL,
            ProjectStackType.SINCH,
            ProjectStackType.ONE_SIGNAL,
            ProjectStackType.ONE_PAY,
            ProjectStackType.SENTRY,
            ProjectStackType.SENGRID,
            ProjectStackType.POSTMAN,
            ProjectStackType.SWIFT,
            ProjectStackType.KOTLIN,
            ProjectStackType.SLACK,
        ],
        teamSize: 5,
        myRoles: [{
            name: 'Backend developer',
            description: ''
        }],
        from: moment('2017-9-9'),
        to: moment('2018-4-1'),
        photos: [
            {
                title: 'User application',
                subTitle: 'Choosing desired practice area for a quick call',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-01.jpeg`
            }, {
                title: 'User application',
                subTitle: 'System is finding matched lawyer for the quick call',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-02.jpeg`
            }, {
                title: 'User application',
                subTitle: 'System found a lawyer for the quick call',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-03.jpeg`
            }, {
                title: 'User application',
                subTitle: 'Filtering lawyers',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-04.jpeg`
            }, {
                title: 'User application',
                subTitle: 'Viewing lawyer profile',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-05.jpeg`
            }, {
                title: 'Lawyer application',
                subTitle: 'Home screen',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-06.png`
            }, {
                title: 'Lawyer application',
                subTitle: `Profile management`,
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-07.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Packages management',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-08.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Package detail',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-09.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'A client is requesting for a quick call',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-10.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'In a quick call',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-11.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Quick call transaction',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-12.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Notifications management',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-13.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Payouts info',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-14.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Client profile',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-15.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Engagements management',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-16.png`
            }, {
                title: 'Lawyer application',
                subTitle: 'Quick calls history',
                src:`${process.env.PUBLIC_URL}/images/project-iura-photo-17.png`
            },
        ],
    },
    // {
    //     name: '',
    //     logo: `${process.env.PUBLIC_URL}/images/project-xxx-logo.png`,
    //     owner: '',
    //     about: '',
    //     status: '',
    //     stacks: [],
    //     teamSize: 111,
    //     myRoles: [{
    //         name: '',
    //         description: ''
    //     }],
    //     from: moment('2018-4-9'),
    //     to: moment('2018-4-9'),
    //     photos: [
    //         {
    //             title: '',
    //             subTitle: '',
    //             src:`${process.env.PUBLIC_URL}/images/project-xxxxx-photo-xxxxxx.xxx`
    //         },
    //     ],
    // },
]
