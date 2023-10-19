import '../components/CSS/Details.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useData } from '../components/partials/Data';
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams()
    const data = useData()
    const product = data.find((e) => e.id === Number(id));

    let randomRate = (Math.floor(Math.random() * 4) + 1) + Math.random();
    let rate = randomRate.toFixed(1)
    let random1 = Math.floor(Math.random() * 10000)
    let random2 = Math.floor(Math.random() * 1000)
    let random3 = Math.floor(Math.random() * 10000)

    return (
        <div className='detail-container mt-5'>
            <div className='product'>
                <Carousel className=''>
                    <Carousel.Item >
                        <img src={product.src} alt='' />
                    </Carousel.Item>
                </Carousel>
                <div className='product-detail'>
                    <strong className='text-dark fs-5 fw-semibold'>{product.brand} </strong>
                    <span className='text-dark fs-5'>{product.title}</span>
                    <div className='mt-3'>
                        <span className='me-2'>{rate}</span>
                        <div className='d-inline-flex'>
                            <span><img src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg" alt="" /></span>
                            <span><img src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg" alt="" /></span>
                            <span><img src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg" alt="" /></span>
                            <span><img src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-orange.svg" alt="" /></span>
                            <span><img src="https://cdn.dsmcdn.com/web/production/rating-and-review-small-star-grey.svg" alt="" /></span>
                        </div>
                        <div className='seperator'></div>
                        <span>  {random1} <span className='text-muted'>Değerlendirme</span></span>
                        <span>  <img className='camera-icon' src="https://cdn.dsmcdn.com/mobile/reviewrating/kamera-emoji6x.png" alt="" /></span>
                        <div className='seperator'></div>
                        <span> {random2} <span className='text-muted'>Soru & Cevap</span></span>
                        <div className='seperator'></div>
                        <svg viewBox="0 0 24 24" height="1.3rem" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="1.7280000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span className='ms-2'>{random3}<span className='text-muted'> Favori</span></span>
                        <div className='price mt-4'> {product.price}</div>
                        <hr />
                        <Button className='add-to-basket mt-5 bg-transparent' variant="primary">Sepete Ekle</Button>
                        <ul className='mt-5 px-0 content-descriptions-list'>
                            <li>
                                <span className='ellipse'></span>
                                Bu ürün {""} tarafından gönderilecektir.
                            </li>
                            <li>
                                <span className='ellipse'></span>
                                Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
                            </li>
                            <li>
                                <span className='ellipse'></span>
                                İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
                            </li>
                            <li>
                                <span className='ellipse'></span>
                                Bu üründen en fazla 49 adet sipariş verilebilir. 49 adedin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar. Belirlenen bu limit kurumsal siparişlerde geçerli olmayıp, kurumsal siparişler için farklı limitler belirlenebilmektedir.
                            </li>
                            <li>
                                <span className='ellipse'></span>
                                15 gün içinde ücretsiz iade. Detaylı bilgi için tıklayın.
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details