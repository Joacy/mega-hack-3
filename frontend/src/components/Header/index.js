import React from 'react';

import { Link } from 'react-router-dom';

import {
    StyledHeader,
    FlexRow,
    Ul,
} from './styles';

import logo from '../../assets/logo.jpg';

function Header () {
    return (
        <StyledHeader>
            <div className="container">
                <FlexRow>
                    <Link className="brand" to='/'>
                        <img src={logo} alt="Cadê a comida?" />
                    </Link>
                </FlexRow>
            </div>
        </StyledHeader>
    );
}

export default Header;