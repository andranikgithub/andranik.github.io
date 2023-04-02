import './aviat.css'
import {FaAvianex} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'
import {GiTrophyCup} from 'react-icons/gi'
function Aviator(){
    return(
        <div className='s144'>
            <div className='s145'>
              <div className='s146'><img src='https://staticfiles.adjarabet.am/static.am/banners/4112_hy.jpg'></img></div>  
            </div>
            <div className='s147'>
            <div className='s148'>
            <div className='s149'><div className='s152'><h2><FaAvianex/></h2><h3>ԽԱՂԱԼ ՀԻՄԱ </h3></div>
            <img src='https://staticfiles.adjarabet.am/static.am/banners/3331_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
            </div>
            <div className='s150'><div className='s152'><h2><FaStar/></h2><h3>ԱՎԻԱՏՈՐ </h3></div>
            <img src='https://staticfiles.adjarabet.am/static.am/banners/3399_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img></div>
           
            <div className='s151'><div className='s153'><h2><GiTrophyCup/></h2><h3>ԱՄԵՆԱՎԵՐՋԻՆ ՇԱՀՈՒՄՆԵՐ</h3></div>
           <div className='s154'><h5> 1230600 ֏ Շահել է 20,51</h5><h6>Խաղադրույքով 600000 ֏  գործակցով </h6></div>
           <div className='s154'><h5>  1190400 ֏  Շահել է 30,21</h5><h6>Խաղադրույքով 600000 ֏  գործակցով </h6></div>
           <div className='s154'><h5>  929657.37 ֏  Շահել է 10,01</h5><h6>Խաղադրույքով 600000 ֏  գործակցով </h6></div>
           <div className='s154'><h5>  425400 ֏  Շահել է 7,71</h5><h6>Խաղադրույքով 600000 ֏  գործակցով </h6></div>
           <div className='s154'><h5>  261085 ֏  Շահել է 5,51</h5><h6>Խաղադրույքով 600000 ֏  գործակցով </h6></div>
           </div>
           
            </div>
            </div>
            <div className='s155' onClick={()=>{
                        let s1=document.querySelector(".s1")
                        let a7=document.querySelector(".a7")
                        let a8=document.querySelector(".a8")
                        let a28=document.querySelector(".a28")
                        let s21=document.querySelector(".s21")
                        let s30=document.querySelector(".s30")
                        let s41=document.querySelector(".s41")
                        let s108=document.querySelector(".s108")
                        let s122=document.querySelector(".s122")
                        let s144=document.querySelector(".s144")
                        let anim=document.querySelector(".anim")
                        let a133=document.querySelector(".a133")
                        let a86=document.querySelector(".a86")
                        let a92=document.querySelector(".a92")
                        let a110=document.querySelector(".a110")
                        let a115=document.querySelector(".a115")
                        let a127=document.querySelector(".a127")
                        let s51=document.querySelector(".s51")
                        // let d1=document.querySelector(".d1")
                        // d1.style.display="none"
                        s51.style.display="none"
                        a127.style.display="none"
                        a115.style.display="none"
                        a110.style.display="none"
                        a86.style.display="none"
                        a92.style.display="none"
                        a133.style.display="none"
                        anim.style.display="none"
                        s144.style.display="none"
                        s122.style.display="none"
                         s108.style.display="none"
                        a7.style.display="none"
                        a8.style.display="none"
                        a28.style.display="none"
                        s1.style.display="none"
                        s21.style.display="none"
                        s30.style.display="none"
                        s41.style.display="none"
        let d1=document.querySelector(".d1")
        d1.style.display="block"
            }}><img src='https://staticfiles.adjarabet.am/static.am/images/floating_banners/16_hy.jpg'></img></div>
        </div>
    )
}
export default Aviator;