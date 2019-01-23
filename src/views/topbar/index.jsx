import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    Input,
    Col
} from 'reactstrap';

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
                    <NavbarBrand href="/">documentação</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />

                    <Col>
                        <InputGroup>
                            <Input
                                className="form-control ds-input"
                                placeholder="Pesquisar doc."
                                bsSize="md"
                            />
                        </InputGroup>
                    </Col>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink href="/example1">Exemples</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>

                                <DropdownToggle outline nav caret>Produtos</DropdownToggle>

                                <DropdownMenu right>
                                    <DropdownItem href="/example1">Msys PDV</DropdownItem>
                                    <DropdownItem href="/example1">Msys Comercial</DropdownItem>
                                    <DropdownItem href="/example1">Msys Industrial</DropdownItem>

                                    <DropdownItem divider />

                                    <DropdownItem href="/example1">Msys ERP</DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}