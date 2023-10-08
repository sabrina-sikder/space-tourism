import mars from '../../assets/destination/image-mars.png'

export default function Mars(){
    return (
        <>
        <h2 className='destination-name up bf'>Mars</h2>
        <img className='destination-img' src={mars}/>
        <p className='destination-desc blue'> Don’t forget to pack your hiking boots.
            You’ll need them to tackle Olympus Mons,
            the tallest planetary mountain in our 
            solar system. It’s two and a half times
            the size of Everest! </p>
        <hr/>
        <div className='destination-stat'> 
            <div className='dist'>
                <h4 className='blue up'>avg. distance</h4>
                <h5 className='up bf'>225 mil. km</h5>
            </div>
            <div className='time'>
                <h4 className='blue up'>est. travel time</h4>
                <h5 className='up bf'>9 months</h5>
            </div>
        </div>
    </>
    )
}