import React, { Component } from 'react';
import CatCard from '../cat-card/cat-card';
import {CSSTransition} from 'react-transition-group'
import CatService from '../service/cat-service';
import './slide-out.scss';

const Thumbnail = props => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ml-2 mt-3 mr-2">
        <a target="_blank" className="margin-right--10" href={props.src}><img src={props.src} width="150px" height="125px" alt="i" /></a>
        </div>
        
        );
}

const  SlideOutPanel = props =>  {
   
    const hideSlideOut = () => {
        props.hide();
    }

    const printThumbnails  = (category) =>{
        const thumbnails = category ? CatService.GetImagesByCategory(category) : [];
       return  thumbnails.map((thumb, i) => {
           return  <Thumbnail key={i} src={thumb} />
        });
    }

        return (
            <div className="slide-out" >
                <span className="close" onClick={hideSlideOut}>x</span>
                <div className="row">
                {printThumbnails(props.cat)}
                </div>
             </div>
        );
}

export default class SlideOut extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            show: false,
            category: null
        };
        this.hideSlideOut = this.hideSlideOut.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.setShow = this.setShow.bind(this);
    }

    hideSlideOut () {
        this.setState({show: false});
    }

    setShow() {
        this.setState({show: true});
    }

    getCategory(cat) {
        this.setState({category: cat});
    }

    render () {
        let thumbnails =  null;
        if (this.state.show) {
            thumbnails =   <CSSTransition
                                            in={this.state.show}
                                            enter={this.state.show}
                                            exit={!this.state.show}
                                            appear={true}
                                            timeout={5000}
                                            classNames="slide"
                                            >
            <SlideOutPanel className="" hide={this.hideSlideOut} show={this.state.show} cat={this.state.category} />
            </CSSTransition>
        }
        return (
            <div className="slide-out-container">
                <div className="side-window">
                    <CatCard show={this.setShow} hide={this.hideSlideOut}  setCat={this.getCategory}/>
                </div>
            {thumbnails}               
            </div>
        );
    }
}
