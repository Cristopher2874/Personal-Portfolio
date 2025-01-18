import Link from 'next/link';

export default function Home() {
    const id = 2;

    return (
        <div>
            <h1>projects</h1>
            <h2>
                <Link href={`/projects/${id}`}>Product Id</Link>
            </h2>
            <Link href="/about" replace>To navigate directly to home</Link>
        </div>
    );
}

// dinamic route