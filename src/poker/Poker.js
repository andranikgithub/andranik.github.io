import './pok.css'
import {GiPokerHand} from 'react-icons/gi'
import {MdSportsSoccer} from 'react-icons/md'
function Poker(){
    return(
        <div className='s1'>
            <div className='s2'>
                <div className='s3'>
                   <img src='https://staticfiles.adjarabet.am/static.am/banners/5538_hy.jpg'></img>
             
                    </div>
            </div>
            <div className='s4'>
                <div className='s5'>
                <div className='s6'>
                    <div className='s9'>
                        <h3><GiPokerHand/></h3>
                    <h2>ՊՈԿԵՐ</h2>
                    </div>
                    <img src='https://staticfiles.adjarabet.am/static.am/images/spribe_poker/spribepoker_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                </div>
                  <div className='s7'> <div className='s10'>
                  <h3><GiPokerHand/></h3>
                    <h2>SPIN ՊՈԿԵՐ</h2>
                    </div>
                    <img src='https://staticfiles.adjarabet.am/static.am/images/spribe_poker/spinpoker_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                    </div>
                  <div className='s8'><div className='s11'>
                  <h3><GiPokerHand/></h3>
                    <h2>ՄՐՑԱՇԱՐԵՐ</h2>
                    </div>
                    <img src='https://staticfiles.adjarabet.am/static.am/images/spribe_poker/turnament_hy.jpg' onClick={()=>{
     let a180=document.querySelector(".a180")
     a180.style.display="flex"
            }}></img>
                    </div>
                    
                </div>
            </div>
            <div className='s12'>
                <div className='s13'>
                    <div className='s14'><h3><MdSportsSoccer/></h3><h2>ԸՆԹԱՑԻԿ ԱԿՑԻԱՆԵՐ</h2></div>
                </div>
                 <div className='s15'>
                <div className='s16'>
                <div className='s17'><img src='https://staticfiles.adjarabet.am/static.am/images/suggested_promos/1_hy.jpg'></img>
                <div className='s20'>
                    <h3>SPIN ԲԼՈՏ</h3>
                  
                    <h4>ՍՓԻՆ ԲԼՈՏ ՄԻԱՅՆ ԱՋԱՐԱԲԵԹՈՒՄ! <br></br> ՇԱՀԻՐ ԽԱՂԱԴՐՈՒՅՔԻԴ ՄԻՆՉԵՎ <br></br> 1000-ԱՊԱՏԻԿԸ</h4>
                    </div>
                </div>
                <div className='s18'><img src='https://staticfiles.adjarabet.am/static.am/images/suggested_promos/2_hy.jpg'></img>
                <div className='s20'>
                    <h3> ԲԼՈՏԻ ՄՐՑԱՇԱՐԻՆ</h3>
                  
                    <h4>ՍԵՂՄԻՐ ՔՈ ՆԱԽԸՆՏՐԵԼԻ <br></br> ՄՐՑԱՇԱՐԻՆ ԵՎ ՎԱՅԵԼԻՐ ԱՐԱԳ <br></br> ԲԼՈՏ</h4>
                    </div></div>
                <div className='s19'><img src='https://staticfiles.adjarabet.am/static.am/images/suggested_promos/3_hy.jpg'></img>
                <div className='s20'>
                    <h3>Սպասարկման Սրահներ</h3>
                  
                    <h4>5 նոր սպասարկման սրահ <br></br> Հայաստանում</h4>
                    </div></div>
                </div>
            </div>
            </div>
           
        </div>
    )
}
export default Poker;