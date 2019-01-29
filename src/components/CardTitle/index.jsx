import React, { Component } from 'react'
import { CardTitle as InternalCardTitle } from 'reactstrap';

export default class CardTitle extends Component {
    render() {
        return (
            <InternalCardTitle {...this.props}>
                {this.props.children}
            </InternalCardTitle>
        )
    }
}

CardTitle.defaultProps = {
    style: {
        color: '#6c757d',
        height: '35px',
        fontWeight: 'bold',
        textAlign: 'left'
    }
}


