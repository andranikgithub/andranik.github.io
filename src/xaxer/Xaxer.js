import './xax.css'
import {FaStar} from 'react-icons/fa'
import {MdSportsSoccer} from 'react-icons/md'
import Todos from '../todos/Todos'
function Xaxer(){

    
    return(
        <div className="a8">
            {/* <Todos/> */}
            <div className="a9">
                <div className='a10'>
                    <div className='a11'><h2><FaStar/></h2><h3>ՉԵՄՊԻԵՆՆԵՐԻ ԽԱՂ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/28_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                    </div>
                    
                <div className='a12'>
                <div className='a13'><h2><FaStar/></h2><h3 >TELEGRAM</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/13_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>


                <div className='a14'>
                <div className='a15'><h2><MdSportsSoccer/></h2><h3>ՀԵԹ - ՏՐԻԿ ԱՐԱ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/25_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>

                <div className='a16'>
                <div className='a17'><h2><FaStar/></h2><h3>AVIATOR</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/7_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>
{/*  */}
                <div className='a20'>
                <div className='a21'><h2><MdSportsSoccer/></h2><h3>ՆՈՐ ԲԼՈՏ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/13_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>

                <div className='a22'>
                <div className='a23'><h2><MdSportsSoccer/></h2><h3>ՍՊՈՐՏ ԷՔՍՊԵՐՏ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banner_widgets/32_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>

                <div className='a24'>
                <div className='a25'><h2><FaStar/></h2><h3>ՊՈԿԵՐ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/images/spribe_poker/spinpoker_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>

                <div className='a26'>
                <div className='a27'><h2><FaStar/></h2><h3>ՏՈՒՐԲՈ ԽԱՂԵՐ</h3></div>
                    <img src='https://staticfiles.adjarabet.am/static.am/banners/3217_hy.jpg'  onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>

            </div>
            <div className='a19' onClick={()=>{
                  let a10=document.querySelector(".a10")
                  let a12=document.querySelector(".a12")
                  let a14=document.querySelector(".a14")
                  let a16=document.querySelector(".a16")
              
                  let a20=document.querySelector(".a20")
                  let a22=document.querySelector(".a22")
                  let a24=document.querySelector(".a24")
                  let a26=document.querySelector(".a26")


                  a10.style.display="none";
                  a12.style.display="none";
                  a14.style.display="none";
                  a16.style.display="none";
               
             
                // 
                   a20.style.display="block";
                  a22.style.display="block";
                  a24.style.display="block";
                 a26.style.display="block";
             
                // 
            }}><img src='https://icons.veryicon.com/png/128/object/material-design-icons-1/code-greater-than.png'></img></div>
           
            <div className='a18' onClick={()=>{
                    let a10=document.querySelector(".a10")
                    let a12=document.querySelector(".a12")
                    let a14=document.querySelector(".a14")
                    let a16=document.querySelector(".a16")
                
                    let a20=document.querySelector(".a20")
                    let a22=document.querySelector(".a22")
                    let a24=document.querySelector(".a24")
                    let a26=document.querySelector(".a26")
  
  
                    a10.style.display="block";
                    a12.style.display="block";
                    a14.style.display="block";
                    a16.style.display="block";
                 
               
                  // 
                     a20.style.display="none";
                    a22.style.display="none";
                    a24.style.display="none";
                   a26.style.display="none";
            }}><img src='https://icons.veryicon.com/png/o/object/material-design-icons-1/code-less-than.png'></img></div>
        </div>
    )
}
export default Xaxer;