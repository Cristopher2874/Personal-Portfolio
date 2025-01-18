import { notFound } from 'next/navigation';

export default async function ProjectDetailsNested({ params } : { 
    params: Promise<{  
        projectsId: string; 
        detailsId: string 
    }> 
}) {
    const product = (await params).projectsId
    const detail = (await params).detailsId

    if(parseInt(product)>10){
        return notFound();
    }

    return <h1>Projects ids {product} and detail {detail}</h1>
}