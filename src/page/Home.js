import React from 'react'
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ServiceSection from "../Components/ServiceSection";
import ProjectsSection from "../Components/ProjectsSection";
export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectsSection />
        </div>
    )
}
