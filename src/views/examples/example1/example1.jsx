import React, { Component } from 'react'
import javascript from './img/javascript.png'
import Title from '../../../components/Title';
import Subtitle from '../../../components/Subtitle'
import Text from '../../../components/Text'
import Image from '../../../components/Image'
import Video from '../../../components/Video'


export default class example1 extends Component {

    render() {
        return (
            <React.Fragment>
                <Title>This is the title!</Title>

                <Subtitle> This is a subtitle!</Subtitle>

                <Text>
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                    This is a simple text! This is a simple text! This is a simple text!
                </Text>

                <Text>This is a image</Text>
                <Image src={javascript} alt="This is a image" />

                <Text>This is a video</Text>
                <Video
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                />

            </React.Fragment>
        )
    }
}
