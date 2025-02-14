import React, { useState } from 'react'

const Pagination = () => {
    const [page, setPage]=useState(1) 
    const previousHandler=()=>{
      if(page<=1)return;

        setPage(page=>page-1)
      
    }
    const nextHandler=()=>{
      if(page>=10)return;
      setPage(page=>page+1)
    }
  return (
    <div>
        <button onClick={previousHandler} className='bg-sky-500 p-2 m-1 rounded-lg' >Previous</button>
        <p className={page==1 ? "bg-red-500 p-2 m-1 rounded-lg inline-block" : " p-2 m-1 rounded-lg bg-inherit"} >1</p>
        <p className={page==2 ? "bg-red-500 p-2 m-1 rounded-lg inline-block" : " p-2 m-1 rounded-lg bg-inherit"}>2</p>
        {
          page>2 && page<9 && (
            <>
            <span className="bg-green-500 p-2 m-1 rounded-lg inline-block">...</span>
            <p className="bg-red-500 p-2 m-1 rounded-lg inline-block">{page}</p>
            </>
          )
        }
        <span className="bg-green-500 p-2 m-1 rounded-lg inline-block">...</span>
        <p className={page==9 ? "bg-red-500 p-2 m-1 rounded-lg inline-block" : " p-2 m-1 rounded-lg bg-inherit"}>9</p>
        <p className={page==10 ? "bg-red-500 p-2 m-1 rounded-lg inline-block" : " p-2 m-1 rounded-lg bg-inherit"}>10</p>
       
        <button onClick={nextHandler} className='bg-sky-500 p-2 m-1 rounded-lg' >Next</button>
    </div>
  )
}

export default Pagination