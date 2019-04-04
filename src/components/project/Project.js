import React, {Component} from 'react'
import './Project.css'
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap'
import {ProjectStack} from "../projectStack/ProjectStack";
import {PhotoCarousel} from "../PhotoCarousel/PhotoCarousel";

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
        const {
            name,
            logo,
            about,
            status,
            stacks,
            teamSize,
            myRoles,
            from,
            to,
            photos,
        } = this.props.project
        const durationMonths = to.diff(from, 'months')

        return (
            <div
                className='project-avatar'
                onClick={this.toggleDetailDialog}
            >
                <div className='project-logo-container'><img src={logo}/></div>

                <Modal
                    isOpen={this.state.detailOpened}
                    toggle={this.toggleDetailDialog}
                    className='modal-lg'
                >
                    <ModalHeader toggle={this.toggleDetailDialog}>
                        <div className='row'>
                            <div className='col-2'>
                                <div className='project-logo-container'><img src={logo}/></div>
                            </div>
                            <div className='col-10'>
                                <p>{name}</p>
                                <p>
                                    <b>Duration:</b>&nbsp;
                                    {durationMonths} months ({from.format(DATE_FORMAT)} - {to.format(DATE_FORMAT)})</p>
                                <p>
                                    <b>My role{myRoles.length > 1 ? 's' : ''}:</b>&nbsp;
                                    { myRoles.map(role => role.name).join(', ') }
                                </p>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <p><b>About:</b> {about}</p>
                        <p><b>Team size:</b> {teamSize} members</p>
                        <p><b>Status:</b> {status}</p>
                        <p><b>Stacks:</b></p>
                        <div className='row' style={{margin:0}}>
                            {
                                stacks.map(stack => {
                                    return (
                                        <div className='col-1' style={{margin:0, padding:0}}>
                                            <ProjectStack stack={stack}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p><b>Photos:</b></p>
                        <div className='row'>
                            <div className='col-12'>
                                <PhotoCarousel maxHeight='50rem' items={photos}/>
                            </div>
                        </div>
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
