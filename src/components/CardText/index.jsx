import React, { Component } from 'react'
import { CardText as InternalCardText } from 'reactstrap';
export default class CardText extends Component {
    render() {
        return (
            <InternalCardText {...this.props}>
                {this.props.children}
            </InternalCardText>
        )
    }
}
CardText.defaultProps = {
    style: {
        textAlign: 'left',
        height: '85px'
    }
}