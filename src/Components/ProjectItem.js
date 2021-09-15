import React from 'react'
import {Link} from 'react-router-dom';
import projectImg from '../assets/images/projectImg.png';
import styled from 'styled-components';

const ProjectItemStyle = styled.div`
    .projectItem__img{
        width:100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .projectItem__infor{
       margin-top: 1rem;
       background-color: var(--deep-dark);
       padding: 1rem;
       border-radius:12px;
    }
    .projectItem__title{
        font-size:2.2rem;
    }
    .projectItem__desc{
        font-size:1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }
    @media only screen and (max-width:768){
        .projectItem__img{
            height: 35px;

        }
    }
`;

export default function ProjectItem({ 
    img = projectImg,
    title = 'Project Name',
    desc = 'Nguyen viet HungNguyen viet HungNguyen viet HunNguyen viet Hung Nguyen viet HungNguyen viet Hung'
}
) {
    return (
        <ProjectItemStyle>
            <Link to='project' className='projectItem__img'>
                <img src={img} alt="project img" />
            </Link>
            <div className="projectItem__infor">
                <Link to='#'> 
                <h3 className='projectItem__title'>
                    {title}
                </h3>
                </Link>
                <p className="projectItem__desc">
                    {desc}
                </p>
            </div>
        </ProjectItemStyle>
    )
}
