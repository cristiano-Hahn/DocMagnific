import React, { Component } from 'react';
import Image from '../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, FormGroup } from 'reactstrap';

import logoIndustrial from '../images/Msys_Industrial_256x256.png';
import logoComercial from '../images/Msys_Comercial_256x256.png';
import logoPdv from '../images/Msys_PDV_256x256.png';
import logoDocs from '../images/Msys_Docse_256x256.png';

const styleJumbotron = {
    backgroundColor: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem'
};

class Body extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="jumbotron-header text-center mb-3 jumbotron" style={styleJumbotron}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="lead">
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        size="4x"
                                    />
                                </p>
                                <h1 className="jumbotron-heading display-4">documentação</h1>
                                <p className="lead">Manual completo de todos os nossos produtos</p>
                                <hr className="my-2" />
                                <Container style={{ marginTop: '25px' }}>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <h3 className="text-muted">Industrial</h3>
                                                <Image src={logoIndustrial} alt="MICROSYS®" style={{ width: '150px', cursor: 'pointer' }} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <h3 className="text-muted">Comercial</h3>
                                                <Image src={logoComercial} alt="MICROSYS®" style={{ width: '150px', cursor: 'pointer' }} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                        <FormGroup>
                                                <h3 className="text-muted">PDV</h3>
                                                <Image src={logoPdv} alt="MICROSYS®" style={{ width: '150px', cursor: 'pointer' }} onClick={() => console.log('lol')} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                        <FormGroup>
                                                <h3 className="text-muted">Docs'e</h3>
                                                <Image src={logoDocs} alt="MICROSYS®" style={{ width: '150px', cursor: 'pointer' }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Container>
                                <hr className="my-2" />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Body;



