import React from 'react'
import { Link } from 'react-router-dom';

const HeaderTop = () => {
    return (
        <div className=' headertop d-flex gap-3 justify-content-end '>
            <Link className='text-decoration-none ' to={"/İndirim-Kuponlarım"}>İndirim Kuponlarım</Link>
            <Link className='text-decoration-none ' to={"/Trendyolda-Satış-Yap"}>Trendyol'da Satış Yap</Link>
            <Link className='text-decoration-none ' to={"/Hakkımızda"}>Hakkımızda</Link>
            <Link className='text-decoration-none ' to={"/Yardım-Destek"}>Yardım & Destek</Link>
        </div>
    )
}

export default HeaderTop