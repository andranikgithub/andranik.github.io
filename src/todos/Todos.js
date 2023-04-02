import './todo.css'

function Todos(){
    return(
        <div className='a180'>
            <div className='a181'>
                <div className='a182'><h4>ԾԱՆՈՒՑՈՒՄ</h4><h3 className='h3' onClick={()=>{
                    let a180=document.querySelector(".a180")
                    a180.style.display="none"
                }}>X</h3></div>
            <div className='a183'>
            <div className='a184'>
                <img src='https://staticfiles.adjarabet.am/static.am/banners/5731_hy.jpg'></img>
            </div>
            
            <div className='a185'>
        <h6 style={{display:"none",color:"red",marginTop:"20px"}} className="a195">Օգտատիրոջ Անուն կամ գաղտնաբառ սխալ է մուտքագրած</h6>
        <h6 style={{display:"none",marginTop:"20px",color:"aliceblue"}} className="a196"> Գրանցում բարեհաջող ավարտվեց</h6>
            <div className='a186'>
            <input type="text" placeholder="Անուն" className='a187'></input>
            <input type="password" placeholder="Գաղտաբառ" className='a188'></input>
            </div>
             <h5>Մուտք գործեք SMS-ով</h5>

             <div className='a189'>
                <button className='a190' onClick={()=>{
                    let a187=document.querySelector(".a187")
                    let a188=document.querySelector(".a188")
                    let a196=document.querySelector(".a196")
                    let a195=document.querySelector(".a195")
                       
                 
                  if(a187.value>=['andranik','edgar','ararat','areg','arman','rafo']){
                    //    alert("barve")
                    }
                    if(a188.value>=['andranik','edgar','ararat','areg','arman','rafo']){
                        // alert('barev apa')
                    }
                    if(a187.value === a188.value){
                    a196.style.display="block" 
                    a195.style.display="none" 
                    }
                   else if(a187.value !== a188.value){
                        a195.style.display="block" 
                        a196.style.display="none" 
                      
                     }
             }}><h3> Մուտք</h3></button>
             </div>
             <div className='a191'>
                <hr></hr> <h5>Հաշիվ չունեք</h5> <hr></hr>
             </div>
             <div className='a192'>
                <button className='a193' onClick={()=>{
                                  let a180=document.querySelector(".a180")
                                  a180.style.display="none"
                }}><h3>Գրանցում</h3></button>
             </div>
            </div>
           
            </div>
            </div>
        </div>
    )
}
export default Todos;