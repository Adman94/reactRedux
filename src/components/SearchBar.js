import React, { Component } from 'react'

export default class SearchBar extends Component {
  // constructor(props) {
  //   super();

  //   this.onFormSubmit = this.onFormSubmit.bind(this)
  // }
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
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
