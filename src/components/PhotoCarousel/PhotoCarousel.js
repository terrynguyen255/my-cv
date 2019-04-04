import React, {Component} from 'react'
import './PhotoCarousel.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'


export class PhotoCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = { activeIndex: 0 }
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({ activeIndex: nextIndex })
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        const {
            speedSecs,
            maxHeight
        } = this.props
        
        
        const carouselItems = this.props.items.map(photo => (
            <CarouselItem
                className='carousel-item-custom'
                tag='div'
                key={photo.src}
                onExiting={this.onExiting}
                onExited={this.onExited}
            >
                <img src={photo.src} alt={photo.title} />
                <CarouselCaption className='carousel-caption-custom' captionText={photo.subTitle} captionHeader={photo.title} />
            </CarouselItem>
        ))

        return (
            <div>
                <style>
                    {`
                        .carousel-item-custom {
                            width: 100%;
                            transition: -webkit-transform ${speedSecs} ease-in-out;
                            transition: transform ${speedSecs} ease-in-out;
                            transition: transform ${speedSecs} ease-in-out, -webkit-transform ${speedSecs} ease-in-out;
                            transition: transform ${speedSecs} ease-in-out,-webkit-transform ${speedSecs} ease-in-out;
                        }
                        .carousel-item-custom img{
                            width: auto;
                            max-width: 100%;
                            max-height: ${maxHeight};
                            margin-left: auto;
                            margin-right: auto;
                            display: block;
                            border: solid 0.05rem #ccc;
                        }
                        .carousel-indicator-custom li {
                            border: solid 0.05rem black;
                        }
                        .carousel-indicator-custom .active {
                            background: black;
                            opacity: 1;
                        }
                        .carousel-control-prev-icon {
                            background-image: url('/images/icon-carousel-prev.svg');
                        }
                        .carousel-control-next-icon {
                            background-image: url('/images/icon-carousel-next.svg');
                        }
                        .carousel-caption-custom {
                            padding: 0;
                            background-color: rgba(80, 80, 80, 0.5);
                        }
                    `}
                </style>
                <Carousel
                    className='carousel-slide-custom'
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators
                        className='carousel-indicator-custom'
                        items={this.props.items}
                        activeIndex={activeIndex}
                        onClickHandler={this.goToIndex}
                    />
                    {carouselItems}
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                    <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                </Carousel>
            </div>
        )
    }
}

PhotoCarousel.defaultProps = {
    speedSecs: 8,
    maxHeight: '500px'
}
