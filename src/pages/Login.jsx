import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../components/CSS/Login.css'

function Login() {
    return (
        <div className='accountContainer'>
            <div className='login-register'>
                <p className='text-center'>
                    <span className='fs-4'>Merhaba,</span><br />
                    <span>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</span>
                </p>
            </div>

            <Card className='Login m-auto mb-5'>
                <Card.Header className='px-0 pt-0'>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item className=' m-auto'>
                            <Nav.Link active className='text-center'>
                                <Link
                                    to={"/login"}
                                    className='text-decoration-none logincolor' >
                                    Giriş Yap
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='d-flex align-items-center justify-content-center'>
                            <Link to={"/register"} className='text-black d-flex align-items-center justify-content-center text-decoration-none w-100 h-100'>Üye Ol</Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body className='px-5'>
                    <Form.Label className='mt-3'>E-Posta</Form.Label>
                    <Form.Control type="text" />

                    <Form.Label className='mt-3'>Şifre</Form.Label>
                    <Form.Control type="password" />
                    <div className='mt-3 text-end'>
                        <Link to={"/"} className='text-muted' >Şifremi Unuttum</Link>
                    </div>
                    <div className='mt-4 pb-4 text-center '>
                        <Link to={"/"} className='loginbutton text-decoration-none text-light d-block w-100 py-2 rounded-1 fw-semibold' >GİRİŞ YAP</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;