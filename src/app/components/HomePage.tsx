"use client"
import React, { useEffect, useState } from 'react'
import TableCoin from './TableCoin'
import { getCoinList } from '../services/cryptoApi'
import Pagination from "@/app/components/Pagination"
const HomePage = () => {
    const [coins, setCoins] = useState([])
    useEffect(()=>{
       const getData=async()=>{
        const res= await fetch(getCoinList())
        const json=await res.json()
        setCoins(json)
       } 
       getData()
    },[])
  return (
    <div>
      <Pagination />
        <TableCoin coins={coins} />
    </div>
  )
}

export default HomePage