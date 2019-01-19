import React, { Component } from 'react'

export default class Text extends Component {
    render() {
        return (
            <React.Fragment>
                <p className="md-text">
                    {this.props.children}
                </p>
            </React.Fragment>
        )
    }
}
