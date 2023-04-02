
import Todos from '../todos/Todos';
import './grancu.css'

function Grancum(){
    return(
        <div className="a153">
            <div className='a154'>
            <div className='a155' onClick={()=>{
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

            }}><img src='https://www.newcasinos.com/wp-content/uploads/Adjarabet-logo.png'></img></div>
            <div className='a156'><h3>ԱՐԴԵՆ ԳՐԱՆՑՎԱԾ ԵՔ։</h3><button className='a157' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}>ՄՈՒՏՔ</button></div>
            </div>
            <div className='a158'>
                <div className='a159'>
                    <div className='a160'>
                        <h3>Ստեղցենք նոր խաղային հաշիվ</h3>
                        <div className='a162'><input className='a163' type="text"  placeholder='Անուն'></input></div>
                        <div className='a164'><input className='a165' type="text" placeholder='Ազգանուն'></input></div>
                    <h4>Սեռ</h4>
                    <div className='a166'>
                    <input type="radio"></input> 
                    <h5>Արական</h5>
                    <input type="radio"></input>   
                    <h5>Իգական</h5>
                    </div>
<div className='a167'>
    {/*  */}
    {/* <input appformcontrolvalidationmsg="" appinputmask="" class="ng-valid _s_input _s_size-w-percent--25 _s_pt-2 ng-touched ng-dirty valid _s_has-value" placeholder="" type="textbox" autocapitalize="" tabindex="8" data-id="signUpFormFirstOfThree_address" autocomplete="" inputmode=""></input> */}
    {/* <input appformcontrolvalidationmsg="" appinputmask="" class="_s_input _s_size-w-percent--25 _s_pt-2 ng-touched ng-dirty ng-invalid in-valid _s_has-value" placeholder="" type="textbox" autocapitalize="as" tabindex="5" data-id="signUpFormFirstOfThree_day" maxlength="2" autocomplete="number" inputmode="number"></input> */}
  {/*   step="2"*/}
       <div className='a168'><input type="number" maxlength="2" placeholder='Օր'  className='a168'></input></div>
       <div className='a169'><input type="text" placeholder='Ամիս'   className='a169'></input></div>
       <div className='a170'><input type="text" placeholder='Տարի'   className='a170'></input></div>
    </div>

    <div className='a171'>
        <input type="textbox" placeholder='Հասցե' className='a172'></input>
        <input type="email" placeholder='Էլ․ փեստ' className='a173'></input>
    </div>
    
    <div className='a174'>
        <input type="username" placeholder='Մուտքանուն' className='a175'></input>
        <input type="password" placeholder='Գաղտնաբառ' className='a176'></input>
    </div>
    <div className='a177'>
        <button className='a178' onClick={()=>{
            //    let a158=document.querySelector(".a158")
            let a163=document.querySelector(".a163")
            let a165=document.querySelector(".a165")
            let a168=document.querySelector(".a168")
            let a169=document.querySelector(".a169")
            let a170=document.querySelector(".a170")
            let a172=document.querySelector(".a172")  
            let a173=document.querySelector(".a173")
            let a175=document.querySelector(".a175")
            let a176=document.querySelector(".a176")

            let a200=document.querySelector(".a200")


            if(a163.value==="ashot" && a163.value==="aram" && a163.value==="vahe"){
a163.style.color="green"
            }
           else if (a163.value!=="ashot" && a163.value!=="aram" && a163.value!=="vahe"){
a163.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
a163.style.color="red"
            }
            // 
            // 
          if(a165.value==="ashototyan" && a165.value==="xurshudyan" && a165.value==="amayan" ){
                a165.style.color="green"
            }
            else if(a165.value!="ashototyan" && a165.value!="xurshudyan" && a165.value!="amayan" ){
                a165.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
                a165.style.color="red"
            }
// 

            if(a170.value===['2020']){
                a170.style.color="green"
            }
            else if(a170.value!=['2020']){
                a170.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
                a170.style.color="red"
            }
 

if(a172.value==="aragatotn" && a172.value==="miasnikyan" && a172.value==="vahanyach" && a172.value==="mamikonyanc" && a172.value==="vahanyach"){
    a172.style.color="green"
}
else if(a172.value!="exegnacor" && a172.value!="mamikonyanc" && a172.value!="vahanyach" && a172.value!="miasnikyan"){
    a172.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
    a172.style.color="red"
}


// 
if(a173.value==="ando.@mail.ru" && a173.value==="aram.@mail.ru" && a173.value==="areg.@mail.ru"){
    a173.style.color="green"
}
else if(a173.value!="ando.@mail.ru" && a173.value!="aram.@mail.ru" && a173.value!="areg.@mail.ru"){
    a173.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
    a173.style.color="red"
}
// 


// 
if(a175.value==="ashot" && a175.value==="aram" && a175.value==="vahe"){
    a175.style.color="green"
}
else if(a175.value!="ashot" && a175.value!="aram" && a175.value!="vahe"){
    a175.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
    a175.style.color="red"
}
// 
if(a176.value==="ashototyan" && a176.value==="xurshudyan" && a176.value==="amayan"){
    a176.style.color="green"
}
else if(a176.value!="ashototyan" && a176.value!="xurshudyan" && a176.value!="amayan"){
    a176.value=["Խնդրում եմ լրացրեք ցհիսհտ"]
    a176.style.color="red"
}
// 

if(a163.value===a163.value || a165.value===a165.value  || a172.value===a172.value || a173.value===a173.value || a175.value===a175.value || a176.value===a176.value){
setTimeout(function(){
   a200.style.display="flex"  
},1000)
   setTimeout(function(){
    a200.style.display="none" 
   },5000)
}









           
        }}><h2>Շարունակել</h2></button>
    </div>
   
                    </div>
                    <div className='a161'><img src='https://staticfiles.adjarabet.am/static.am/banners/5732_hy.jpg'></img></div>
                </div>
            </div>
 <div className='a200'>
    <div className='a201'>
        
        <div className='a202'><h1>404</h1></div>
        {/* <div className='a203'><h1>Խնդրում եմ ներեցք մեզ կայք չենք ավարտել</h1></div> */}
        </div>
 </div>
          {/* <Todos/> */}
        </div>
          
    )
}
export default Grancum;