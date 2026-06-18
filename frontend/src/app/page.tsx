export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Using your custom Syne font and Amber color */}
      <h1 className="font-syne text-6xl font-bold text-portfolio-amber">
        Hello World
      </h1>
      
      {/* Using the default sans font (Geist) */}
      <p className="mt-4 text-xl text-muted-foreground">
        I am building a modern portfolio.
      </p>
    </main>
  );
}