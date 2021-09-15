import React from 'react'
import { MdDesktopMac} from 'react-icons/md';
import Ptext from './PText';
import styled from 'styled-components';

const ItemStyle = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
        width: 3rem;
        }
    }
    .servicesItem__title{
        font-size: 2.4rem;
        font-family: 'Montserrat SemiBold';
    }
    .para{
        margin-top: 2rem;
    }
`;

export default function ServicesSectionItem({
    icon= <MdDesktopMac />,
    title = 'Web Design',
    desc = 'Nguyen viet HungNguyen viet HungNguyen viet HunNguyen viet Hung Nguyen viet HungNguyen viet Hung'
}) {
    return (
        <ItemStyle>
            <div className="servicesItem__icon">
                {icon}
            </div>
            <div className="servicesItem__title">
                {title}
            </div>
            <Ptext>
                {desc}
            </Ptext>
        </ItemStyle>
    )
}
