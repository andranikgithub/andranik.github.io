import './sexa.css'
import {FaStar} from 'react-icons/fa'
function Sexan(){
    return(
        <div className='s30'>
            <div className='s31'>
            <div className='s32'><img src='https://staticfiles.adjarabet.am/static.am/banners/5035_hy.jpg'></img></div>
            </div>
            <div className='s33'>
            <div className='s34'>
            <div className='s35'>
                <img src='https://staticfiles.adjarabet.am/static.am/images/p2p/3_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
           <img src='https://staticfiles.adjarabet.am/static.am/images/p2p/1_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
           <img src='https://staticfiles.adjarabet.am/static.am/images/p2p/2_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
           
            </div>
            <div className='s36'>
<div className='s37'><h3><FaStar/></h3><h2>ԱՐԻ ԽԱՂԱՆՔ</h2></div>
            <img src='https://staticfiles.adjarabet.am/static.am/banners/4882_hy.jpg'></img>
            <img src='https://staticfiles.adjarabet.am/static.am/banners/4983_hy.jpg'></img>
            </div>

<div className='s38'><h3>Արի Խաղանք</h3></div>
<div className='s39'><h3>Արի Խաղանք</h3></div>
<div className='s40'><h3>Արի Խաղանք</h3></div>
            </div>
       
            </div>
        </div>
    )
}
export default Sexan;