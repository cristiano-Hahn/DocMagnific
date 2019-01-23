import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <React.Fragment>
                <iframe title={this.props.title}{...this.props} />
            </React.Fragment>
        )
    }
}
