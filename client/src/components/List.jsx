
import {useState, useEffect} from 'react'


async function getTunes() {
    let api_url = import.meta.env.VITE_API_URL
    let result = await fetch(`${api_url}/tunes`)
    result = await result.json()
    return result
}

async function getUrl(tune) {
    let api_url = import.meta.env.VITE_API_URL
    let result = await fetch(`${api_url}/music/${tune}`)
    result = await result.text()
    return result
}
 

function Tune({ tune }) {
    const [url, setUrl] = useState('')
    
    useEffect(() => {
        getUrl(tune.tune).then(link => {setUrl(link)})
    }, [])

    return (
        <a key={tune.id} href={url}>{tune.tune}</a>
    )
}


function List() {

    const [tunes, setTunes] = useState({})
    
    useEffect( () => { 
        getTunes().then(list => {
            setTunes(list)
        })
    }, [])

    

    return (
        <>
        { Object.values(tunes).map(tune => (

             <Tune tune={tune}/>
            
        ))}
        </>
    )
}


export default List