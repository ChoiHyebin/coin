import { useState } from 'react';
import './Tabs.css'
import BarChart from '../Charts/BarChart';
import LineChart from '../Charts/LineChart';

const Tab = ({chartData})=>{
    const [tabNum, setTabNum] = useState(1);

    return(
        <div className='tab-container'>
            <div id="tabs">
                <ul>
                    <li onClick={ ()=>{ setTabNum(1)} }
                        className={ tabNum === 1 ? "active" : ""}
                    >
                        <a href="#tabs-1">Nunc tincidunt</a>
                    </li>
                    <li onClick={ ()=>{ setTabNum(2)} }
                        className={ tabNum === 2 ? "active" : ""}
                    >
                        <a href="#tabs-2">Proin dolor</a>
                    </li>
                   
                </ul>
                <div id="tabs-1" 
                     className={ tabNum === 1 ? "tab-content  active" : "tab-content"}
                >
                    <BarChart chartData={chartData} />
                </div>
                <div id="tabs-2"
                    className={ tabNum === 2 ? "tab-content  active" : "tab-content"}
                >
                     <LineChart  chartData={chartData}/>
                </div>
            </div>
        </div>
    )
}

export default Tab;