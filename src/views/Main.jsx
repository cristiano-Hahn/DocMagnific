import React, { Component } from 'react';
import TopBar from '../components/topbar';
import InitialPage from './initialPage';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <InitialPage />
            </React.Fragment>
        );
    }
}
