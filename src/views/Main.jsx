import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Body from './initialPage';

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
