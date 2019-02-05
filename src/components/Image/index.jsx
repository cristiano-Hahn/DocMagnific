import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <React.Fragment>
                {/* eslint-disable-next-line*/}
                <img className="md-image"
                    style={
                        {
                            width: this.props.width,
                            ...this.props.style
                        }}
                    {...this.props} />
            </React.Fragment>
        )
    }
}

Image.defaultProps = {
    width: '100%',
    style: {
        marginBottom: '20px',
        border: '3px solid #ccc',
    }
}
