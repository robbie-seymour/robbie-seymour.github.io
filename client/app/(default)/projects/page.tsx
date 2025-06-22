import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'Description of project one.',
        link: 'https://github.com/user/project-one',
    },
    {
        title: 'Project Two',
        description: 'Description of project two.',
        link: 'https://github.com/user/project-two',
    },
    {
        title: 'Project Three',
        description: 'Description of project three.',
        link: 'https://github.com/user/project-three',
    },
];

const LandingPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>My Git Projects</h1>
            <p>Welcome to my portfolio of Git projects. Check them out below!</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '300px' }}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;