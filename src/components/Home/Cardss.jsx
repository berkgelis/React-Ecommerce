import { Link } from 'react-router-dom'

const Cardss = () => {
    return (
        <div className='mt-4 card-container'>
            <Link to={"/tablet"} className='card'>
                <img src="https://cdn.dsmcdn.com/ty766/pimWidgetApi/mobile_20230307130442_2298880ElektronikMobile2023030714021.jpg" alt='' />
                <span>Tabletlerde Ayın Fırsatları...</span>
            </Link>
            <Link to={"/petshop"} className='card'>
                <img src="https://cdn.dsmcdn.com/ty877/pimWidgetApi/mobile_20230511063107_2317172SupermarketMobile202305101602.jpg" alt='' />
                <span>Petshopta Son Günlerin En...</span>
            </Link>
            <Link to={"/watch"} className='card'>
                <img src="https://cdn.dsmcdn.com/ty1006/pimWidgetApi/mobile_20230926134049_2337133ElektronikMobile202309261602.jpg" alt='' />
                <span>Akıllı Saatler</span>
            </Link>
        </div>
    )
}

export default Cardss