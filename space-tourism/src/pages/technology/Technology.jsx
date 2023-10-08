import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './tab-technology.css'


export default function Technology(){
    return(
        <div className="technology-container">
        <h2 className="page-title up"><span>03</span>Space launch 101</h2>
        <Tabs className="technology-tab">
            <TabList>
                <Tab>1</Tab>
                <Tab>2</Tab>
                <Tab>3</Tab>
            </TabList>

            <TabPanel className='panel' >
            <div className='technology-picture vehicle-img'>  
            </div>
            <div className='technology-detail'>
                <h3 className='up blue'>The terminology...</h3>
                <h4 className='up bf'>Lauch vehicle</h4>
                <p className='blue'>A launch vehicle or carrier rocket is
                   a rocket-propelled vehicle used to carry 
                   a payload from Earth's surface to space, 
                   usually to Earth orbit or beyond. Our WEB-X 
                   carrier rocket is the most powerful in operation. 
                   Standing 150 metres tall, it's quite an awe-inspiring 
                   sight on the launch pad!</p>
            </div>
            </TabPanel>
            <TabPanel className='panel'>
            <div className='technology-picture spaceport-img'>
            </div>
            <div className='technology-detail'>
            <h3 className='up blue'>The terminology...</h3>
                <h4 className='up bf'>Spaceport</h4>
                <p className='blue'>A spaceport or cosmodrome is a site for launching
                  (or receiving) spacecraft, by analogy to the seaport 
                  for ships or airport for aircraft. Based in the famous 
                  Cape Canaveral, our spaceport is ideally situated to take 
                  advantage of the Earth’s rotation for launch.</p>
            </div>
            </TabPanel>
            <TabPanel className='panel'>
            <div className='technology-picture capsule-img'> 
            </div>
            <div className='technology-detail'>
            <h3 className='up blue'>The terminology...</h3>
                <h4 className='up bf'>Space capsule</h4>
                <p className='blue'>A space capsule is an often-crewed spacecraft that 
                   uses a blunt-body reentry capsule to reenter the Earth's 
                   atmosphere without wings. Our capsule is where you'll spend 
                   your time during the flight. It includes a space gym, cinema, 
                   and plenty of other activities to keep you entertained.</p>
            </div>
            </TabPanel>
            
                
            
        </Tabs>

        </div>
    )
}