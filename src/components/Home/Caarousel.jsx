import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'


const Caarousel = () => {
    return (
        <>
        <Carousel slide={false} fade className='Carousel mt-5'>
            <Carousel.Item className='carousel-item' class>
                <Link to={""} className='carousel-link'>
                    <img
                        className=" carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png" alt=""
                    />
                    <span>Sana Özel</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className=" carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png" alt=""
                    />
                    <span>Sen De Al!</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg" alt=""
                    />
                    <span>Apple</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/26/Widget_202307261451.png" alt=""
                    />
                    <span>Kredi Kartı</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/20/Widget_202307201111.png" alt=""
                    />
                    <span>Kurumsal</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/5/5/Widget_202305051022.png" alt=""
                    />
                    <span>Şanslı Çekiliş</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/8/22/Kredilercircle_202308221603.png" alt=""
                    />
                    <span>Krediler</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/8/15/Widget_202308151718.png" alt=""
                    />
                    <span>Siparişiniz Olsun</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" alt=""
                    />
                    <span>TrendyolMilla</span>
                </Link>
                <Link to={""} className='carousel-link'>
                    <img
                        className="carouselImg"
                        src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg" alt=""
                    />
                    <span>Pull & Bear</span>
                </Link>
            </Carousel.Item>
            {/* <Carousel.Item>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>
        <Link to={""} className='carousel-link'>
            <img
                className="carouselImg"
                src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg"
            />
            <span>Pull & Bear</span>
        </Link>

    </Carousel.Item> */}
        </Carousel>
        </>
    )
}

export default Caarousel