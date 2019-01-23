import React, { Component } from 'react';
import TopBar from '../views/topbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
            </React.Fragment>
        );
    }
}
