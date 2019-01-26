import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
export default class Title extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        {<h1 className="display-4">{this.props.children}</h1>}
                    </Col>
                </Row>
            </Container>
        )
    }
}
