import {ProjectStackType} from "../components/projectStack/ProjectStack";
const moment = require('moment')

export const projects = [
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
