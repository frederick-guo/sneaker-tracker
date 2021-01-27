import React, { Component } from 'react';

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
            paidFor: 0,
            date: new Date(),
            listOfProducts: []
        }
    }

    componentDidMount() {
        this.setState({
            listofProducts: ['test product'],
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
                <p>You are on the Create Product component!</p>
            </div>
        )
    }
}