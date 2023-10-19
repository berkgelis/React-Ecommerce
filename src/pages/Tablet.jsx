import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../components/CSS/Products.css'
import { useData } from '../components/partials/Data';

const Tablet = () => {

  const data = useData()

  return (
    <>
      <div className='row px-lg-5 mx-sm-5 mx-2 mt-3 product-container'>
        {data.map((e) => {
          if(e.id>=9 && e.id<=16)
          return (
            <Card className='product-card  mb-3 pb-2 overflow-hidden '>
              <Link to={`/detail/${e.id}`} className='text-decoration-none'>
                <Card.Img className='img pt-3' variant="top" src={e.src} />
                <Card.Body>
                  <Card.Title>
                    <strong className='text-dark fs-5 fw-semibold'>{e.brand}</strong>
                    <span className='text-dark fs-6'>{e.title}</span>
                    <h2 className='mt-2 fs-5 text-danger'>{e.price}</h2>
                  </Card.Title>
                </Card.Body>
                <Button className='w-100 cartbtn bg-transparent' variant="primary">Ürün Detayı</Button>
              </Link>
            </Card >
          )
        })}
      </div>
    </>
  )
}

export default Tablet