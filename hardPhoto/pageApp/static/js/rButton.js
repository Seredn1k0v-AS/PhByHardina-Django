import React, { Component } from 'react'

export default class rButton extends Component {
    render() {
        return (
            <div>
                <button>Button получается...</button>
            </div>
        )
    }
}
const domContainer = document.querySelector('#rButton');
ReactDOM.render(domContainer);