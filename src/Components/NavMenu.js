import React, { useState } from "react";
import {NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose} from 'react-icons/md';

const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius:8px;
            transition: .3s ease background-color;
            &:hover{
                background-color: var(--deep-dark);
            }
        }
        a{
            display: inline-block;
            font-family: 'Roboto Regular';
            padding: 1rem 1rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;
        }
        .active{
            color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top: 1rem;
        width:  4rem;
        cursor: pointer;
        display: none;
        outline: none
    }
    .closeNavIcon{
        display: none;
    }
    @media only screen and (max-width: 768px) {
        padding:0;
        .hide-item{
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon{
            display:block;
        }
        .navItems{
            display: flex;
            flex-direction: column;
            --top: 1rem;
            transition: .3s ease transform;
            background-color:  var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width:300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
             .closeNavIcon{
                display:block;
                width:3rem;
                margin: 0 0 0 auto;
                cursor:pointer;
                *{
                    pointer-events: none;
                }
            }
        }
        li{
            display: block;
            margin-bottom: 1rem;
        }
       
    }
`;


function NavMenu() {
    const [showNav, SetShowNav] = useState(false);
    return (
        <NavMenuStyles>
            <div className="mobile-menu-icon"
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu> </MdMenu>
            </div>
            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div className="closeNavIcon"
                onClick ={() => SetShowNav(!showNav)}
                role = "button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex = {0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink to="/" exact
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                        >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </NavMenuStyles>
    );
}

export default NavMenu;