export const metadata = {
    title: "Projects",
    description: "My personal projects",
}

export default function ProjectLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return(
        <div>
            {children}
            <h1>Inner layout</h1>
        </div>
    );
}