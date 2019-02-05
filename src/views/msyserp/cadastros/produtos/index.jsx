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
                <div style={{
                    marginLeft: '15%',
                    marginTop: '20px',
                    marginRight: '15%',
                    textAlign: 'left'
                }}>
                    <p>Para acessar os seus produtos do Msys ERP acesse o menu <b> Cadastros</b>, sessão <b>  Produtos</b>, item <b>Produtos</b>.</p>
                   
                    <p >Essa é a tela de pesquisa, nela serão listados os produtos já cadastrados, você pode pesquisar pelo campo de busca ou adicionar um novo produto clicando em <b>Novo</b>. </p>
                    FOTO
                    <p >Após clicar em <b>Novo</b> será aberta a tela de cadastro de pessoas onde você deverá preencher os seguintes dados: </p>
                    FOTO
                    <p><b>Aba principal</b></p>
                    <p><b>Código *:</b> Esse é o código de controle interno da pessoa e é gerado automaticamente pelo sistema.</p>
                    <p><b>Nome *:</b> Nome da pessoa no caso de pessoa física e npme fantasia no caso de pessoa jurídica.</p>
                    <p><b>Situação *:</b> Situação atual da pessoa no sistema, pessoas inativas ou bloqueadas não poderão ser utilizadas.</p>
                    <p><b>Tipo *:</b> Informar se a pessoa é uma pessoa física ou pessoa jurídica.</p>
                    <p><b>Data do cadastro:</b> Dispõe a data em que a pessoa foi cadastrada, essa informação não pode ser modificada.</p>
                    <p><b>Papéis:</b> Informar qual a relação que a pessoa possui com a empresa, estão disponíveis os papeis de cliente, fornecedor, transportador, vendedor, motorista e responsável.</p>
                    FOTO
                    <p><b>Aba Física</b></p>

                    <p>Caso o tipo selecionado for <b>Física</b> serão exibidos os seguintes dados referentes a pessoa física:</p>
                    <p><b>CPF *:</b> Informar o número do documeto CPF (Cadastro de Pessoa Física) da pessoa.</p>
                    <p><b>RG:</b> Informar o número do documeto RG (Registro Geral) da pessoa.</p>
                    <p><b>Órgão emissor:</b> Informar o Órgão emissor do RG.</p>
                    <p><b>Sexo:</b> Informar o sexo da pessoa.</p>
                    <p><b>Data de nascimento:</b> Informar a data de nascimento da pessoa.</p>

                    <p><b>Aba Jurídica</b></p>
                    <p>Caso o tipo selecionado for <b>Jurídica</b> serão exibidos os seguintes dados referentes a pessoa jurídica:</p>
                    <p><b>CNPJ *:</b> Informar o número do documeto CNPJ da organização.</p>
                    <p><b>Razão social:</b> Informar a razão social da organização.</p>
                    <p><b>Regime tributário do ICMS:</b> Não sei.</p>
                    <p><b>Regime tributário ISSQN:</b> Não sei.</p>
                    <p><b>Categoria econômica:</b>Não sei.</p>
                    <p><b>Indicador de inscrição estadual:</b>Não sei.</p>
                    <p><b>Inscrição estadual:</b>Não sei.</p>
                    <p><b>Inscrição estadual do substituto tributário:</b>Não sei.</p>
                    <p><b>Inscrição municipal:</b>Não sei.</p>
                    <p><b>CNAE fiscal</b>Não sei.</p>
                    <p><b>Suframa</b>Não sei.</p>
                    
                </div>
            </Frame>
        )
    }
}
