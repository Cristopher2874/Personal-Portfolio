import React from 'react';

interface Project {
    name: string;
    image: string;
    description: string;
    codeLink: string;
    deployLink: string;
}

const projects: Project[] = [
    {
        name: 'Project One',
        image: '/path/to/image1.jpg',
        description: 'Description for project one.',
        codeLink: 'https://github.com/username/project-one',
        deployLink: 'https://project-one.com',
    },
    {
        name: 'Project Two',
        image: '/path/to/image2.jpg',
        description: 'Description for project two.',
        codeLink: 'https://github.com/username/project-two',
        deployLink: 'https://project-two.com',
    },
    // Add more projects as needed
];

const ProjectCard: React.FC<Project> = ({ name, image, description, codeLink, deployLink }) => (
    <div className="project-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">Live</a>
    </div>
);

export function ProjectSection(){
    return (
        <section className="project-section">
            <h2>Featured Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <button>View All Projects</button>
        </section>
    );
};