export default async function DocsCathAll({ params } : { 
    params: Promise<{ slug?: string[] }> 
}) {
    const url = (await params).slug || [];

    if(url.length === 0) {
        return <h1>Docs</h1>
    }else if(url.length === 1) {
        return <h1>Projects ids {url[0]}</h1>
    }else if(url.length === 2) {
        return <h1>Projects ids {url[0]} and detail {url[1]}</h1>
    }else{
        return <p>Not yet</p>
    }
}

//optional catch all route