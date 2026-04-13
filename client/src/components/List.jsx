import React, { useState, useEffect } from 'react'

const List = () => {

    const [tunes, setTunes] = useState([])

    useEffect(() => {
        getTunes()
    }, [])

    const getTunes = async () => {
        try {
            let response = await fetch("http://localhost:3000/tunes")
            let tunes_json = await response.json()

            setTunes(tunes_json)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <h2>This is my list</h2>

            <section className="tunes">


                {
                    tunes.map(tune => (
                        <>
                        <section className='tune'>
                            <h5>{tune.tune}</h5>
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