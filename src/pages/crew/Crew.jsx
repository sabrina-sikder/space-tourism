
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './tab-crew.css'
import commander from '../../assets/crew/image-douglas-hurley.png'
import specialist from '../../assets/crew/image-mark-shuttleworth.png'
import pilot from '../../assets/crew/image-victor-glover.png'
import engineer from '../../assets/crew/image-anousheh-ansari.png'

export default function Crew(){
    return(
        <div className="crew-container">
        <h2 className='page-title up'><span>02</span>Meet your crew</h2>
        <Tabs>
            <div className="tab-container">  
                <TabList>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                    <Tab></Tab>
                </TabList>
                
                <TabPanel className="tab-panel">
                    <div className='picture'>
                        <img src={commander} alt='Photo of Douglas Hurler'/>
                    </div>
                    <div className='crew-detail'>
                        <h3 className='up bf'>Commander</h3>
                        <h4 className='up bf'>Douglas Hurley</h4>
                        <p className='blue'>Douglas Gerald Hurley is an American 
                            engineer, former Marine Corps pilot
                            and former NASA astronaut. He launched
                            into space for the third time as 
                            commander of Crew Dragon Demo-2.</p>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel">
                    <div className='picture'>
                        <img src={specialist} alt='Photo of Mark Shuttleworth'/>
                    </div>
                    <div className='crew-detail'>
                        <h3 className='up bf'>Mission specialist</h3>
                        <h4 className='up bf'>Mark Shuttleworth</h4>
                        <p className='blue'>Mark Richard Shuttleworth is the founder 
                        and CEO of Canonical, the company behind 
                        the Linux-based Ubuntu operating system. 
                        Shuttleworth became the first South African 
                        to travel to space as a space tourist.</p>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel">
                    <div className='picture'>
                        <img src={pilot} alt='Photo of Victor Glover'/>
                    </div>
                    <div className='crew-detail'>
                        <h3 className='up bf'>Pilot</h3>
                        <h4 className='up bf'>Victor Glover</h4>
                        <p className='blue'>Pilot on the first operational flight 
                        of the SpaceX Crew Dragon to the 
                        International Space Station. Glover 
                        is a commander in the U.S. Navy where 
                        he pilots an F/A-18.He was a crew member 
                        of Expedition 64, and served as a station
                        systems flight engineer. </p>
                    </div>
                </TabPanel>
                <TabPanel className="tab-panel">
                    <div className='picture'>
                        <img src={engineer} alt='Photo of Anousheh Ansari'/>
                    </div>
                    <div className='crew-detail'>
                        <h3 className='up bf'>Flight engineer</h3>
                        <h4 className='up bf'>Anousheh Ansari</h4>
                        <p className='blue'>Anousheh Ansari is an Iranian American 
                        engineer and co-founder of Prodea Systems. 
                        Ansari was the fourth self-funded space 
                        tourist, the first self-funded woman to 
                        fly to the ISS, and the first Iranian in 
                        space. </p>
                    </div>
                </TabPanel>
                </div>
            </Tabs>
        </div>
    )        
}