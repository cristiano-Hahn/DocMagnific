import React, { Component } from 'react'
import TopBar from '../topbar';
import { Jumbotron, Col } from 'reactstrap';
export default class Frame extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <Jumbotron className="text-center" style={this.props.style}>
                    <Col>
                        {this.props.children}
                    </Col>
                </Jumbotron>
            </React.Fragment >
        )
    }
}

Frame.defaultProps = {
    style: {
        backgroundColor: '#fff',
        paddingTop: '2rem',
        paddingBottom: '2rem'
    }
}
