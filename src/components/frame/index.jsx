import React, { Component } from 'react'
import TopBar from '../topbar';

export default class Frame extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                {this.props.children}
            </React.Fragment >
        )
    }
}
