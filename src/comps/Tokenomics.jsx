import React from 'react'
import '../css/style.scss'
import bnb from '../icons/bnb.png'
import burn from '../icons/burn.png'
import gift from '../icons/gift.png'
import media from '../icons/media.png'
import swap from '../icons/swap.png'
import dist from '../images/dist.png'
import 'animate.css';



class Tokenomics extends React.Component {

    render() {
        return (
            <div className="container-fluid tokenomics">
                

                <div className="row p-5">                    

                    <div className="row">

                        <div className="col-lg-12 pt-5 ">
                            <h1 className="text-center color2 underline-decoration">TO<span>KENOMI</span>ICS</h1>
                            <p className="color1 text-center pt-3 pb-3" data-aos="zoom-in-up" data-aos-duration="500">BULLFORCE SMART CONTRACT TAXES TRANSACTIONS AT DIFFERENT RATES FOR BUYERS AND SELLERS.</p>
                        </div>
                        
                        <div className="col-lg-1"><img src={bnb} alt="" /></div>
                        <div className="col-lg-5 pt-3">
                            <h2 className="color1">REWARDS</h2>
                            <h3 className="color2">4% ON BUY & 4% ON SELL</h3>
                            <p className="color1" data-aos="fade-right" data-aos-duration="500">
                            All the BullForce holders will be rewarded in the form of BUSD by holding $BFRC token. 
                            Rewards will be proportional to the number of tokens held by holders.
                            </p>
                        </div>

                        <div className="col-lg-1"><img src={media} alt="" /></div>
                        <div className="col-lg-5 pt-3">
                            <h2 className="color1">MARKETING</h2>
                            <h3 className="color2">3% ON BUY & 4% ON SELL</h3>
                            <p className="color1" data-aos="fade-right" data-aos-duration="500">
                            BullForce believes in marketing, which ensures bringing of new investors and influencers across all the social media platforms
                            </p>
                        </div>

                        <div className="col-lg-1"><img src={gift} alt="" /></div>
                        <div className="col-lg-5 pt-3">
                            <h2 className="color1">DEVELOPMENT / INNOVATION</h2>
                            <h3 className="color2">2% ON BUY & 2% ON SELL</h3>
                            <p className="color1" data-aos="fade-right" data-aos-duration="500">
                            BullForce utilizes this portion of tax for further development of token to bring own Blockchain, launch pad, etc.
                            </p>
                        </div> 


                        <div className="col-lg-1"><img src={swap} alt="" /></div>
                        <div className="col-lg-5 pt-3">
                            <h2 className="color1">AUTO LIQUIDITY</h2>
                            <h3 className="color2">2% ON BUY & 3% ON SELL</h3>
                            <p className="color1" data-aos="fade-right" data-aos-duration="500">
                            BullForce auto liquidity policy ensures liquidity pool is strong on Pancake swap
                            </p>
                        </div>    


                        <div className="col-lg-1"><img src={burn} alt="" /></div>
                        <div className="col-lg-5 pt-3">
                            <h2 className="color1">burn</h2>
                            <h3 className="color2">1% ON BUY & 1% ON SELL</h3>
                            <p className="color1" data-aos="fade-right" data-aos-duration="500">
                            Team BullForce utilizes this portion of tax to burn the tokens in order to reduce the circulating supply.
                            </p>
                        </div>    

                        
                            <h1 className="color1 text-center">BULLFORCE TOKEN DISTRIBUTION</h1>    
                            <p className='color1 text-center'>MAXIM<span className='underline-decoration'>UM SUPPLY: 10000</span>00000
                            </p>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <img src={dist} alt="" className='w-100'/>
                        </div>                   
                    </div>
                </div>
            </div>
        )
    }
}

export default Tokenomics