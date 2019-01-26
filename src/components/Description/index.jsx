import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Description extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5 className="md-description">
                            {this.props.children}
                        </h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}
