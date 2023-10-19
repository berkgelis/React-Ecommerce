import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../components/CSS/Login.css'


function Register() {
    return (
        <div className='accountContainer'>
            <div className='login-register'>
                <p className='text-center'>
                    <span className='fs-4'>Merhaba,</span><br />
                    <span>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</span>
                </p>
            </div>

            <Card className='Login m-auto'>
                <Card.Header className='px-0 pt-0'>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item className=' m-auto '>
                            <Nav.Link className='text-center py-0 h-100'>
                                <Link
                                    to={"/login"}
                                    className='py-2 px-5 text-decoration-none text-black text-black d-flex align-items-center justify-content-center text-decoration-none w-100 h-100 ' >
                                    Giriş Yap
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='text-center'>
                            <Nav.Link active to={"/register"} className='logincolor'>Üye Ol</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body className='px-5'>
                    <Form.Label className='mt-3'>E-Posta</Form.Label>
                    <Form.Control type="text" />

                    <Form.Label className='mt-3'>Şifre</Form.Label>
                    <Form.Control type="password" />
                    <Form.Text id="passwordHelpBlock" muted>
                       Şifreniz <strong>en az 7 karakter</strong> ve <strong>en fazla 64 karakter</strong> olmalı, harf ve rakam içermelidir.
                    </Form.Text>
                    <div className='mt-4 pb-4 text-center '>
                        <Link to={"/"} className='loginbutton text-decoration-none text-light d-block w-100 py-2 rounded-1 fw-semibold' >ÜYE OL</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;