import titan from '../../assets/destination/image-titan.png'

export default function Titan(){
    return (
        <>
        <h2 className='destination-name up bf'>Titan</h2>
        <img  className='destination-img' src={titan}/>
        <p className='destination-desc blue'> The only moon known to have a dense 
            atmosphere other than Earth, Titan
            is a home away from home 
            (just a few hundred degrees colder!).
            As a bonus, you get striking views 
            of the Rings of Saturn. </p>
        <hr/>
        <div className='destination-stat'>  
            <div className='dist'>
                <h4 className='blue up'>avg. distance</h4>
                <h5 className='up bf'>1.6 bil. km</h5>
            </div>
            <div className='time'>
                <h4 className='blue up'>est. travel time</h4>
                <h5 className='up bf'>7 years</h5>
            </div>	
        </div>
    </>
    )
}