export default async function ProjectDetails({ params } : { 
    params: Promise<{ projectsId: string }> 
}) {
    const id = (await params).projectsId
    return <h1>Projects ids {id}</h1>
}