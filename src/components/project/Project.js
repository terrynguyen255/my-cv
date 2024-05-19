import React, {Component} from 'react'
import './Project.css'
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next';
import ReactTooltip from "react-tooltip";

import {ProjectStack} from "../projectStack/ProjectStack";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import {getLocalizedValue} from "../../helpers/languageHelper";

const moment = require('moment')

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailOpened: false
        }
        this.toggleDetailDialog = this.toggleDetailDialog.bind(this)
    }

    render() {
        const { t, i18n } = this.props;
        const project = this.props.project
        const lastTo = project.to || moment()
        const durationMonths = lastTo.diff(project.from, 'months')
        const projectToDiffToday = moment().diff(lastTo, 'days')
        const durationFrom = project.from.format(t('DATE_FORMAT'))
        const durationTo =  !projectToDiffToday ? t('PRESENT') : project.to.format(t('DATE_FORMAT'))
        const durationRange = `(${durationFrom} - ${durationTo})`

        return (
            <div
                className='project-avatar'
                onClick={this.toggleDetailDialog}
            >
                <ReactTooltip id={project.name} type='info'>{project.name}</ReactTooltip>
                <div
                    className='project-logo-container'
                    data-tip data-for={project.name}>
                    <img src={project.logo} alt={project.name}/>
                    <p>See details</p>
                </div>

                <Modal
                    isOpen={this.state.detailOpened}
                    toggle={this.toggleDetailDialog}
                    className='modal-xl modal-dialog-custom'
                >
                    <ModalHeader toggle={this.toggleDetailDialog} className="modal-header-custom">
                        <div className='row'>
                            <div className='col-2'>
                                <div className='project-logo-container'><img src={project.logo} alt={project.name}/></div>
                            </div>
                            <div className='col-10'>
                                <p>{project.name}</p>
                                <p>
                                    <b>{t('LABEL_DURATION')}: </b>
                                    {durationMonths} {t('MONTHS')} {durationRange}
                                </p>
                                <p>
                                    <b>{project.myRoles.length > 1 ? t('LABEL_MY_ROLES') : t('LABEL_MY_ROLE')}: </b>
                                    { project.myRoles.map(role => role.name).join(', ') }
                                </p>
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className='project-about'><b>{t('LABEL_ABOUT')}:</b> {getLocalizedValue(project.about, i18n)}</div>
                        <p><b>{t('LABEL_TEAM_SIZE')}:</b> {project.teamSize} {t('MEMBERS')}</p>
                        <p><b>{t('LABEL_STATUS')}:</b> {getLocalizedValue(project.status, i18n)}</p>
                        <p><b>{t('LABEL_STACKS')}:</b></p>
                        <div className='row' style={{margin:0}}>
                            {
                                project.stacks.map((stack, idx) => {
                                    return (
                                        <div key={idx} className='col-1' style={{margin:0, padding:0}}>
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
                                        <p><b>{t('LABEL_PHOTOS')}:</b></p>
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

export default withNamespaces('componentProject')(Project)