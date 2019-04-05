import React, {Component} from 'react'
import './Project.css'
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap'
import {ProjectStack} from "../projectStack/ProjectStack";
import {PhotoCarousel} from "../PhotoCarousel/PhotoCarousel";
import ReactTooltip from "react-tooltip";
const moment = require('moment')

const DATE_FORMAT = 'DD-MMM-YYYY'

export class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailOpened: false
        }
        this.toggleDetailDialog = this.toggleDetailDialog.bind(this)
    }

    render() {
        const project = this.props.project
        const durationMonths = project.to.diff(project.from, 'months')
        const projectToDiffToday = moment().diff(project.to, 'days')

        return (
            <div
                className='project-avatar'
                onClick={this.toggleDetailDialog}
            >
                <ReactTooltip id={project.name} type='info'>{project.name}</ReactTooltip>
                <div className='project-logo-container' data-tip data-for={project.name}><img src={project.logo}/></div>

                <Modal
                    isOpen={this.state.detailOpened}
                    toggle={this.toggleDetailDialog}
                    className='modal-lg'
                >
                    <ModalHeader toggle={this.toggleDetailDialog}>
                        <div className='row'>
                            <div className='col-2'>
                                <div className='project-logo-container'><img src={project.logo}/></div>
                            </div>
                            <div className='col-10'>
                                <p>{project.name}</p>
                                <p>
                                    <b>Duration: </b>
                                    {durationMonths} months ({project.from.format(DATE_FORMAT)} - { projectToDiffToday === 0 ? 'present' : project.to.format(DATE_FORMAT)})</p>
                                <p>
                                    <b>My role{project.myRoles.length > 1 ? 's' : ''}: </b>
                                    { project.myRoles.map(role => role.name).join(', ') }
                                </p>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <p className='project-about'><b>About:</b> {project.about}</p>
                        <p><b>Team size:</b> {project.teamSize} members</p>
                        <p><b>Status:</b> {project.status}</p>
                        <p><b>Stacks:</b></p>
                        <div className='row' style={{margin:0}}>
                            {
                                project.stacks.map(stack => {
                                    return (
                                        <div className='col-1' style={{margin:0, padding:0}}>
                                            <ProjectStack stack={stack}/>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        {
                            project.photos.length > 0 ?
                                (
                                    <div>
                                        <p><b>Photos:</b></p>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <PhotoCarousel maxHeight='50rem' items={project.photos}/>
                                            </div>
                                        </div>
                                    </div>

                                ) : ''
                        }

                    </ModalBody>
                </Modal>
            </div>
        )
    }

    toggleDetailDialog() {
        this.setState({
            detailOpened: !this.state.detailOpened
        })
    }
}

Project.defaultProps = {
}
