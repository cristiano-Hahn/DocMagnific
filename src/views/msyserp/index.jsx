import React, { Component } from 'react';
import Image from '../../components/Image';
import { Container, Row, Col, Button } from 'reactstrap';
import logoDocs from '../../layout/images/Msys_Docse_256x256.png';
import Description from '../../components/Description';
import Subtitle from '../../components/Subtitle';
import Frame from '../../components/frame';
import Video from '../../components/Video';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardText from '../../components/CardText';
import { withRouter } from 'react-router-dom'

const productStyle = {
    width: '150px',
    cursor: 'pointer'
}

class MsysERP extends Component {
    render() {
        return (
            <Frame>
                <Subtitle className="text-center" >Msys ERP - Sistema para gestão</Subtitle>
                <hr />
                <Container>
                    <Row>
                        <Col sm='12' md='12' lg='6' xl='6' className='d-flex align-items-center'>
                            <Image src={logoDocs} alt="MICROSYS®" style={productStyle} />
                            <Description style={{ color: '#6c757d', textAlign: 'justify' }}>
                                " O Javascript é uma das raras linguagens que você não precisa aprender, basta copiar de um mané que quebrou a cabeça uma semana para a construir meia dúzia de linhas."
                                    </Description>
                        </Col>
                        <Col sm='12' md='12' lg='6' xl='6'>
                            <Video
                                width="100%"
                                height="280"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                            />
                        </Col>

                    </Row>
                    <hr />
                    <Row>
                        <Card>
                            <CardTitle>Cadastrando produtos</CardTitle>
                            <CardText>Cadastre produtos para realizar vendas, controlar o estoque e outros pó muito loucos</CardText>
                            <Button onClick={() => this.props.history.push('/msyserp/cadastros/produtos')}>Vamos lá!</Button>
                        </Card>
                        <Card >
                            <CardTitle>Cadastrando pessoas</CardTitle>
                            <CardText>Cadastre clientes, fornecedores, vendedores e até você mesmo, não é legal?</CardText>
                            <Button>Vamos lá!</Button>
                        </Card>
                        <Card>
                            <CardTitle>Cadastrando tributações</CardTitle>
                            <CardText>Entenda essa parada que ninguém entende!</CardText>
                            <Button>Vamos lá!</Button>
                        </Card>
                        <Card>
                            <CardTitle>Cadastrando grupos de produtos</CardTitle>
                            <CardText>Crie um grupo de produto dentro de um grupo de produto até entrar em loop!</CardText>
                            <Button>Vamos lá!</Button>
                        </Card>
                    </Row>
                </Container>
                <hr />
            </Frame>
        );
    }
}

export default withRouter(MsysERP);



