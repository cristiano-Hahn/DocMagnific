import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="md-title">
                    {this.props.children}
                </h1>
            </React.Fragment>
        )
    }
}
