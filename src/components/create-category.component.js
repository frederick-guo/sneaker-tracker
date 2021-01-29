import React, { Component } from 'react';

export default class CreateCategory extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categoryName: ''
    }
  }

  onChangeCategoryName(e) {
    this.setState({
      categoryName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const category = {
      categoryName: this.state.categoryName
    }

    console.log(category);


    this.setState({
      categoryName: ''
    })
  }
    render() {
        return (
            <div>
              <h3>Create New Category</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                  <label>Category: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.categoryName}
                      onChange={this.onChangeCategoryName}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create Category" className="btn btn-primary" />
                </div>
              </form>
            </div>
          )
    }
}