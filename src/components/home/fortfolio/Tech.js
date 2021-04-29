import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../assets/scss/portfolio.scss'

export default function Content() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    //play / pause button toggle
    const [push, setPush] = useState(true)

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);

    const handlePush = () => {
        setSlider1(slider1.slickPause())
        setPush(false)
    }
    const handlePlay = () => {
        setSlider1(slider1.slickPlay())
        setPush(true)
    }

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        autoplay: true,
    };

    const settingsThumbs = {
        slidesToShow: 9,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        swipeToSlide: false,
        focusOnSelect: true,
    };

    const slidesData = [
        {
            id: 1,
            imgUrl: '/assets/img/media/media-white.png',
            title: 'repellendus id ullam',
            label: 'Dolorem officiis temporibus.',
            imgAlt: 'first'
        }, 
        {
            id: 2,
            imgUrl: '/assets/img/media/media-black.png',
            title: 'excepturi consequatur est',
            label: 'Officia non provident dolor esse et neque.',
            imgAlt: 'second'
        }, 
        {
            id: 3,
            imgUrl: '/assets/img/media/media-white.png',
            title: 'eius doloribus blanditiis',
            label: 'Ut recusandae vel vitae molestiae id soluta.',
            imgAlt: 'third'
        }, 
        {
            id: 4,
            imgUrl: '/assets/img/media/media-black.png',
            title: 'nihil voluptates delectus',
            label: 'Qui vel consequatur recusandae illo repellendus.',
            imgAlt: 'fouth'
        }, 
        {
            id: 5,
            imgUrl: '/assets/img/media/media-white.png',
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.',
            imgAlt: 'fifth'
        }, 
        {
            id: 6,
            imgUrl: '/assets/img/media/media-black.png',
            title: 'dolorem quibusdam quasi',
            label: 'Adipisci officiis repudiandae.',
            imgAlt: 'sixth'
        },
        {
            id: 7,
            imgUrl: '/assets/img/media/media-white.png',
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.',
            imgAlt: 'fifth'
        }, 
        {
            id: 8,
            imgUrl: '/assets/img/media/media-black.png',
            title: 'dolorem quibusdam quasi',
            label: 'Adipisci officiis repudiandae.',
            imgAlt: 'sixth'
        },
        {
            id: 9,
            imgUrl: '/assets/img/media/media-white.png',
            title: 'nemo dolorem necessitatibus',
            label: 'Placeat odit velit itaque voluptatem.',
            imgAlt: 'fifth'
        },
    ];

    return (
        <>
            <section className="profile-content-section">
                <Container fluid className="px-0">
                    <Row noGutters>
                        <Col md={9}>
                            <div className="profile-content-inner">
                                <div className="profile-right-box">
                                    <div className="slick-slider-wrapper">

                                        <SlickSlider
                                            {...settingsMain}
                                            asNavFor={nav2}
                                            ref={slider => (setSlider1(slider))}
                                        >
                                            {slidesData.map((slide) =>
                                                <div className="slick-slide" key={slide.id}>
                                                    <img className="slick-slide-image" src={slide.imgUrl} alt={slide.imgAlt} />
                                                    <div className="web-visit-box">
                                                        <a href="#demo">
                                                            visit website
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-white.svg'} alt="angle-right-white" />
                                                        </a>
                                                    </div>
                                                    
                                                </div>

                                            )}

                                        </SlickSlider>
                                        <div className="slick-thumbnail-wrapper">
                                            <SlickSlider
                                                {...settingsThumbs}
                                                asNavFor={nav1}
                                                ref={slider => (setSlider2(slider))}>
                                                {slidesData.map((slide) =>
                                                    <div className="slick-slide" key={slide.id}>
                                                        <img className="slick-slide-image" src={slide.imgUrl} alt={slide.imgAlt} />
                                                    </div>
                                                )}

                                            </SlickSlider>
                                        </div>
                                        <div className="play-push-box">
                                            {
                                                push ?
                                                    <Button onClick={handlePush} variant="none" className="ps-btn push">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/push.svg'} alt="btn-push" />
                                                    </Button>
                                                    :
                                                    <Button onClick={handlePlay} className="ps-btn play">
                                                        <img src={process.env.PUBLIC_URL + '/assets/img/right-arrow.svg'} alt="btn-push" />
                                                    </Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="profile-content-inner">
                                <div className="profile-left-box pl-5">
                                    <div className="profile-left-contet">
                                        <h3>Techonological Solutions</h3>
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/ui-us.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>UI/UX Design</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/websites.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Websites</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/mobile-app.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Mobile Apps</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/software.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Corporate Software</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="full-profile">
                                        <a href="#demo">
                                            full profile
                                            <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-black.svg'} alt="angle-right-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
