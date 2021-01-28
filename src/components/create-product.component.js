import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePaidFor = this.onChangePaidFor.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);


        this.state = {
            productName: '',
            description: '',
            price: 0,
            paidFor: '',
            date: new Date(),
            listOfProducts: []
        }
    }

    componentDidMount() {
        this.setState({
            listOfProducts: ['test product'],
            productName: 'test product'
        });
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
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
            paidFor: this.state.paidFor,
            date: this.state.date
        }

        console.log(product);

        window.location = '/'
    }
    
    render() {
        return (
            <div>
              <h3>Create New product Log</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Category: </label>
                  <select ref="userInput"
                      required
                      className="form-control"
                      value={this.state.productName}
                      onChange={this.onChangeProductName}>
                      {
                        this.state.listOfProducts.map(function(productName) {
                          return <option 
                            key={productName}
                            value={productName}>{[productName]}
                            </option>;
                        })
                      }
                  </select>
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