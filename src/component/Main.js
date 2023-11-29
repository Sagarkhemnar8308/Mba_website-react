
import "./Main.css";
import Image from "../assets/images/back img.jpg"
import React, { useState } from "react";
import Popup from "./popup";

export function MAster() {
    return (
        <div>
            {/* <img className="Back" src={Image}/> */}
            <div className="Main">
                <h1 className="Master">MASTER OF BUSINESS<br /> ADMINISTRATION <br />(MBA)</h1>
                <p className="Admissions"><b>Admissions Open for 2023</b></p>

            </div>
        </div>
    );
}



export function Program() {
    return (
        <div>
            <div className="container-fluid">
                <div className="text-center row margin">
                    <div className="col-lg-12 p-0 m-0">
                        <p className="mit-wpu">MIT-WPU’s MBA Program</p>

                        <p className="para">Build the ideal leadership and management skills with an industry-ready degree!</p>
                        <hr className="horizontal"></hr>
                    </div>
                </div>
            </div>
        </div>

    );
}

export function Paragraph() {
    return (
        <div className="row paragraph container-fluid">
            <div className="col-lg-1 col-md-1 "></div>
            <div className="col-lg-10  col-md-10 text-center">

                <p className="para">MIT-WPU’s School of Business offers a 2-year intensive MBA programme with a variety of specializations like Human Resource, Finance, Marketing, Operations and more. The dynamic curriculum of the programme equips you with the managerial and business skills needed to excel in the competitive corporate world.</p>
                <p className="para">You get the best in the industry with MIT-WPU:</p>
                <p className="para">- Learn from acclaimed experts, renowned academicians, and established professionals from the industry</p>
                <p className="para">- Develop strategic thinking and entrepreneurial skills through an application-based approach</p>
                <p className="para">- Gain a holistic understanding of dynamic industry ecosystems</p>
                <p className="para">- Prepare to become a high-spirited and influential leader of tomorrow through industry exposure</p>
                <p className="para">Enroll for MIT-WPU’s School of Business MBA programme to gain the skills and knowledge needed to succeed in the competitive corporate world.</p>
            </div>

            <div className="col-lg-1 col-md-1"></div>
        </div>
    );
}

export function Package() {

    return (
        <div className="container-fluid">
            <div className="row color">
                <div className="col-lg-3 ">
                    <img className="w-100 h-100 d-none d-lg-block" src="./Girl.png"></img>
                </div>
                <div className="col-lg-6 text-center ">
                    <p className="Package mt-4">Top recruiters are waiting with attractive salary packages for skilled professionals like you!

                        Highest Salary Package: <b className="inr">INR 30 LPA </b> 1500+ companies for placements</p>
                </div>
            </div>
        </div>
    );
}

export function Specialization() {
    return (
        <div className="special-pad">
            <h1><b className="special ">Specializations</b></h1>
        </div>
    );
}

export function Business() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row marg ">
                <div className="col-lg-12 pt-2">
                    <div className=" ">
                        <p className="title"><b>MBA International Business</b></p>
                        <h5 className="global">MBA in International Business prepares students for working in a complex global business
                        <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                        {modal && <Popup handleClose={popupModal}
                            content={
                                <div>
                                    <h2 className="text-center"><b>MBA International Business</b></h2>
                                    <p className="mt-3 text-font">MBA Hospital Management
                                        MBA Hospital management program focuses on equipping
                                        students with the knowledge and skills required for the
                                        management in the healthcare sector. The program aims at
                                        adopting a holistic blend of academic knowledge and practical understanding of the field to create professionals
                                        adept at identifying practical problems and using contemporary management practices.</p>
                                </div>
                            }></Popup>}
                            </h5>
                        <div className="lines mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Marketing() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className="row  container-fluid">
                <div className="col-lg-11 ">
                    <div className="market">
                        <p className="title"><b>MBA Marketing</b></p>
                        <h5 className="global">MIT-WPU’s MBA in Marketing covers consumer behaviour, marketing research, advertising management, product…
                        <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                        {modal && <Popup handleClose={popupModal}
                            content={
                                <div>
                                    <h2 className="text-center"><b>MBA Marketing</b></h2>
                                    <p className="mt-3 text-font">MIT-WPU’s MBA in Marketing covers consumer behaviour, marketing research, advertising management, product & brand management, sustainable marketing, and marketing analytics, among others. Our experienced
                                        faculty uses innovative teaching methods and techniques to impart education in this wide range of courses.</p>
                                    <p className="mt-5 text-font">This course aims to equip the students with the knowledge, skills and outlook they need to outperform their competition in a marketing ecosystem. Besides the holistic curriculum covering every
                                        aspect of advanced marketing, the students also learn through real-life case studies and on-campus training.</p>
                                </div>
                            }></Popup>}
                           
                            </h5>
                            <div className="lines mt-3"></div>
                    </div>

                </div>
                 
            </div>
        </div>
    );
}

export function Finance() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-11 ">
                    <div className="market ">
                        <p className="title"><b>MBA Finance</b></p>
                        <h5 className="global">Higher-level executives working in finance need to possess the required management skills. These skills will help them…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Finance</b></h2>
                                        <p className="mt-3">Higher-level executives working in finance need to possess the required management skills.
                                            These skills will help them execute their responsibilities and tasks in the financial world.</p>

                                        <p className="mt-5 text-font">We want our students to have financial expertise, administrative capabilities, and the technical know-how to run a financial organisation smoothly.
                                            We have curated this program to increase the employability of the students.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Human() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-12 ">
                    <div className="marg">
                        <p className="title"><b>MBA Human Resource Management</b></p>
                        <h5 className="global">MIT-WPU’s MBA in HR Management is crafted to develop the critical…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Human Resource Management</b></h2>
                                        <p className="mt-5 text-font">MIT-WPU’s MBA in HR Management is crafted to develop the critical skills and knowledge base expected from an expert in HR management. HR professionals represent the link between employee management and business management, hence our degree course helps them build the required skills to become leaders, problem solvers, and promoters of change in the organisation. Whether in the public or private sector, graduates of this degree course will part with a unique talent to
                                            manage employees, acquire new talent, and enhance an organisations human capital.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-3"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export function Operations() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className="row  container-fluid">
                <div className="col-lg-12 ">
                    <div className="market">
                        <p className="title"><b>MBA Operations  Supply Chain Management</b></p>
                        <h5 className="global">In any field and company, effective operations…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Operations & Supply Chain Management</b></h2>
                                        <p className="mt-5 text-font">In any field and company, effective operations management is crucial to achieving the intended productivity. We train our students to understand the core tenets of operations management, general management, and other
                                            departments impact on the same. The amazing blend of great academic learning and industry-specific
                                            training modules prepares the students for all challenges faced in operations management.</p>
                                        <p className="mt-4">Our teachers help the students identify the key areas of implementation, integrate the right technologies, and build effective management capabilities. From managing time to optimising
                                            costs and mitigating risks, we train our students to build sustainable management practices.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Banking() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col-lg-11 ">
                    <div className=" market ">
                        <p className="title"><b>MBA Banking</b></p>
                        <h5 className="global">Higher-level executives working in finance need to possess the required management skills. These skills will help them…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Banking & Financial Services</b></h2>
                                        <p className="mt-5 text-font">The MBA BFS is a specially curated degree program aimed at helping students to identify critical issues in the financial system and use their managerial skills to build solutions. The students will learn to use analytical techniques, models, and frameworks to identify any business problem through the course.
                                            They will learn to integrate different business aspects and their overall effect on a particular decision.</p>
                                        <p className="mt-4">They will also learn to handle data effectively, decision-making, research and analytics as subjects.
                                            These subjects will help them make informed decisions in the business world.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Digital() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-12">
                    <div className="marg">
                        <p className="title"><b>MBA Digital Marketing</b></p>
                        <h5 className="global">The digital marketing industry is booming with opportunities we want our students to explore and capitalise…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Digital Marketing</b></h2>
                                        <p className="mt-5 text-font">The digital marketing industry is booming with opportunities we want our students to explore and capitalise on. MIT-WPU’s MBA in Digital Marketing program trains the students to deliver effective solutions in the wake of a growing digitisation trend in businesses.
                                            The program provides in-depth knowledge of digital marketing and its impact on business success.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Analytics() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className="row  container-fluid">
                <div className="col-lg-12">
                    <div className="market">
                        <p className="title"><b>MBA Business Analytics</b></p>
                        <h5 className="global">It’s no surprise that data will be everywhere and crucial to creating effective strategies to make data-driven decisions…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Business Analytics</b></h2>
                                        <p className="mt-5 text-font">It’s no surprise that data will be everywhere and crucial to creating effective strategies to make data-driven decisions. Our MBA in Business Analytics course takes you through the theoretical and practical approaches required to become business consultants and analysts. In these professional roles, you will further learn to take a
                                            holistic view of the technology and leverage the current data streams to create effective solutions.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function Agri() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-11">
                    <div className="market ">
                        <p className="title"><b>MBA Agri Business Management</b></p>
                        <h5 className="global">Agriculture is one of the most widely practised professions in India. With strategic growth…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Agri Business Management</b></h2>
                                        <p className="mt-5 text-font">Agriculture is one of the most widely practised professions in India. With strategic growth initiatives and plans, there is a huge potential for its growth, as well as
                                            the growth of related businesses like horticulture, apiculture (beekeeping), animal husbandry, and many more.</p>
                                        <p className="mt-3 text-font">The MBA in Agri Business Management at MIT-WPU equips the individuals in the management of agricultural businesses, including the management of the human resource,
                                            capital, technology, and facilities for identifying and implementing entrepreneurship in the sector.</p>
                                        <p className="mt-3 text-font">Graduates can find career opportunities as Agricultural Analysts, Agribusiness Office Assistants, Agribusiness Marketing Coordinators, Farm Managers, Farm Auditor, Agriculture Finance Banking, Agribusiness Food managers, Agricultural Analysts, Market Analyst,
                                            Crop Producer, Quality Controllers and can pursue further research in the field.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <div className="lines mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Dual() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h2 className="Dual Corporate"><b>MBA Dual Program</b></h2>
                <p className="Dual fs-5 pt-3">An MBA program with a dual specialization offers students the option of pursuing a post-graduation in two different specializations:</p>
                <div className="core ">
                    <ul className="Dual ">
                        <li className="">In the dual specialization, student can select any one from the 4 core specializations namely, Marketing, Finance, Operations & HR</li>
                        <li className="">As a 2nd specialization, student can select any one of the 4 specializations from below:</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function Hospital() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-11 ">
                    <div className="marg">
                        <p className="title"><b>MBA Hospital Management</b></p>
                        <h5 className="global">MBA Hospital management program focuses on equipping students with the knowledge…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Hospital Management</b></h2>
                                        <p className="mt-5 text-font">MBA Hospital management program focuses on equipping students with the knowledge and skills required for the management in the healthcare sector. The program aims
                                            at adopting a holistic blend of academic knowledge and practical understanding of the field to create professionals adept at identifying practical problems and using contemporary management practices.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <hr className="lines  mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Corporate() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row">
                <div className="col-lg-11">
                    <div className="market ">
                        <p className="title" ><b>MBA Corporate Social Responsibility</b></p>
                        <h5 className="global">Corporates are tasked with taking on welfare activities, and they need people at the managerial…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Corporate Social Responsibility</b></h2>
                                        <p className="mt-5 text-font">Corporates are tasked with taking on welfare activities, and they need people at the managerial level to take care of all their
                                            CSR activities. Our program prepares the students to build a promising career in CSR as they learn how to manage the departments and work with social startups, NGOs, and environmental firms.</p>
                                    </div>
                                }></Popup>}
                        </h5>
                        <hr className="lines mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Sports() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-11 ">
                    <div className="market ">
                        <p className="title"><b>MBA Sports Management</b></p>
                        <h5 className="global">A lot happens behind the scenes in a sports game, and the sports manager is tasked with taking…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Sports Management</b></h2>
                                        <h5 className="mt-5">A lot happens behind the scenes in a sports game, and the sports manager is tasked with taking care of everything.</h5>
                                        <h5 className="mt-3">We teach our students how to work with sports- business organisations. They learn the tricks and methods to tackle the dynamic sports environment and build a better management structure. Especially in India, the sports management industry is still at its nascent stage, and it needs intelligent managers to take the reins and build a better system. We have a special MIT-WPU
                                            Sports Management Program to provide modern-day education to the students in this regard.</h5>
                                    </div>
                                }></Popup>}
                        </h5>
                        <hr className="lines mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Innovation() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="conatiner-fluid">
            <div className="row ">
                <div className="col-lg-11 ">
                    <div className="marg">
                        <p className="title"><b>MBA Innovation Management</b></p>
                        <h5 className="global">Innovation is the key to building a sustainable and better future. The MBA Innovation Management…
                            <i onClick={popupModal} class="fa-solid fa-circle-chevron-right text-danger fs-2 icon"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div>
                                        <h2 className="text-center"><b>MBA Sports Management</b></h2>
                                        <h5 className="mt-5">Innovation is the key to building a sustainable and better future. The MBA Innovation Management course teaches students the core principles of innovation and entrepreneurship while cultivating the skills they need to shape new ideas and give life to
                                            new advancements. We train you to identify market opportunities and professionally hone risk-taking behaviour.</h5>
                                    </div>
                                }></Popup>}
                        </h5>
                        <hr className="lines" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Eligibility() {
    const [modal, setModal] = useState(false);
    const popupModal = () => {
        setModal(!modal)
    }
    return (
        <div className="container-fluid">
            <div className="Elgiblity-pad">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="criteria"><b>Eligibility Criteria</b></p>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="text-muted">Minimum 60% aggregate in Graduation in any stream from UGC approved Institution or…. </h5>
                        <h5 className="text-danger">Read More
                            <i onClick={popupModal} class="fa-solid fa-caret-down ml-2"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div className="text-dark">
                                        <h2 className="text-center"><b>Eligibility Criteria</b></h2>
                                        <h5 className="mt-5">It is a must for any candidate applying for MBA to submit a valid non-zero score in the following National Level Test
                                            conducted by an apex testing body: CAT 2022, XAT 2023, NMAT 2022, GMAT 2023, PERA 2023, MAH-CET 2023 & Sep MAT onwards.</h5>
                                        <h5 className="mt-4">The candidates will be evaluated for 100 Marks as per the breakup below:</h5>

                                        <h5 className="mt-4">
                                            <ul>
                                                <li className="pt-3">Minimum 60% aggregate in Graduation (3/4 Year Full-time Bachelor’s Degree) in any stream from UGC
                                                    approved Institution or equivalent (at least 55% marks, in case of Backward class category candidate belonging to Maharashtra State only)
                                                    AND</li>
                                                <li className="pt-3">Valid non-zero score in the following
                                                    National Level Test conducted by an apex testing body: CAT 2022, XAT 2023, NMAT 2022, GMAT 2023, PERA 2023, MAH-CET 2023 & Sep MAT 2022 onwards.</li>

                                            </ul>
                                        </h5>
                                    </div>
                                }></Popup>}
                        </h5>
                    </div>
                    <div className="col-lg-3">
                        <p className="criteria"><b>Selection  Criteria</b></p>
                    </div>

                    <div className="col-lg-3 ">
                        <h5 className="text-muted">It is a must for any candidate applying for MBA to submit a valid non-zero score in….</h5>
                        <h5 className="text-danger">Read More
                            <i onClick={popupModal} class="fa-solid fa-caret-down ml-2"></i>
                            {modal && <Popup handleClose={popupModal}
                                content={
                                    <div className="text-dark">
                                        <h2 className="text-center"><b>Selection Criteria</b></h2>
                                        <h5 className="mt-5">It is a must for any candidate applying for MBA to submit a valid non-zero score in the following National Level Test
                                            conducted by an apex testing body: CAT 2022, XAT 2023, NMAT 2022, GMAT 2023, PERA 2023, MAH-CET 2023 & Sep MAT onwards.</h5>
                                        <h5 className="mt-4">The candidates will be evaluated for 100 Marks as per the breakup below:</h5>

                                        <h5 className="mt-4">
                                            <ul>
                                                <li className="pt-3">Entrance Exam Score – 10%</li>
                                                <li className="pt-3">Group Discussion (GD) / Extempore – 25%</li>
                                                <li className="pt-3">Personal Interview (PI) – 25%</li>
                                                <li className="pt-3">Past Academic Record (SSC 10% and HSC 10%) – 20%</li>
                                                <li className="pt-3">Statement Of Purpose – 15%</li>
                                                <li className="pt-3">Work Experience – 5%</li>
                                            </ul>
                                        </h5>
                                    </div>
                                }></Popup>}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Placements() {
    return (
        <div className="container-fluid">
            <div className="placement">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="place">Placements & Recruiters</p>
                        <p className="for">100% placement assistance for<br /> all previous years</p>
                    </div>

                    <div className="col-lg-1 "></div>

                    <div className="col-lg-3 line_height">
                        <p className="pack text-danger">30 LPA</p>
                        <p className="High"><b>Highest Package</b></p>
                        <p className="pack text-danger">1500+</p>
                        <p className="High"><b>Recruiters</b></p>
                    </div>
                    <div className="col-lg-2 "></div>
                </div>
            </div>
        </div>
    );
}

export function Some() {
    return (
        <div className="row mtcontainer-fluid">
            <div className="col-8 text-center mx-auto"><p className="Some"><b>Some of Our Recruiters</b></p></div>
        </div>
    );
}

export function Controls() {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mt-5 container-fluid">

                        <div className="col-lg-4 d-inline-flex">
                            <img src="../Zomato.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Yes_Bank.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Vodafone.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Silicon_Labs.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Reliance.png" class="d-block w-50 ml-4" alt="..." />

                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row mt-5 container-fluid">

                        <div className="col-lg-4 d-inline-flex">
                            <img src="../Federal-Bank.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../fujitsu.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../HDFC-Bank.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../hitachi.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Infosys.png" class="d-block w-50 ml-4" alt="..." />
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="row mt-5 container-fluid">

                        <div className="col-lg-4 d-inline-flex">

                            <img src="../Mercedes-Benz.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Deloitt.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Byjus.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Coca-Cola.png" class="d-block w-50 ml-4" alt="..." />

                            <img src="../Zomato.png" class="d-block w-50 ml-4" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export function Star() {
    return (
        <div>
            <div id="carouselExampleCaptions22" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions22" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions22" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions22" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row'>

                            <div className='col-sm-12 col-md-4  col-lg-4 text-center'>
                                <img src="./star1.png" className="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( NIRF 2017,Ministry of HRD, Govt. of India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4>47th in India</h4>
                                <h5 className="text-danger">( NIRF 2017, Ministry of HRD, Govt. of India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( 35 all over India )</h5>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='row'>
                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( NIRF 2017, Ministry of HRD, Govt. of India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( 35 all over India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>IMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( 35 all over India )</h5>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='row'>
                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( NIRF 2017, Ministry of HRD, Govt. of India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" class="d-block w-0" alt="..." />
                                <h4><b>47th in India</b></h4>
                                <h5 className="text-danger">( NIRF 2017, Ministry of HRD, Govt. of India )</h5>
                            </div>

                            <div className='col-sm-12 col-md-4 col-lg-4 text-center'>
                                <img src="./star1.png" className="d-block w-0" alt="..." />
                                <h4><b>TIMES Ranking 2021</b></h4>
                                <h5 className="text-danger">( 35 all over India )</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions22" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions22" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Fees() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 ">
                    <div className="Fees">
                        <h1 className=" fees-font"><b>Fees & Scholarships</b></h1>

                        <h5 className="Fees pt-5">Merit scholarships are proposed to reward and motivate the meritorious students with financial assistance based on their academic performance, the performance in proposed National level/State Level entrance.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TotalFee() {
    return (
        <div className="height">
            <div >
                <p className="four"><b>INR</b></p>
                <b className="four">4,50,000</b><b className="year">Total Fee <br />per year</b>
            </div>
            <h4 className="text-danger pt-2"><b>MBA Dual Specialization<br /> INR 6,00,000 ( Per Year )</b></h4>
            <button type="submit" className="but text-white"><b>CONTACT US</b></button>

        </div>
    );
}




