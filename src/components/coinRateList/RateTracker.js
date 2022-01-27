import './RateTracker.css';
import axios from 'axios';
import  React, {useState, useEffect} from 'react';
import Coin from './Coin.js'


//отдельная страница с общим с курсом
function RateTracker() {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios
            .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            }).catch(error => console.log(error))
    },[] )

    const handlerChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text"> search a currency   </h1>
                <form>
                    <input type="text" placeholder="Search"
                           className="coin-input" onChange={handlerChange}/>
                </form>
            </div>
            {filteredCoins.map(coin =>{
                    return (

                        <Coin key={coin.id}
                              name = {coin.name}
                              price ={coin.current_price}
                              image={coin.image}
                              symbol={coin.symbol}
                              marketcap={coin.market_cap}
                              priceChange = {coin.price_change_percentage_24h}
                              volume={coin.total_volume}
                        />
                    )
                }
            )}

        </div>
    );
}

export default RateTracker;
//добавить валюты и сортировку по больше/меньше
//разбить 5 страниц по 50