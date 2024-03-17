import CoinTracker from '../components/CoinTracker'
import './Home.css'
import Details from './Details';
function Home({
   coins,
   loading,
   selectCoinHandle,
   selectCoin,
   toFixedHandle
}) {
    return (
       <section className="home-container">
          <CoinTracker coins={coins} 
                        loading={ loading }
                        selectCoinHandle={ selectCoinHandle }
                        selectCoin={selectCoin}
                        toFixedHandle={toFixedHandle}
          />
          {/* 다양한 컴포넌트 배치
             슬라이더 탭
          */}
          {
             selectCoin &&  <Details selectCoin={selectCoin}
                                 toFixedHandle={toFixedHandle}
             />
          }
       </section>
    );
  }
  
  export default Home;
  