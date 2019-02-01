import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { H5 } from './styles';

export default class Description extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <H5 {...this.props}>
                            {this.props.children}
                        </H5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

H5.defaultProps = {
    textAlign: 'justify',
    color: '#6c757d'
}