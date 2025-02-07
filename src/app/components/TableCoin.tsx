"use client"

import Image from "next/image"
import chartUp from "../assets/chart-up.svg"
import chartDown from "../assets/chart-down.svg"

 
const TableCoin = ({coins}) => {
    console.log({coins})
  return (
    <div>
 
 <table>
    <thead>
        <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th>Sparkline</th>
        </tr>
    </thead>
    <tbody>
        {coins.map(coin=>
            <tr key={coin.id} >
                    <td>{coin.market_cap_rank}</td>
               <td>
              
           <div>

                  <img src={coin.image} alt={coin.name} width={100} height={100} />
                  <span>       {coin.symbol.toUpperCase()}    </span>
           </div>
            
                
                    </td>  
                    <td>{coin.name}</td>
                    <td>{coin.current_price.toLocaleString()}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>{coin.total_volume.toLocaleString()}</td>
                    <td><Image src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown } alt={coin.name}  /> </td>
                

            </tr>
            )}
    </tbody>
 </table>
    </div>
  )
}

export default TableCoin




