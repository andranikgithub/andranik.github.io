import './hed.css'
import {BsArrowCounterclockwise} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'

function Heder(){

    return(
        <div className="heder">
            <div className='heder-off'>
                <div className='heder-1' onClick={()=>{
                            let add=document.querySelector(".add")
                            let heder=document.querySelector(".heder")
                            let a2=document.querySelector(".a2")
                            let anim=document.querySelector(".anim")
                            let a8=document.querySelector(".a8")
                            let a7=document.querySelector(".a7")
                            let a28=document.querySelector(".a28")
                            let a50=document.querySelector(".a50")
                            let a66=document.querySelector(".a66")
                            let a75=document.querySelector(".a75")
                            let a83=document.querySelector(".a83")
         

                        let s1=document.querySelector(".s1")
                        let s21=document.querySelector(".s21")
                        let s30=document.querySelector(".s30")
                        let s41=document.querySelector(".s41")
                        let s108=document.querySelector(".s108")
                        let s122=document.querySelector(".s122")
                        let s144=document.querySelector(".s144")
                        let a133=document.querySelector(".a133")
                        let a153=document.querySelector(".a153")


s1.style.display="none"
s21.style.display="none"
s30.style.display="none"
s41.style.display="none"
s108.style.display="none"
s122.style.display="none"
s144.style.display="none"
a133.style.display="none"
a153.style.display="none"
                        add.style.display="flex"
                           heder.style.display="flex"
                            a2.style.display="flex"
                            anim.style.display="flex"
                            a8.style.display="flex"
                            a7.style.display="flex"
                            a28.style.display="block"
                            a50.style.display="block"
                            a66.style.display="flex"
                            a75.style.display="flex"
                            a83.style.display="flex"

            }}><img src='https://www.newcasinos.com/wp-content/uploads/Adjarabet-logo.png' className='ad1'></img>
            <img src='https://681828296218-prod-staff.s3.eu-central-1.amazonaws.com/staff.am/upload/a/a/7/5/aa75a359.png' className='ad'></img>
            </div>
                <div className='heder2'><input type='text'  className='tex'></input><button><h3><BsArrowCounterclockwise/></h3></button></div>
                <div className='heder3'><input type='text' className='tex1'></input><button><h3><BsArrowCounterclockwise/></h3></button><button className='btn-0'><h3><BsPhone/></h3></button></div>
                <div className='heder-4' onClick={()=>{
let tex=document.querySelector(".tex")
let tex1=document.querySelector(".tex1")
let input=document.querySelector("input")
// let input=document.querySelector("input")
// let heder2=document.querySelector(".heder2")


if(tex.value === ""){
    input.style.border="2px solid red"
    tex.value ="Խնդում ենք լրացրեք"
    tex.style.color="red"
}
else if(tex.value >= "1"){
    tex.style.color="black"
}
 if(tex1.value === ""){
    tex1.style.border="2px solid red"
    tex1.value ="Խնդում ենք լրացրեք"
    tex1.style.color="red"
}
else if(tex1.value >= "1"){
    tex1.style.color="black"
}
                }}><button className='btn-1'>Մուտք</button>
                

    
     <button className='btn-2' onClick={()=>{
        let add=document.querySelector(".add")
        let heder=document.querySelector(".heder")
        let a2=document.querySelector(".a2")
        let a133=document.querySelector(".a133")
        let a7=document.querySelector(".a7")
        let a8=document.querySelector(".a8")
        let a28=document.querySelector(".a28")
        let a66=document.querySelector(".a66")
        let a75=document.querySelector(".a75")
        let a83=document.querySelector(".a83")
        let a50=document.querySelector(".a50")
        let a153=document.querySelector(".a153")
        let anim=document.querySelector(".anim")
        let a180=document.querySelector(".a180")
        let a86=document.querySelector(".a86")
        let a92=document.querySelector(".a92")
        let a110=document.querySelector(".a110")
        let a115=document.querySelector(".a115")
        let a127=document.querySelector(".a127")
        let s51=document.querySelector(".s51")
        let s144=document.querySelector(".s144")
        s144.style.display="none"
        let d1=document.querySelector(".d1")
        d1.style.display="none"
        s51.style.display="none"
        anim.style.display="none"
        a127.style.display="none"
        a115.style.display="none"
        a110.style.display="none"
        a86.style.display="none"
        a92.style.display="none"
        a180.style.display="none"
        add.style.display="none"
        heder.style.display="none"
        a2.style.display="none"
        a133.style.display="none"
        a7.style.display="none"
        a8.style.display="none"
        a28.style.display="none"
        a66.style.display="none"
        a75.style.display="none"
        a83.style.display="none"
        a50.style.display="none"
        a153.style.display="block"
   }
   
   }>Գրանցում</button></div>
    <div className='heder-5'><div className='a1'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Armenia_%283-2%29.svg/200px-Flag_of_Armenia_%283-2%29.svg.png'></img></div></div>
            </div>
        </div>
    )
}
export default Heder;