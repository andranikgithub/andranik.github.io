import './karev.css'
import {BsFillInfoCircleFill} from 'react-icons/bs'
function Karevor (){
    return(
       
        <div className="add">
             {/* <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAGFBMVEX////VKx4AOabL0OYAJaEAOqupMFfYKxcc/ELrAAAA2UlEQVR4nO3QUQGCAAAFsSco9G8Ml8KfLcI2AAAAAAAAAAAAAAAAAAAAgD872ZcdOHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA7egx+72M0+OHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA4cxIGDOHAQBw7iwEEcOIgDB3HgIA4c5AEEh9Z9sqlqqAAAAABJRU5ErkJggg=='></img> */}
           <h2><BsFillInfoCircleFill/></h2>
            <h3 onClick={()=>{
         let s160=document.querySelector(".s160")
         s160.style.display="flex"
            }}>Կարդացեք կարևոր տեղեկությունը</h3>
             </div>
    )
}
export default Karevor;