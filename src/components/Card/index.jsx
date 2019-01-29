import React, { Component } from 'react'
import { Col, Card as InternalCard } from 'reactstrap';
export default class Card extends Component {
    render() {

        const { sm, md, lg, xl, style, colStyle } = this.props

        return (
            <Col sm={sm} md={md} lg={lg} xl={xl} style={colStyle}>
                <InternalCard body style={style}>
                    {this.props.children}
                </InternalCard>
            </Col>
        )
    }
}

Card.defaultProps = {
    sm: '12',
    md: '6',
    lg: '4',
    xl: '3',
    style: {
        border: 'none'
    }
}
