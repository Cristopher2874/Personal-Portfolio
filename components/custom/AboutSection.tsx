import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function AboutSection() {
    return (
        <section className="flex flex-row items-center space-y-4 bg-black bg-opacity-30 rounded w-full p-4">
            <Avatar>
                <AvatarImage>
                    <img src="/path/to/your/image.jpg" alt="Your Name" style={{ width: '150px', borderRadius: '50%' }} />
                </AvatarImage>
            </Avatar>
            <div className="flex flex-col space-y-2">
                <h1>About Me</h1>
                <p>
                    Passionate mechatronics student focused on software development, web development and personal growth.
                </p>
                <p>
                    During my free time I like to create my own projects, play the guitar and learn new things.
                </p>
                <p>
                    Want to know more?
                </p>
                <div className="flex flex-row space-x-4">
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
            </div>
        </section>
    );
}