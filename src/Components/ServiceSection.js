import React from 'react';
import SectoinTitle from './SectoinTitle';
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup} from 'react-icons/md';

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width:768px){
        .services__allItems{
            flex-direction: column;
            max-width:350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ServiceSection() {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectoinTitle heading='Services' subheading="What i will do for you" />
                <div className="services__allItems">
                    <ServicesSectionItem 
                        icon={<MdDesktopMac />}
                        title = 'Web Design'
                        desc='Nguyen viet HungNguyen viet HungNguyen viet HunNguyen viet Hung Nguyen viet HungNguyen viet Hung'
                    />
                    <ServicesSectionItem 
                        icon={<MdCode />}/>
                    <ServicesSectionItem 
                        icon = {<MdPhonelinkSetup />}
                    />
                </div>
            </div>
        </ServicesItemStyles>
    )
}
