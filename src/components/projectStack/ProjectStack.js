import React, {Component} from 'react'
import './ProjectStack.css'
import ReactTooltip from 'react-tooltip'

export class ProjectStack extends Component {
    render() {
        return (
            <div>
                <ReactTooltip id={this.props.stack.name} type='info'>{this.props.stack.name}</ReactTooltip>
                <div
                    className='stack-logo-container'
                    data-tip data-for={this.props.stack.name}
                >
                    <img src={this.props.stack.logo}/>
                </div>
            </div>
        )
    }
}


export const ProjectStackType = {
    POSGRESQL: {
        name: 'PosgreSQL',
        logo: `${process.env.PUBLIC_URL}/images/stack-posgresql.png`,
    },
    SLACK: {
        name: 'Slack',
        logo: `${process.env.PUBLIC_URL}/images/stack-slack.png`,
    },
    NODEJS: {
        name: 'Node.js',
        logo: `${process.env.PUBLIC_URL}/images/stack-nodejs.png`,
    },
    PYTHON: {
        name: 'Python',
        logo: `${process.env.PUBLIC_URL}/images/stack-python.png`,
    },
    REACT: {
        name: 'React',
        logo: `${process.env.PUBLIC_URL}/images/stack-reactjs.png`,
    },
    SWIFT: {
        name: 'Swift',
        logo: `${process.env.PUBLIC_URL}/images/stack-swift.png`,
    },
    KOTLIN: {
        name: 'Kotlin',
        logo: `${process.env.PUBLIC_URL}/images/stack-kotlin.jpeg`,
    },
    CELERY: {
        name: 'Celery',
        logo: `${process.env.PUBLIC_URL}/images/stack-celery.png`,
    },
    TRELLO: {
        name: 'Trello',
        logo: `${process.env.PUBLIC_URL}/images/stack-trello.png`,
    },
    REDIS: {
        name: 'Redis',
        logo: `${process.env.PUBLIC_URL}/images/stack-redis.png`,
    },
    DOCKER: {
        name: 'Docker',
        logo: `${process.env.PUBLIC_URL}/images/stack-docker.jpg`,
    },
    KILLBILL: {
        name: 'Kill Bill',
        logo: `${process.env.PUBLIC_URL}/images/stack-killbill.png`,
    },
    BULL: {
        name: 'Bull',
        logo: `${process.env.PUBLIC_URL}/images/stack-bull.png`,
    },
    BASECAMP: {
        name: 'Basecamp',
        logo: `${process.env.PUBLIC_URL}/images/stack-basecamp.png`,
    },
    SENTRY: {
        name: 'Sentry',
        logo: `${process.env.PUBLIC_URL}/images/stack-sentry.png`,
    },
    SENGRID: {
        name: 'Sengrid',
        logo: `${process.env.PUBLIC_URL}/images/stack-sendgrid.png`,
    },
    // xxx: {
    //     name: '',
    //     logo: `${process.env.PUBLIC_URL}/images/xxxxxxxxx`,
    // },
}
