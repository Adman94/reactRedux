import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        )
    }
}
