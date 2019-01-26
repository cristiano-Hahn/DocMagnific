import React, { Component } from 'react';
import Image from '../../components/Image';
import { Container, Jumbotron, Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';
import logoDocs from '../../layout/images/Msys_Docse_256x256.png';
import Description from '../../components/Description';
import Subtitle from '../../components/Subtitle';
import Frame from '../../components/frame';
import Video from '../../components/Video';
const styleJumbotron = {
    backgroundColor: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem'
};

const productStyle = {
    width: '150px',
    cursor: 'pointer'
}

class MsysERP extends Component {
    render() {
        return (
            <Frame>
                <Jumbotron className="text-center" style={styleJumbotron}>
                    <Col>
                        <Image src={logoDocs} alt="MICROSYS®" style={productStyle} />
                        <Subtitle>Msys ERP - Sistema para gestão de paradas muito loucas</Subtitle>
                        <hr />
                        <Container>


                            <Row>
                                <Col sm='12' md='12' lg='6' xl='6' className='d-flex align-items-center'>
                                    <Description style={{ color: '#6c757d', textAlign: 'justify' }}>
                                        " O Javascript é uma das raras linguagens que você não precisa aprender, basta copiar de um mané que quebrou a cabeça uma semana para a construir meia dúzia de linhas. (Dizer o que é esse msysérp) "
                                    </Description>
                                </Col>
                                <Col sm='12' md='12' lg='6' xl='6'>
                                    <Video
                                        width="500"
                                        height="280"
                                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                    />
                                </Col>

                            </Row>
                            <hr />
                            <Row>
                                <Col sm='12' md='6' lg='4' xl='3'>
                                    <Card body style={{ border: 'none' }}>
                                        <CardTitle style={{ color: '#6c757d', height: '35px', fontWeight: 'bold', textAlign: 'left' }}>Cadastrando produtos</CardTitle>
                                        <CardText style={{ textAlign: 'left', height: '85px' }}>Cadastre produtos para realizar vendas, controlar o estoque e outros pó muito loucos</CardText>
                                        <Button>Vamos lá!</Button>
                                    </Card>
                                </Col>


                                <Col sm='12' md='6' lg='4' xl='3'>
                                    <Card body style={{ border: 'none' }}>
                                        <CardTitle style={{ color: '#6c757d', height: '35px', fontWeight: 'bold', textAlign: 'left' }}>Cadastrando pessoas</CardTitle>
                                        <CardText style={{ textAlign: 'left', height: '85px' }}>Cadastre clientes, fornecedores, vendedores e até você mesmo, não é legal?</CardText>
                                        <Button>Vamos lá!</Button>
                                    </Card>
                                </Col>

                                <Col sm='12' md='6' lg='4' xl='3'>
                                    <Card body style={{ border: 'none' }}>
                                        <CardTitle style={{ color: '#6c757d', height: '35px', fontWeight: 'bold', textAlign: 'left' }}>Cadastrando tributações</CardTitle>
                                        <CardText style={{ textAlign: 'left', height: '85px' }}>Entenda essa parada que ninguém entende!</CardText>
                                        <Button>Vamos lá!</Button>
                                    </Card>
                                </Col>

                                <Col sm='12' md='6' lg='4' xl='3'>
                                    <Card body style={{ border: 'none' }}>
                                        <CardTitle style={{ color: '#6c757d', height: '35px', fontWeight: 'bold', textAlign: 'left' }}>Cadastrando grupos de produtos</CardTitle>
                                        <CardText style={{ textAlign: 'left', height: '85px' }}>Crie um grupo de produto dentro de um grupo de produto até entrar em loop!</CardText>
                                        <Button>Vamos lá!</Button>
                                    </Card>
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

export default MsysERP;



