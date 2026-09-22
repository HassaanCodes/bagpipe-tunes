
import {useState, useEffect} from 'react'

async function getTunes() {
    let api_url = import.meta.env.VITE_API_URL
    let result = await fetch(`${api_url}/tunes`)
    result = await result.json()
    return result
}


function List() {
    const [tunes, setTunes] = useState({})
    
    useEffect( () => { 
        getTunes().then(list => {
            setTunes(list)
        })
    }, [])

    if (Object.keys(tunes).length > 0) {
        console.log(tunes)
    }
    

    return (
        <>
        { Object.values(tunes).map(tune => (
            <a key={tune.id}>{tune.tune}</a>
        )) }
        </>
    )
}


export default List