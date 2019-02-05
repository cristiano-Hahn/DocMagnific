import React, { Component } from 'react'
import Frame from '../../../../components/frame';
import Subtitle from '../../../../components/Subtitle';
import Image from '../../../../components/Image';

import imgMenu from './img/msyserp-pessoas-menu.png'
import imgPesquisa from './img/msyserp-pessoas-pesquisa.png'
import imgPrincipal from './img/msyserp-pessoas-principal.png'
import imgFisica from './img/msyserp-pessoas-fisica.png'
import imgJuridica from './img/msyserp-pessoas-juridica.png'
import imgObservacao from './img/msyserp-pessoas-observacao.png'
import imgReferencia from './img/msyserp-pessoas-referencia.png'
import imgConcluido from './img/msyserp-pessoas-concluido.png'


export default class MsysERP_Cadastros_Pessoas extends Component {
    render() {
        return (
            <Frame>
                <Subtitle className="text-center" >MsysERP - Cadastrando pessoas</Subtitle>
                <hr />
                <div style={{
                    marginLeft: '15%',
                    marginTop: '20px',
                    marginRight: '15%',
                    textAlign: 'left'
                }}>
                    <p>Para acessar as pessoas cadastradas no Msys ERP acesse o menu <b> Cadastros</b>, sessão <b>  Pessoas</b>, item <b>Pessoas</b>.</p>
                    <Image src={imgMenu} width='175px' />

                    <p > Em seguida será exibida a tela de pesquisa, nela serão listadas todas as pessoas já cadastradas, você pode pesquisar pelo campo de busca ou adicionar uma nova pessoa clicando em <b>Novo</b>. </p>
                    <Image src={imgPesquisa} alt="" width='100%' />

                    <p >Após clicar em <b>Novo</b> será aberta a tela de cadastro de pessoas onde você deverá preencher os seguintes dados: </p>
                    <p><b>Aba principal</b></p>
                    <Image src={imgPrincipal} alt="" width='100%' />

                    <p><b>Código *:</b> Esse é o código de controle interno da pessoa e é gerado automaticamente pelo sistema.</p>
                    <p><b>Nome *:</b> Nome da pessoa no caso de pessoa física e npme fantasia no caso de pessoa jurídica.</p>
                    <p><b>Situação *:</b> Situação atual da pessoa no sistema, pessoas inativas ou bloqueadas não poderão ser utilizadas.</p>
                    <p><b>Tipo *:</b> Informar se a pessoa é uma pessoa física ou pessoa jurídica.</p>
                    <p><b>Data do cadastro:</b> Dispõe a data em que a pessoa foi cadastrada, essa informação não pode ser modificada.</p>
                    <p><b>Papéis:</b> Informar qual a relação que a pessoa possui com a empresa, estão disponíveis os papeis de cliente, fornecedor, transportador, vendedor, motorista e responsável.</p>


                    <p><b>Aba Física</b></p>
                    <Image src={imgFisica} alt="" width='100%' />
                    <p>Caso o tipo selecionado for <b>Física</b> serão exibidos os seguintes dados referentes a pessoa física:</p>
                    <p><b>CPF *:</b> Informar o número do documeto CPF (Cadastro de Pessoa Física) da pessoa.</p>
                    <p><b>RG:</b> Informar o número do documeto RG (Registro Geral) da pessoa.</p>
                    <p><b>Órgão emissor:</b> Informar o Órgão emissor do RG.</p>
                    <p><b>Sexo:</b> Informar o sexo da pessoa.</p>
                    <p><b>Data de nascimento:</b> Informar a data de nascimento da pessoa.</p>

                    <p><b>Aba Jurídica</b></p>
                    <Image src={imgJuridica} alt="" width='100%' />
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

                    <p>A próxima aba é a aba de <b>observação</b></p>

                    <Image src={imgObservacao} alt="" width='100%' />
                    <p>Essa aba é destinada as observações gerais referentes a pessoa.</p>

                    <p>Em seguida, temos as <b>abas adicionais</b> utilizadas para inserir as demais informações da pessoa.</p>

                    <p><b>Referências: </b> Serve para informar os contatos de referência da pessoa.</p>
                    <p><b>Telefones: </b> Serve para informar os telefones da pessoa.</p>
                    <p><b>Emails: </b> Serve para informar os emails da pessoa.</p>
                    <p><b>Endereços: </b> Serve para informar os endereços da pessoa.</p>
                    <p><b>Responsaveis: </b> Serve para informar quais são as pessoas responsáveis pelo cadastrado, essa informação é utilizada geralmente em caso de pessoa jurídica.</p>
                    <Image src={imgReferencia} alt="" width='100%' />
                    <p>Para cadastrar cada um desses dados primeiro é necessário <b>salvar</b> o cadastro principal, em seguida clicar em <b>Novo</b> na aba inferior, informar os dados e clicar em salvar.

                    Após a informação adicional ser salva ela pode ser visualizada e excluída através do campo <b>Ações</b> da tabela de registros adicionais.</p>

                    <p>Depois de inserir todas as informações adicionais podemos voltar para a pesquisa e a pessoa que acabamos de cadastrar estará disponível para ser utilizada no sistema, você também pode visualizá-la ou excluí-la no menu <b>Ações.</b></p>
                    <Image src={imgConcluido} alt="" width='100%' />
                    <p><b>Espero ter ajudado, até a próxima :)</b></p>
                </div>
            </Frame>
        )
    }
}
