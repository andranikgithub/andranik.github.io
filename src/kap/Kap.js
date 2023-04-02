import './ka.css'
import { AiFillWechat } from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import {BsTelephoneFill } from 'react-icons/bs'
import {BiTimeFive } from 'react-icons/bi'
import {ImLocation} from 'react-icons/im'
function Kap(){
    return(
        <div className='a115'>
            <div className='a116'>
                <div className='a117'><h3>Կոնտակտային տվյալներ</h3></div>
            </div>
            <div className='a118'>
                <div className='a119'>
                    <div className='a120'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195168.3288282071!2d44.348138963878455!3d40.15330558336628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd086306aa15%3A0x26bea23bec8c6762!2z1ZHVpdWy1aHVvdW61aHVttW41oLVqdW11aHVtiDVptW41bDVpdaA1asg1bDVuNaC1bfVodaA1bHVodW2!5e0!3m2!1shy!2s!4v1671791464318!5m2!1shy!2s" className='if'></iframe></div>
                    <div className='a121'>
                        <div className='a122'><h4><AiFillWechat/></h4><h3>Գրեք մեզ</h3></div>
                        <div className='a123'><h4><BsFillEnvelopeFill/></h4><h3>Կապ հաճախորդների սպասարկման բաժնի հետ․<br></br><span>contact@adjarabet.am</span></h3></div>
                        <div className='a124'><h4><BsTelephoneFill/></h4><h3>Զանգահարեք մեզ հետևյալ հեռաղոսահամարով․<br></br><span>+374 12 717171</span></h3></div>
                        <div className='a125'><h4><BiTimeFive/></h4><h3>Աշխատանքային ժամեր<br></br><span>24/7</span></h3></div>
                        <div className='a126'><h4><ImLocation/></h4><h3>Հասցե<br></br><span>ՀՀ, Երևան 0069,Կ․ ՈՒլնեցու փողոց 58/2</span></h3></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Kap;