import './blo.css'
import {FaStar} from 'react-icons/fa'
import {MdSportsSoccer} from 'react-icons/md'
function Blot(){
    return(
        <div className='s21'>
            <div className='s22'>
                <div className='s23'>
                    <img src='https://staticfiles.adjarabet.am/static.am/banners/5805_hy.jpg'></img>
           
               </div>
            </div>
            <div className='s24'>
                <div className='s25'>
                    <div className='s26'>
                       <div className='s27'>
                       
                        
                        </div>
                    <div className='s28'><h3><FaStar/></h3><h2>ԲԼՈՏ</h2></div> 
                    <div className='s29'><h3><MdSportsSoccer/></h3><h2>ՄՐՑԱՇԱՐԵՐ</h2></div> 
                    </div>
                    <div className='bl'>
                        <div className='bl1'>
                             <h3><FaStar/></h3><h2>ԽԱՂԱԼ ՀԻՄԱ</h2>
                        </div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banners/5457_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                 </div>
                 <div className='bl'>
                        <div className='bl1'>
                             <h3><FaStar/></h3><h2>ԽԱՂԱԼ ՀԻՄԱ</h2>
                        </div>
                                 <img src='https://staticfiles.adjarabet.am/static.am/banners/5456_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                 </div>
                 <div className='bl'>
                        <div className='bl1'>
                             <h3><FaStar/></h3><h2>ԽԱՂԱԼ ՀԻՄԱ</h2>
                        </div>
                      <img src='https://staticfiles.adjarabet.am/static.am/images/belote/belote_tournaments_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                 </div>
            
               
            


                </div>
            </div>
        </div>
    )
}
export default Blot;