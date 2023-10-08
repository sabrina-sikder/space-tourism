import europa from '../../assets/destination/image-europa.png'

export default function Europa(){
    return (
        <>
        <h2 className='destination-name up bf'>Europa</h2>
        <img className='destination-img' src={europa}/>
        <p className='destination-desc blue'>The smallest of the four Galilean
           moons orbiting Jupiter, Europa 
           is a winter lover’s dream. With 
           an icy surface, it’s perfect 
           for a bit of ice skating, 
           curling, hockey, or simple 
           relaxation in your snug wintery 
           cabin.</p>
        <hr/> 
        <div className='destination-stat'> 
            <div className='dist'>
                <h4 className='blue up'>avg. distance</h4>
                <h5 className='up bf'>628 mil. km</h5>
            </div>
            <div className='time'>
                <h4 className='blue up'>est. travel time</h4>
                <h5 className='up bf'>3 years</h5>
            </div> 
        </div>
    </>
    )
}