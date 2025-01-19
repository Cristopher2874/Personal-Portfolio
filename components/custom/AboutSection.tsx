export function AboutSection() {
    return (
        <section>
            <h1>About Me</h1>
            <img src="/path/to/your/image.jpg" alt="Your Name" style={{ width: '150px', borderRadius: '50%' }} />
            <p>
                Hello! I'm a passionate software developer with a love for creating dynamic and user-friendly web applications. 
                With a strong background in JavaScript, TypeScript, and React, I enjoy solving complex problems and continuously 
                learning new technologies to improve my skills.
            </p>
            <p>
                In my free time, I enjoy contributing to open-source projects, exploring new programming languages, and staying 
                up-to-date with the latest industry trends. When I'm not coding, you can find me hiking, reading, or spending 
                time with family and friends.
            </p>
            <p>
                Feel free to browse through my portfolio to see some of the projects I've worked on. If you'd like to get in touch, 
                please don't hesitate to contact me!
            </p>
            <div>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <button>GitHub</button>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <button>LinkedIn</button>
                </a>
                <a href="/path/to/your/cv.pdf" download>
                    <button>Download CV</button>
                </a>
            </div>
        </section>
    );
}