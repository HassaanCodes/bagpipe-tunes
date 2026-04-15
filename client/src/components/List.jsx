import React, { useState, useEffect } from 'react'

const List = () => {

    const [tunes, setTunes] = useState([])

    useEffect(() => {
        getTunes()
    }, [])

    const getTunes = async () => {
        try {
            let API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"
            let response = await fetch(`${API_URL}/tunes`)
            let tunes_json = await response.json()

            setTunes(tunes_json)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <h2>Here you will find some bagpipe tunes along with their music sheets</h2>
            <h2>Happy Piping!</h2>

            <section className="tunes">


                {
                    tunes.map(tune => (
                        <>
                        <section className='tune'>
                            <h5><a href={tune.url}>{tune.tune}</a></h5>
                            <h5>{tune.sheet}</h5>
                        </section>
                        </>
                    ))
                }

            </section>
        </>
    )
}

export default List