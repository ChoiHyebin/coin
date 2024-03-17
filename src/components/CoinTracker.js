import { useState } from 'react';
import './CoinTracker.css'
import { Link } from 'react-router-dom';

const CoinTracker = ({
    coins,
    loading,
    selectCoinHandle,
    selectCoin,
    toFixedHandle
 })=>{
    
    return (
        <div className="cointracker-container">
             <h2> CoinTracker 총 { coins.length } 종</h2>
             <label htmlFor="coin_select"
                    style={ !loading ? { display :'block'} : { display: 'none'} }
             >데이터를 선택하세요.</label>
             {
                loading ? <strong>Loading ... </strong> : 
                <select id="coin_select"
                        onChange={ selectCoinHandle }
                >
                    <option value="null">코인을 선택하세요.</option>
                    {
                        coins.map((coin, index) => (
                            // <option key={coin.name}>{index + 1}. {coin.symbol}</option>
                            <option key={coin.name}>{coin.symbol}</option>
                        ))
                    }
                </select>
             }   
             {
                selectCoin && <div>
                    <ul>
                        <li><img src={`https://coinicons-api.vercel.app/api/icon/${selectCoin.symbol.toLowerCase()}`} alt="" /></li>
                        <li>{ selectCoin.name }</li>
                        <li>{ selectCoin.rank }</li>
                        <li>$ {toFixedHandle(selectCoin.quotes.USD.price)} USD</li>
                    </ul>
                </div>
             } 
        </div>
    )
}

export default CoinTracker;