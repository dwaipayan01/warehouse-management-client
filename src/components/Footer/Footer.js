import React from 'react';
import logo from "../../images/Banner/dj1.webp"
import "./Footer.css";
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';



const Footer = () => {
    return (
        <div className='footer-area mt-5'>
            <div className="row">
                <div className="col-lg-3 col-12 col-md-4">
                    <img className="mt-5 ms-3 mb-4" style={{ height: "40px" }} src={logo} alt="" />
                    <div className='ms-3 footer-middle-area'>
                        <p><AiOutlineHome /> No:50 Dariyapara road,Sylhet</p>
                        <p><IoMdCall /> 0179729385</p>
                        <p><FiMail /> joy@gmail.com</p>
                        <><BsFacebook /> <FiInstagram /></>
                    </div>

                </div>
                <div className="col-lg-3 col-12 col-md-4">
                    <h5 className="mt-5 ms-3 mb-4 text-white">Help</h5>
                    <div className='ms-3 footer-middle-area'>
                        <p><IoIosArrowForward /> Search</p>
                        <p><IoIosArrowForward /> Help</p>
                        <p><IoIosArrowForward /> Information</p>
                        <p><IoIosArrowForward /> Privacy Policy</p>
                        <p><IoIosArrowForward /> Shipping Information</p>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-md-4">
                    <h5 className="mt-5 ms-3 mb-4 text-white">Support</h5>
                    <div className='ms-3 footer-middle-area'>
                        <p><IoIosArrowForward /> Contact</p>
                        <p><IoIosArrowForward /> About Us</p>
                        <p><IoIosArrowForward /> Carrers</p>
                        <p><IoIosArrowForward /> Refund & Returns</p>
                        <p><IoIosArrowForward /> Deliveries</p>
                    </div>
                </div>
                <div className="col-lg-3 col-12 col-md-4">
                    <h5 className="mt-5 ms-3 mb-4 text-white">Information</h5>
                    <div className='ms-3 footer-middle-area'>
                        <p><IoIosArrowForward /> Search Terms</p>
                        <p><IoIosArrowForward /> Advanced Search</p>
                        <p><IoIosArrowForward /> Helps & Faqs</p>
                        <p><IoIosArrowForward /> Store Location</p>
                        <p><IoIosArrowForward /> Orders & Returns</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;