import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Details from './routes/Details'
import CoinList from './routes/CoinList'
import Missing from './routes/Missing'
import LoginFrom from './routes/LoginFrom'
import Home from './routes/Home'
import Footer from './components/Footer'
import './App.css'
import { ThemeContext } from './contexts/ThemeContext';

const API_URL = 'https://api.coinpaprika.com/v1/tickers';

function App() {
  const [ coins, setCoins ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ selectCoin, setSelectCoin ] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);

  const coinAxios = async ()=>{
      try{
        const res = await axios.get(API_URL);
        // setCoins(res.data);
        setCoins(res.data.filter(coin=>coin.rank<=100));
        // 상위 rank 100번째까지 로드 
        setLoading(false)
        console.log(coins);
      }catch(err){
        console.log(err)
      }
  }

  const selectCoinHandle = (e)=>{
      console.log(e.target.value);
      const value = e.target.value;
      // const findCoin = coins.find( coin => coin.symbol === value );
      const findCoin = coins.find( coin => coin.symbol === value ? coin : "");
      setSelectCoin(findCoin);
      console.log('findCoin ', selectCoin );
      // symbol 데이터가 없는 경우는 표시 안됨 
  }
  const toFixedHandle = (price)=>{
      return price.toFixed(3);
      // 소수점이하 3자리까지 표현
  }

  useEffect(()=>{
    coinAxios();
  }, []);// 

  return (
    <BrowserRouter>
     <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/"  element={
                  <Home coins={coins} 
                        loading={ loading }
                        selectCoinHandle={ selectCoinHandle }
                        selectCoin={selectCoin}
                        toFixedHandle={toFixedHandle}
                  />} 
            />
            <Route path="/home"  element={
                   <Home coins={coins} 
                         loading={ loading }
                         selectCoinHandle={ selectCoinHandle}
                         selectCoin={selectCoin}
                         toFixedHandle={toFixedHandle}
                   />} 
            />
            <Route path="/login" element={<LoginFrom /> } />
            <Route path="/coinlist"  element={
                    <CoinList coins={coins} 
                        toFixedHandle={toFixedHandle}
                    />} 
            />
            <Route path="/details"  element={
                  <Details selectCoin={selectCoin} 
                          toFixedHandle={toFixedHandle}
                  />} 
            />
            <Route path="/*"  element={<Missing />} />
        </Routes>
        <Footer />
      </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
