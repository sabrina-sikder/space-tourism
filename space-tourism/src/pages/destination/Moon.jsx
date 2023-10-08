import moon from '../../assets/destination/image-moon.png'

export default function Moon(){
    return (
    <>
        <h2 className='destination-name up bf'>Moon</h2>
        <img className='destination-img' src={moon}/>
        <p className='destination-desc blue'>See our planet as you’ve never seen it before.
        A perfect relaxing trip away to help regain 
        perspective and come back refreshed. While you’re there, 
        take in some history by visiting the Luna 2 and Apollo 
        11 landing sites.</p>
        <hr/> 
        <div className='destination-stat'> 
            <div className='dist'>
                <h4 className='blue up'>avg. distance</h4>
                <h5 className='up bf'>384,400 km</h5>
            </div>
            <div className='time'>
                <h4 className='blue up'>est. travel time</h4>
                <h5 className='up bf'>3 days</h5>
            </div>
        </div>
    </>
    
    )
}