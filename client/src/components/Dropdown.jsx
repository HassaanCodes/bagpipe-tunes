import '../App.css'


function Dropdown() {
    
    return (
        <>
            <section className='list'>
                <button className='btn' id='btn' onClick={toggleDropdown}>Select Tune</button>
                <div className='dropdown hide' id='dropdown'>
                    <a>Scotland the Brave</a>
                    <a>Greenwood Side</a>
                    <a>Irish Traditional Reel</a>
                    <a>Atholl Highlanders</a>
                </div>
            </section>
        </>
    )
}


function toggleDropdown(e) {
    if (e) {
        e.stopPropagation()
    }
    
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show')
}


document.documentElement.addEventListener('click', function() {

    let dropdown = document.getElementById('dropdown')

    if (dropdown) {

        if (dropdown.classList.contains('show')) {
            toggleDropdown()
        }
    }
})

export default Dropdown;