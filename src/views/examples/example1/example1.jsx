import React, { Component } from 'react'
import PropTypes from 'prop-types'
import javascript from './img/javascript.png'
export default class example1 extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>This is the title!</h1>

                <h2> This is a subtitle!</h2>

                <p>
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                </p>

                <p>This is a image</p>
                <img src={javascript} alt="This is a image" />

                <p>This is a video</p>
                <iframe width="600" height="400"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>

            </div>
        )
    }
}
