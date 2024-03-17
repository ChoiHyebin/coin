import { Link } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";
import Tabs from '../components/Tabs/Tabs';
import { useState, useEffect } from 'react';
import './Details.css'

const Details = ({selectCoin, toFixedHandle})=>{
    const [chartData, setChartData] = useState([])

    // const  mydata = [
    //     { name : 'html', value : 100 , value2 : 19},
    //     { name : 'css', value : 99 , value2 : 39},
    //     { name : 'jvascript', value : 88 , value2 : 94},
    //     { name : 'node', value : 77 , value2 : 50},
    // ]
    const selectChartHandle = ()=>{
        const data = [
            {
                name : '15m',
                value: selectCoin.quotes.USD.percent_change_15m
            },
            {
                name : '30m',
                value: selectCoin.quotes.USD.percent_change_30m
            },
            {
                name : '1h',
                value: selectCoin.quotes.USD.percent_change_1h
            },
            {
                name : '6h',
                value: selectCoin.quotes.USD.percent_change_6h
            },
            {
                name : '12h',
                value: selectCoin.quotes.USD.percent_change_12h
            },
            {
                name : '24h',
                value: selectCoin.quotes.USD.percent_change_24h
            },
            {
                name : '7d',
                value: selectCoin.quotes.USD.percent_change_7d
            },
            {
                name : '30d',
                value: selectCoin.quotes.USD.percent_change_30d
            }
        ]
        setChartData(data);
        console.log( chartData )
    }
    
    useEffect(()=>{
         selectChartHandle();
    }, [selectCoin])

    return(
        <div className="details-container">
            <div className='details-title-box'>
                <Link to="/"><MdArrowBackIos /></Link>
                <h2>{ selectCoin.name }</h2>
            </div>
            <div className='topBars'>
                 <div className="topBars-item">
                    <div className="topBars-title">RANK</div>
                    <div className="topBars-text">{ selectCoin.rank}</div>
                 </div>
                 <div className="topBars-item">
                    <div className="topBars-title">SYMBOL</div>
                    <div className="topBars-text">{ selectCoin.symbol}</div>
                 </div>
                 <div className="topBars-item">
                    <div className="topBars-title">PRICE</div>
                    <div className="topBars-text"> 
                     $ {toFixedHandle(selectCoin.quotes.USD.price)} USD 
                    </div>
                 </div>
            </div>
            
            <div className='description'>
                코인에 대한 설명 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur vero quas cum mollitia odit reiciendis autem blanditiis illo. Obcaecati, inventore quaerat? Soluta minima illum saepe iusto earum voluptas possimus!
            </div>

            <div className="middleBars">
                <div className="middleBars-item">
                    <div className="middleBars-title"> Total Suply </div>
                    <div className="middleBars-text"> {selectCoin.total_supply} </div>
                </div>
                <div className="middleBars-item">
                    <div className="middleBars-title"> Max Suply </div>
                    <div className="middleBars-text"> {selectCoin.max_supply} </div>
                </div>
            </div>
             

            <Tabs chartData={chartData}/>
        </div>
    )
}
export default Details;