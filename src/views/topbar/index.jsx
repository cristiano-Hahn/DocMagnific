import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from 'reactstrap';
import Image from '../../components/Image';
import microsysLogo from '../images/marca_microsys.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = { isOpen: false };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <Image src={microsysLogo} alt="MICROSYS®" style={{ width: '220px' }} />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <InputGroup>
                                    <Input
                                        className="form-control ds-input"
                                        placeholder="Pesquisar na document..."
                                    />
                                    <InputGroupAddon addonType="append">
                                        <Button
                                            color="secondary"
                                            onClick={() => {}}
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}