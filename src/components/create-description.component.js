import React, { Component } from 'react';

export default class CreateDescription extends Component {
    constructor(props) {
        super(props);

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);


        this.state = {
            product: '',
            comments: '',
            size: 0,
            price: 0,
            date: new Date(),
            listOfProducts: []
        }
    }

    componentDidMount() {
        this.setState({
            listofProducts: ['test product'],
            product: 'test product'
        });
    }

    onChangeProduct(e) {
        this.setState({
            product: e.target.value
        });
    }

    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e){
        e.preventDefault();

        const description = {
            product: this.state.product,
            comments: this.state.comments,
            size: this.state.size,
            price: this.state.price,
            date: this.state.date
        }

        console.log(description);

        window.location = '/'
    }
    
    render() {
        return (
            <div>
                <p>You are on the Create Description component!</p>
            </div>
        )
    }
}