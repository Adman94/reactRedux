import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  // constructor(props) {
  //   super();

  //   this.onFormSubmit = this.onFormSubmit.bind(this)
  // }
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="label" htmlFor="">Type a category to search images</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}
