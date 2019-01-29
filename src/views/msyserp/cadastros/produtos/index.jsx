import React, { Component } from 'react'
import Frame from '../../../../components/frame';
import Subtitle from '../../../../components/Subtitle';
import Video from '../../../../components/Video';
import { Col } from 'reactstrap';

export default class MsysERP_Cadastros_Produtos extends Component {
    render() {
        return (
            <Frame>
                <Subtitle className="text-center" >MsysERP - Cadastrando produtos</Subtitle>
                <hr />
                <Col sm='12' md='12' lg='12' xl='12'>
                    <Video
                        width="60%"
                        height="400"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    />
                </Col>
                <p style={{
                    marginLeft: '10%',
                    marginTop: '20px',
                    marginRight: '10%',
                }}>
                    Para cadastrar os seus produtos do Msys ERP acesse o menu <b> Cadastros</b>, sessão <b>  Produtos</b>, item <b>Produtos</b>.
                </p>
            </Frame>
        )
    }
}
