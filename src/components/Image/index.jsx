import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="md-image" alt={this.props.alt} {...this.props}/>
            </React.Fragment>
        )
    }
}
