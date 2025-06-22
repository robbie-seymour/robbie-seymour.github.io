import React from 'react';

const LandingPage: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        textAlign: 'center',
        padding: '20px',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '2.5em',
        margin: '0',
    };

    const descriptionStyle: React.CSSProperties = {
        fontSize: '1.2em',
        color: '#666',
    };

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        padding: '10px 20px',
        marginTop: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    };

    const sectionStyle: React.CSSProperties = {
        marginTop: '40px',
        padding: '20px',
        borderTop: '1px solid #ccc',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Welcome to My Portfolio (WIP!)</h1>
            <p style={descriptionStyle}>I'm Robbie Seymour, a passionate developer.</p>
            <a href="#projects" style={buttonStyle}>View Projects</a>

            <div id="projects" style={sectionStyle}>
                <h2>Projects</h2>
                <p>Here are some of my recent projects:</p>
                <ul>
                    <li><strong>Project A:</strong> A web application for managing tasks.</li>
                    <li><strong>Project B:</strong> An e-commerce site built with React and Node.js.</li>
                    <li><strong>Project C:</strong> A mobile app for tracking fitness activities.</li>
                </ul>
            </div>

            <div id="skills" style={sectionStyle}>
                <h2>Skills</h2>
                <p>I have experience in the following technologies:</p>
                <ul>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Redux</li>
                    <li>Node.js / Express</li>
                    <li>HTML / CSS</li>
                    <li>Git / GitHub</li>
                </ul>
            </div>

            <div id="contact" style={sectionStyle}>
                <h2>Contact Me</h2>
                <p>If you'd like to get in touch, feel free to reach out!</p>
                <p>Email: <a href="mailto:robbie@example.com">robbie@example.com</a></p>
            </div>
        </div>
    );
};

export default LandingPage;
