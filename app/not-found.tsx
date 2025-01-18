export default function NotFound(){
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/">Go back to Home</a>
        </div>
    );
};