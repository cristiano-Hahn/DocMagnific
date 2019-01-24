import React, { Component } from 'react';
import TopBar from '../views/topbar';
import Body from './body';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <Body />
            </React.Fragment>
        );
    }
}
