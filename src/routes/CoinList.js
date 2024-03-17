import './CoinList.css';
import Pagenation from '../components/Pagenation'
import { useState } from 'react';

/*
    총개수 : 100 
    페이지 개수 : 100 / 40 
*/


const CoinList = ({coins, toFixedHandle})=>{
    const [ postsPerPage, setPostPerPage ] = useState(20);
    // 한 화면에 보여질 개수
    const [ currentPage, setCurrentPage ] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    // 현재 화면에 뿌려질 코인의 마지막 번호(개수)
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // 현재 화면에 보여질 코인의 시작 번호
    const currentCoins = coins.slice(indexOfFirstPost,  indexOfLastPost);
    // 시작 번호, 끝번호 잘린 코인들
    // 0 ~ 19 
    // 1 ~ 20

    return(
    <section  className='coinlist-container'>
            {
            currentCoins.map(coin=>(
                <div className="coin-box">
                    <img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
                    <span>
                            {coin.symbol}
                    </span>
                     
                     <span>
                     {coin.quotes.USD.price}
                     </span>
                    <p>$ {toFixedHandle(coin.quotes.USD.price)} USD</p>
                </div>
            ))
            }
            <Pagenation postsPerPage={postsPerPage} 
                        currentPage={currentPage}
                        setCurrentPage={ setCurrentPage}
                        totalPosts={coins.length}
            />
    </section>
    )
}
export default CoinList;