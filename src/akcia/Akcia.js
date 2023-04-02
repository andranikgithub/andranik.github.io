import './akci.css'
function Akcia(){
    return(
        <div className='a133'>
            <div className='a134'>
            <div className='a135'><h3>Առաջարկներ</h3></div>
            </div>
            <div className='a136'>
            <div className='a137'>
                <button className='a138' onClick={()=>{
                     let a149=document.querySelector(".a149")
                     let a150=document.querySelector(".a150")
                     let a151=document.querySelector(".a151")
                    
                     a150.style.display="block"
                     a151.style.display="block"
                     a152.style.display="block"
                }}><h3>Բոլորը</h3></button>
                <button className='a139' onClick={()=>{
                    let a149=document.querySelector(".a149")
                    let a150=document.querySelector(".a150")
                    let a151=document.querySelector(".a151")
                    let a152=document.querySelector(".a152")

                    a149.style.display="none"
                    a150.style.display="block"
                    a151.style.display="none"
                    a152.style.display="none"
                }}><h3>Սպորտ</h3></button>
                <button className='a140'><h3>Պոկեր</h3></button>
                <button className='a141'><h3>LIVE խաղեր</h3></button>
                <button className='a142' onClick={()=>{
                               let a149=document.querySelector(".a149")
                               let a150=document.querySelector(".a150")
                               let a151=document.querySelector(".a151")
                               let a152=document.querySelector(".a152")
           
                               a149.style.display="block"
                               a150.style.display="none"
                               a151.style.display="none"
                               a152.style.display="none"
                }}><h3>Սլոթեր</h3></button>
                <button className='a143'><h3>P2P</h3></button>
                <button className='a144' onClick={()=>{
                 let a149=document.querySelector(".a149")
                 let a150=document.querySelector(".a150")
                 let a151=document.querySelector(".a151")
                 let a152=document.querySelector(".a152")

                 a149.style.display="none"
                 a150.style.display="none"
                 a151.style.display="block"
                 a152.style.display="none"  
                }}><h3>Ավիատոր</h3></button>
                <button className='a145'><h3>Keno</h3></button>
                <button className='a146' onClick={()=>{
                      let a149=document.querySelector(".a149")
                      let a150=document.querySelector(".a150")
                      let a151=document.querySelector(".a151")
                      let a152=document.querySelector(".a152")
     
                      a149.style.display="none"
                      a150.style.display="none"
                      a151.style.display="none"
                      a152.style.display="block" 
                }}><h3>Այլ</h3></button>
            </div>
            </div>
            <div className='a147'>
                <div className='a148'>
                   <div className='a149'> <img src='https://staticfiles.adjarabet.am/static.am/images/promotions/10_ka.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img></div>
                  <div className='a150'>  <img src='https://staticfiles.adjarabet.am/static.am/images/promotions/7_ka.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img></div>
                   <div className='a151'><img src='https://staticfiles.adjarabet.am/static.am/images/promotions/5_ka.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img></div> 
                   <div className='a152'> <img src='https://staticfiles.adjarabet.am/static.am/images/promotions/8_ka.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img></div>
                </div>
            </div>
        </div>
    )
}
export default Akcia