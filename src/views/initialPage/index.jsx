import React, { Component } from 'react';
import Image from '../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Jumbotron, Row, Col, FormGroup ,Container} from 'reactstrap';

import logoIndustrial from '../../layout/images/Msys_Industrial_256x256.png';
import logoComercial from '../../layout/images/Msys_Comercial_256x256.png';
import logoPdv from '../../layout/images/Msys_PDV_256x256.png';
import logoDocs from '../../layout/images/Msys_Docse_256x256.png';
import Title from '../../components/Title';
import Description from '../../components/Description';
import Subtitle from '../../components/Subtitle';
import {withRouter} from 'react-router-dom'
import Frame from '../../components/frame';
const styleJumbotron = {
    backgroundColor: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem'
};

const productStyle = {
    width: '150px',
    cursor: 'pointer'
}

class InitialPage extends Component {
    render() {
        return (
            <Frame>
                <Jumbotron className="text-center" style={styleJumbotron}>
                    <Col>
                        <FontAwesomeIcon icon={faBookOpen} size="6x" />

                        <Title>Documentação</Title>
                        <Description>Manual completo de todos os nossos produtos</Description>

                        <hr />
                        <Container style={{ marginTop: '25px' }}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Subtitle>Industrial</Subtitle>
                                        <Image src={logoIndustrial} alt="MICROSYS®" style={productStyle} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Subtitle>Comercial</Subtitle>
                                        <Image src={logoComercial} alt="MICROSYS®" style={productStyle} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Subtitle>PDV</Subtitle>
                                        <Image src={logoPdv} alt="MICROSYS®" style={productStyle} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Subtitle>Docs'e</Subtitle>
                                        <Image src={logoDocs} alt="MICROSYS®" style={productStyle} />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Subtitle>Msys ERP</Subtitle>
                                        <Image src={logoDocs} alt="MICROSYS®" style={productStyle} onClick={() => this.props.history.push('/msyserp')}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Container>
                        <hr />
                    </Col>
                </Jumbotron>
            </Frame>
        );
    }
}

export default withRouter(InitialPage);



