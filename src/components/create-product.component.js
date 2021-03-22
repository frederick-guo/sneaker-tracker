import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePaidFor = this.onChangePaidFor.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            categoryName: '',
            productName: '',
            description: '',
            price: 0,
            paidFor: '',
            date: new Date(),
            listOfCategories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                listOfCategories: response.data.map(category => category.categoryName),
                categoryName: response.data[0].categoryName
              })
            }
          })
        
    }

    onChangeCategoryName(e) {
      this.setState({
        categoryName: e.target.value
      })
    }

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    
    onChangePaidFor(e) {
        this.setState({
            paidFor: e.target.value
        });
    }
    
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const product = {
            categoryName: this.state.categoryName,
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            paidFor: this.state.paidFor,
            date: this.state.date
        }

        console.log(product);

        axios.post('http://localhost:5000/products/add', product)
          .then(res => console.log(res.data));

        window.location = '/'
    }
    
    render() {
        return (
            <div>
              <h3>Create New Product Log</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Category: </label>
                  <select ref="userInput"
                      required
                      className="form-control"
                      value={this.state.categoryName}
                      onChange={this.onChangeCategoryName}>
                      {
                        this.state.listOfCategories.map(function(categoryName) {
                          return <option 
                            key={categoryName}
                            value={categoryName}>{[categoryName]}
                            </option>;
                        })
                      }
                  </select>
                </div>
                <div className="form-group"> 
                  <label>Product: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.onChangeProductName}
                      />
                </div>
                <div className="form-group"> 
                  <label>Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                  <label>Price: </label>
                  <input 
                      type="text" 
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChangePrice}
                      />
                </div>
                <div className="form-group"> 
                  <label>Has it been paid for? </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.paidFor}
                      onChange={this.onChangePaidFor}
                      />
                </div>
                <div className="form-group">
                  <label>Date: </label>
                  <div>
                    <DatePicker
                      selected={this.state.date}
                      onChange={this.onChangeDate}
                    />
                  </div>
                </div>
        
                <div className="form-group">
                  <input type="submit" value="Create Product Log" className="btn btn-primary" />
                </div>
              </form>
            </div>
            )
    }
}