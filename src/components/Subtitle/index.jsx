import React, { Component } from 'react'

export default class Subtitle extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="md-subtitle">
                    {this.props.children}
                </h1>
            </React.Fragment>
        )
    }
}
