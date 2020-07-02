import React from 'react';

import { Link } from 'react-router-dom';

import {
    StyledHeader,
    FlexRow,
    Ul,
} from './styles';

function Header () {
    const logo = "https://via.placeholder.com/180x70/9FD1D1/1D254F"

    return (
        <StyledHeader>
            <div className="container">
                <FlexRow>
                    <img src={logo} alt="Cadê a comida?" />

                    <Ul>
                        <li>
                            <Link to='register-place'>
                                <span>Cadastrar<br />estabelecimento</span>
                            </Link>
                        </li>
                    </Ul>
                </FlexRow>
            </div>
        </StyledHeader>
    );
}

export default Header;