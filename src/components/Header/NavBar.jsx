import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Navbar expand="md" className="Navbar">
                <Container fluid className=' d-flex gap-5 px-0'>

                    <Link className='me-3' to={"/"}>
                        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                        <img className='logo' src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
                    </Link>

                    <Navbar.Collapse id="navbarScroll" className='d-md-inline d-none'>
                        <Form className="searchWrapper w-100 d-flex position-relative">
                            <Form.Control
                                placeholder="Aradığınız ürün, kategori veya marka yazınız"
                                className="searchİnput me-2"
                                aria-label="Search"
                            />
                            <img className='searchİcon position-absolute' src="data:image/svg+xml;charset=utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27%3E%3Cpath fill=%27%23F27A1A%27 d=%27M18.711 17.306l-4.684-4.703a7.49 7.49 0 0 0 1.864-4.932C15.891 3.441 12.327 0 7.946 0S0 3.441 0 7.671s3.565 7.671 7.946 7.671a8.056 8.056 0 0 0 4.552-1.388l4.72 4.74c.197.197.462.306.746.306.27 0 .525-.1.718-.28a.977.977 0 0 0 .03-1.414zM7.946 2.001c3.238 0 5.873 2.544 5.873 5.67 0 3.127-2.635 5.67-5.873 5.67-3.239 0-5.873-2.543-5.873-5.67 0-3.126 2.634-5.67 5.873-5.67z%27/%3E%3C/svg%3E" alt="" />
                        </Form>
                    </Navbar.Collapse>

                    <Nav className="accountNav d-flex flex-row gap-3" navbarScroll>
                        <Link className='text-decoration-none ms-2 d-flex gap-1 align-items-center' to={"/login"} onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                            <Link to={"/weqe"} className='d-md-inline d-none text-decoration-none'>
                                <Link to={"/login"} className='accountBtn py-2 text-decoration-none' ref={target} >
                                    Giriş Yap
                                </Link>
                                <div className='d-flex flex-column gap-5' >
                                    <Overlay target={target.current} show={show} placement="bottom">
                                        {(props) => (
                                            <Tooltip className='tooltipContainer' id="overlay-example" {...props}>
                                                <Link to={"/login"} className='login text-decoration-none'>Giriş Yap</Link>
                                                <Link to={"/register"} className='register text-decoration-none'>Üye Ol</Link>
                                            </Tooltip>
                                        )}
                                    </Overlay>
                                </div>
                            </Link>
                        </Link>

                        <Link className='text-decoration-none ms-2 d-flex gap-1 align-items-center' href="#action2">
                            <svg viewBox="0 0 24 24" height="1.3rem" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="1.7280000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className='d-md-inline d-none'>Favorilerim</span></Link>
                        <Link to={"/sepet"} className='text-decoration-none ms-2 d-flex gap-1 align-items-center' href="#">
                            <svg height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#0F0F0F"></path> </g></svg>
                            <span className='d-md-inline d-none'>Sepetim</span>
                            <Badge  className='badge rounded-circle d-md-flex d-none' text="light">3</Badge>
                        </Link>
                    </Nav>

                </Container>
            </Navbar>

            <div className='hiddenSearch'>
                <Navbar className='Navbar w-100 d-md-none'>
                    <Form className="searchWrapper w-100 d-flex position-relative">
                        <Form.Control
                            placeholder="Aradığınız ürün, kategori veya marka yazınız"
                            className="searchİnput me-2"
                            aria-label="Search"
                        />
                        <img className='searchİcon position-absolute' src="data:image/svg+xml;charset=utf8, %3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2718%27 height=%2718%27 viewBox=%270 0 18 18%27%3E%3Cpath fill=%27%23F27A1A%27 d=%27M18.711 17.306l-4.684-4.703a7.49 7.49 0 0 0 1.864-4.932C15.891 3.441 12.327 0 7.946 0S0 3.441 0 7.671s3.565 7.671 7.946 7.671a8.056 8.056 0 0 0 4.552-1.388l4.72 4.74c.197.197.462.306.746.306.27 0 .525-.1.718-.28a.977.977 0 0 0 .03-1.414zM7.946 2.001c3.238 0 5.873 2.544 5.873 5.67 0 3.127-2.635 5.67-5.873 5.67-3.239 0-5.873-2.543-5.873-5.67 0-3.126 2.634-5.67 5.873-5.67z%27/%3E%3C/svg%3E" alt="" />
                    </Form>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar