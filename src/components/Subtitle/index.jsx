import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Subtitle extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 className="md-subtitle">
                            {this.props.children}
                        </h2>
                    </Col>
                </Row>
            </Container>
        )
    }
}
