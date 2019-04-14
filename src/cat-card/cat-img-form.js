import React, { Component } from 'react'

export default class CatImgForm  extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.refresh = this.refresh.bind(this);
        super(props);
        this.props = props;
        this.state = {
            value: ''
        };
        
        this.refresh = this.refresh.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
       this.props.addCat(this.state.value, this.props.imageSrc);
       this.setState({value: ''})
    }

    handleChange(evt) {
        this.setState({ value: evt.target.value });
    }
    handleKeyPress(evt) {
        if (evt.which === 13) {
            this.handleSubmit(evt);
        }
    }

    refresh () {
        this.props.refreshCat();
    }

    render() {
        return(
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group col-xs-12 col-xl-7">
                       <div className="category--input">
                        <label className="category--label">Category</label>
                        <input className="form-control" type="text" placeholder="enter cagetory" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} required/>
                       </div>
                        </div>
                    <div className="form-group col-xs-12 col-xl-5">
                        <div className="btn-container ">
                                <button type="submit" className="btn btn-sm btn-outline-primary">Submit</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary btn-next" onClick={this.refresh}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}