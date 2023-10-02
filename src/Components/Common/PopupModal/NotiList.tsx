import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { PayingModal } from './PayingModal';


import { GetHiringByBuyerId } from '../../../Pages/Interface'; 
import axios, { AxiosResponse } from 'axios';
import { dbURL } from '../../../DB';
import { UserID, Username } from '../NavBar';


const hookupUrl = "https://cors-anywhere.herokuapp.com/"

const NotiList: React.FC = () => {


   {/* User */ }
   const [isAcceptNoti, setisAcceptNoti] = useState(true);
   const [isdeclineNoti, setisdeclineNoti] = useState(false);
   const [isGotticket, setisGotticket] = useState(false);
   const [isGotticketFail, setisGotticketFail] = useState(false);
   
   {/* Worker */ }
   const [hiringList , getAll] = useState<GetHiringByBuyerId[]>();


   const [isGotRequest, setisGotRequest] = useState(true);
   const [isGotMoney, setisGotMoney] = useState(false);

   {/*Action accept*/ }
   const [isPaying, setisPaying] = useState(false);
   const handlePaying = () => {
      setisPaying(!isPaying);


   }
   const containerStyle: React.CSSProperties = {
      display: 'flex',
      width: '348px',
      height: '148px',
      padding: '15px 0px',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexShrink: 0,
      borderRadius: '10px',
      background: '#EDE7E3',
      margin: 'auto',
      marginTop: '25px',
      marginBottom: '10px',

   };


   const popupData = async (u_id:string ) => {

      console.log("Find User Name by ID");
    
      const requestBody = {

         buyer_id : parseInt(u_id)

      };

      try {
        const response: AxiosResponse = await axios.post<GetHiringByBuyerId>(
          hookupUrl+dbURL+'concerts/hiringAll',requestBody
        );
    
        getAll(response.data);
        
        console.log(hiringList);
        
        // You can also perform actions such as setting the user's token in state or redirecting the user to another page
      } catch (error) {
        // Handle login errors
        console.error(error);
      }
    
    
    
    };


    useEffect(() => {

      console.log("display all hiringList for buyer "+UserID);
    
      popupData(UserID);
    
    }, );

   return (
                                 ///////////////         json มี แค่ id concert ไม่มีชื่อ consert เจริญละกู เดี๋ยวมาทำ

      <>
         {isGotRequest && hiringList?.map((itemList) => (<div className="RequestBuyer" style={containerStyle} key={itemList.id}>
            <div style={{ margin: 'auto' }}>
               <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
               <Typography fontSize={'14px'}>รายละเอียด : บัตร {itemList.Concert_id} วันที่ DD/MM/YYYY</Typography>
               <Typography>Mrs.F ได้ส่งทำขอมาหาคุณ</Typography>
            </div>
            <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <IconButton style={{
                     fontSize: '12px', backgroundColor: '#FFA62B', borderRadius: '5px', width: '135px',
                     height: '24px', color: 'white'
                  }}>รับงาน</IconButton>
                  <IconButton style={{
                     fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                     height: '24px', color: 'white'
                  }}>ปฏิเสธ</IconButton>
               </div>
            </div>
         </div>)
         
         )
      }

         {isdeclineNoti && (
            <div className="decline" style={containerStyle}>
               <div style={{ marginRight: 'auto', marginLeft: '20px', marginTop: 'auto' }}>
                  <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
                  <Typography>ได้ปฏิเสธคำร้องขอแล้ว</Typography>
               </div>
               <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', }}>

                     <IconButton style={{
                        fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>รับทราบ</IconButton>
                  </div>
               </div>
            </div>
         )}

         {isGotMoney && (
            <div className="DepositSuccess" style={containerStyle}>
               <div style={{ marginRight: 'auto', marginLeft: '20px', marginTop: 'auto' }}>
                  <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
                  <Typography>Mrs.F ได้ทำการโอนเงินเรียบร้อยแล้ว</Typography>
               </div>
               <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', }}>

                     <IconButton style={{
                        fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>รับทราบ</IconButton>
                  </div>
               </div>
            </div>
         )}
         {isAcceptNoti && (
            <div className="BuyerAccept" style={containerStyle}>
               <div style={{ marginRight: 'auto', marginLeft: '20px', marginTop: 'auto' }}>
                  <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
                  <Typography>Mr.A ได้ตอบรับแล้ว กรุณาชำระเงินค่ากดบัตร</Typography>
               </div>
               <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                     <IconButton onClick={handlePaying} style={{
                        fontSize: '12px', backgroundColor: '#FFA62B', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>โอนเงิน</IconButton>
                     <IconButton style={{
                        fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>ปฏิเสธ</IconButton>
                  </div>
               </div>
            </div>
         )}

         {isGotticket && (
            <div className="GotTicket" style={containerStyle}>
               <div style={{ marginRight: 'auto', marginLeft: '20px', marginTop: 'auto' }}>
                  <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
                  <Typography>Mr.C ได้กดบัตร xxx สำเร็จแล้วกรุณาเช็คที่ กระเป๋า</Typography>
               </div>
               <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                     <IconButton style={{
                        fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>รับทราบ</IconButton>
                  </div>
               </div>
            </div>
         )}
         {isGotticketFail && (
            <div className="TicketFail" style={containerStyle} >
               <div style={{ marginRight: 'auto', marginLeft: '20px', marginTop: 'auto' }}>
                  <Typography fontWeight={'bold'} fontSize={'24px'}>Notification</Typography>
                  <Typography>Mr.D กดบัตรไม่สำเร็จเสียใจด้วย</Typography>
               </div>
               <div id="block" style={{ display: "colum", margin: 'auto', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', }}>
                     <IconButton style={{
                        fontSize: '12px', backgroundColor: '#888', borderRadius: '5px', width: '135px',
                        height: '24px', color: 'white'
                     }}>รับทราบ</IconButton>
                  </div>
               </div>
            </div>
         )}

         {isPaying && (
            <PayingModal iconClose="icon-close.png" />
         )}
      </>
   );
};

export default NotiList;