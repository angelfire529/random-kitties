import React, { Component } from 'react';
import CatService from '../service/cat-service';
import CatImgForm from './cat-img-form';
import './cat-card.scss';

const CatCategory = props =>  {
    
    const handleClick = (cat) => {
        props.getCats(cat);
        props.show();
    }
  
   return (
       <div className="category-container col-12  d-inline-flex">
       <div className="col-8">
       <button type="button" className="btn btn-link" onClick={() => handleClick(props.name) }>{props.name}</button>
       </div> 
       <div className="col-4">
       <span className="badge badge-primary badge-pill">{props.total}</span>
       </div>
       </div>
   );
}

export default class CatCard extends Component {
    catService;
    constructor(props) {
        super(props);
        this.props = props;
        this.state =  {
            imgSrc: null,
        };
        this.catService = CatService;
        this.refreshCat = this.refreshCat.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.printCategories = this.printCategories.bind(this);
    }

    componentDidMount() {
        this.refreshCat();
    }

    addCategory (newCategory, pic) {
        const exist = this.catService.Exists(newCategory)
        if (exist) {
            this.props.show();
        } 
        else {
            this.props.hide();
        }
       this.catService.AddCategory(newCategory, pic);
    }

    getCategories() {
        console.log(localStorage.getItem('categories'));
        return JSON.parse(localStorage.getItem('categories'));
    }

    printCategories() {
        const cats = this.getCategories();
        if (!cats || (cats && cats.length === 0)) {
            return '';
        }
        return cats.map((c, i) => {
            return <li  key={i+3}><CatCategory key={i} name={c.category} show={this.props.show} getCats={this.props.setCat} total={c.images.length}  /></li>
        });
    }

    refreshCat() {
        this.catService.GetRandomCat().then(response => {
            this.setState({imgSrc: response})
        });
    }

    render(){
        return (
            <div className="card">
            <img src={this.state.imgSrc} className="card-img-top img-cat" alt="cat" ></img>
                <div className="card-body">
                    <CatImgForm imageSrc={this.state.imgSrc}  refreshCat={this.refreshCat} addCat={this.addCategory}/>
                    <div className="cats">
                        <ul>
                           {this.printCategories()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}
