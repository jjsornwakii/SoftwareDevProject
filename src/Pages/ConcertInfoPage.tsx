import React from 'react';
import "../Components/CSS/ConcertInfoPage.css"
import Navbar from '../Components/Common/NavBar';
import Info from '../Components/Common/ConcertInfoPage/recipientBlock'

const ConcertInfoPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container" id="content">
                <div className="container" id="info">
                    <div className="column" id="concertInfo">
                        <div className="container" id="concertHeader">
                            <h2 id="concertName">TWICE 5TH WORLD TOUR READ TO BE IN BANGKOK</h2>
                            <h2 id="concertDate">23 กันยายน - 24 กันยายน 2566</h2>
                        </div>
                        <img id="concertPic" src="https://s3-alpha-sig.figma.com/img/8532/dda7/37e49f728557a86c04f6fc714af4e4bf?Expires=1695600000&Signature=qel2gECYwRJTFVlnHWJghWBRnUYt8rqcC7abVpCf3o8CWNuZm21ug86kEybXUN4qo1Krig8OycjWKQ~SnQCmzggCP3TAwBXH0GE~C1JXJbr5Pi7oG8k2rb6uOB3VajSCm2ZKppzxWjLp-DkfrutnXD7VWkNvycdqKbjFj2iFZW75IriZw2f~3WMsviXN8RK8IUfJQ2kgNnSMI38JZzPcPmTm0iuV97KpzFrf7e1ItDabOIU-rT0pPmFyQiXuLhwlKBSNIDGj0snTCYKkQL1VTdw-9kMgBOxWLBjg5-GL1r5fab7scoCeo4l6UcXbXZ8YvYfRdpw8nleCWDDkbcikWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                        </img>
                        <div className="container" id="ticketLine">
                            <h2 id="concertTicket">ขายบัตรวันที่ 16 มิถุนายน เวลา 10.00-22.00</h2>
                            <button type="button" id="btn1">GET TICKETS</button>
                        </div>
                        <div className="container" id="lineContainer">
                            <h2 id="text1">รายละเอียด</h2>
                            <hr></hr>
                        </div>
                        <div>
                            <p id="concertText">
                                วั้นพร้อมมั้ย ทไว้พร้อมล้าว! TWICE 5TH WORLD TOUR ‘READY TO BE’ IN BANGKOK วันที่ 23 - 24 ก.ย. อิมแพ็ค อารีน่า เมืองทองธานี
                            </p>
                            <p id="concertText">
                                รอบการแสดงวันที่ 24 กันยายน 2566 จำหน่ายบัตรทั่วไป ( 23 มิถุนายน 2566 เวลา 10.00 น. เป็นต้นไป) ที่ <a href="https://www.SafeTicket.com">www.SafeTicket.com</a> เท่านั้น และเปิดจำหน่ายครบทุกช่องทางวันที่ 24 มิถุนายน ตั้งแต่เวลา 10.00 น. เป็นต้นไป <br></br>
                                • ลูกค้า 1 ท่าน ซื้อบัตรได้ไม่เกิน 4 ใบ <br></br>
                                • การซื้อบัตรทางเว็บไซต์ในวันที่ 23 มิ.ย. 66 โปรดกดรอรับคิวซื้อบัตรได้ที่หน้าเว็บไซต์เวลา 9.00 น. และจำหน่ายบัตรเวลา 10.00 น. เป็นต้นไป
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container" id="recipientSelectBox">
                            <div className="container" id="recipientList">
                                <h2 id="recipientHeader">ผู้รับกดบัตร</h2>
                                <Info/>
                                <div className="container" id="person">
                                    <div className="left-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M14 2.625C7.72789 2.625 2.625 7.72789 2.625 14C2.625 20.2721 7.72789 25.375 14 25.375C20.2721 25.375 25.375 20.2721 25.375 14C25.375 7.72789 20.2721 2.625 14 2.625ZM11.2536 9.01359C11.9465 8.27914 12.9216 7.875 14 7.875C15.0784 7.875 16.0448 8.28188 16.7404 9.02016C17.4453 9.76828 17.7882 10.7734 17.7073 11.8541C17.5454 14 15.8829 15.75 14 15.75C12.1171 15.75 10.4513 14 10.2927 11.8535C10.2123 10.7641 10.5547 9.7557 11.2536 9.01359ZM14 23.625C12.7151 23.6258 11.4431 23.3687 10.2595 22.8687C9.07581 22.3688 8.00461 21.6362 7.10938 20.7145C7.6221 19.9833 8.2754 19.3617 9.03109 18.8858C10.4251 17.9922 12.1893 17.5 14 17.5C15.8107 17.5 17.5749 17.9922 18.9673 18.8858C19.7236 19.3614 20.3775 19.9831 20.8906 20.7145C19.9955 21.6363 18.9243 22.3689 17.7406 22.8689C16.5569 23.3689 15.2849 23.626 14 23.625Z" fill="black"/>
                                        </svg>
                                        <p>ใจดี ดีใจ</p>
                                    </div>
                                    <div className="right-content">
                                        <button type="button">จ้าง</button>
                                    </div>
                                </div>
                                <div className="container" id="person">
                                    <div className="left-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M14 2.625C7.72789 2.625 2.625 7.72789 2.625 14C2.625 20.2721 7.72789 25.375 14 25.375C20.2721 25.375 25.375 20.2721 25.375 14C25.375 7.72789 20.2721 2.625 14 2.625ZM11.2536 9.01359C11.9465 8.27914 12.9216 7.875 14 7.875C15.0784 7.875 16.0448 8.28188 16.7404 9.02016C17.4453 9.76828 17.7882 10.7734 17.7073 11.8541C17.5454 14 15.8829 15.75 14 15.75C12.1171 15.75 10.4513 14 10.2927 11.8535C10.2123 10.7641 10.5547 9.7557 11.2536 9.01359ZM14 23.625C12.7151 23.6258 11.4431 23.3687 10.2595 22.8687C9.07581 22.3688 8.00461 21.6362 7.10938 20.7145C7.6221 19.9833 8.2754 19.3617 9.03109 18.8858C10.4251 17.9922 12.1893 17.5 14 17.5C15.8107 17.5 17.5749 17.9922 18.9673 18.8858C19.7236 19.3614 20.3775 19.9831 20.8906 20.7145C19.9955 21.6363 18.9243 22.3689 17.7406 22.8689C16.5569 23.3689 15.2849 23.626 14 23.625Z" fill="black"/>
                                        </svg>
                                        <p>สมปอง ยองใย</p>
                                    </div>
                                    <div className="right-content">
                                        <button type="button">จ้าง</button>
                                    </div>
                                </div>
                                <div className="container" id="person">
                                    <div className="left-content">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                            <path d="M14 2.625C7.72789 2.625 2.625 7.72789 2.625 14C2.625 20.2721 7.72789 25.375 14 25.375C20.2721 25.375 25.375 20.2721 25.375 14C25.375 7.72789 20.2721 2.625 14 2.625ZM11.2536 9.01359C11.9465 8.27914 12.9216 7.875 14 7.875C15.0784 7.875 16.0448 8.28188 16.7404 9.02016C17.4453 9.76828 17.7882 10.7734 17.7073 11.8541C17.5454 14 15.8829 15.75 14 15.75C12.1171 15.75 10.4513 14 10.2927 11.8535C10.2123 10.7641 10.5547 9.7557 11.2536 9.01359ZM14 23.625C12.7151 23.6258 11.4431 23.3687 10.2595 22.8687C9.07581 22.3688 8.00461 21.6362 7.10938 20.7145C7.6221 19.9833 8.2754 19.3617 9.03109 18.8858C10.4251 17.9922 12.1893 17.5 14 17.5C15.8107 17.5 17.5749 17.9922 18.9673 18.8858C19.7236 19.3614 20.3775 19.9831 20.8906 20.7145C19.9955 21.6363 18.9243 22.3689 17.7406 22.8689C16.5569 23.3689 15.2849 23.626 14 23.625Z" fill="black"/>
                                        </svg>
                                        <p>รัศมี แขร</p>
                                    </div>
                                    <div className="right-content">
                                        <button type="button">จ้าง</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ConcertInfoPage;