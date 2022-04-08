import React from 'react'
import '../css/style.scss'
import nfl from '../images/nfl.png'
import Tokenomics from '../comps/Tokenomics'
import Roadmap from '../comps/Roadmap'
import Howtobuy from '../comps/Howtobuy'
import coin_gecko from '../icons/coin_gecko.png'
import bscan from '../icons/bscan.png'
import dex from '../icons/dex.png'
import coin_market_cap from '../icons/coin_market_cap.png'


class Overview extends React.Component {

    render() {
        return (
            <div className="container-fluid overview">
                <div className="row welcome">
                    <div className="col-lg-6 p-5 text-left color1">
                        <h1 className=''>WELCOME TO BULLFORCE</h1>
                        <p className=''>FORCE UNSTOPPABLE</p>
                        <p className='' >Welcome to $BFRC a sports extravaganza on crypto where in fans from various sports
                            support their favorite teams on blockchain and earn rewards while watching favorite
                            game. $BFRC will initially be enthralling the Cricket fans through the upcoming IPL & NBA.
                        </p>
                        <button className="btn bg2 ">Sports DAPPS</button>
                        <button className="btn bg2 ">Buy Now</button>
                    </div>
                    <div className="col-lg-6 nfl_div">
                        <img src={nfl} alt="" className='w-75' data-aos="zoom-in-up" data-aos-duration="1000" />
                    </div>
                </div>


                <div className="row bf-vision p-5">
                    <div className="col-lg-12 bf-vision-hd text-center">
                        <h2 className='color1 text-center'>BULLF<span className='underline-decoration'>ORCE VI</span>SION</h2><br />
                    </div>
                    <div className="col-lg-6 color1 bf-vision-utility">
                        <h2 className="color2" >Utilities</h2>
                        <ul className='' data-aos="fade-right" data-aos-duration="500">
                            <li >Introduction to sports utility – Sports never cease to exist,
                                $BFRC plans to have an innovative staking mechanism for supporting
                                your favorite team and earn rewards. Fans never lose.</li>

                            <li>Introduction to Marketplace: Launching of sportswear.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 color1 bf-vision-rewards">
                        <h2 className="color2" >Rewards</h2>
                        <ul className='' data-aos="fade-right" data-aos-duration="500">
                            <li>Earn Rewards in the form of BUSD. Rewards will be shared proportional to the number of tokens held by the holder.</li>

                            <li>Staking rewards in the form of native tokens. Stake and earn rewards in native tokens up to 24% APY.</li>
                            <li>Stake the tokens for Sports utility in the form of native tokens by supporting your favorite team.
                                Win or lose still you earn rewards.</li>
                        </ul>
                    </div>

                    <Tokenomics />

                    <Roadmap />

                    <Howtobuy />

                    <div className="col-lg-3 pt-5 text-center">
                        <img src={coin_gecko} alt="" className="w-100" />
                    </div>

                    <div className="col-lg-3 pt-5 text-center">
                        <img src={bscan} alt="" className="w-100" />
                    </div>

                    <div className="col-lg-3 pt-5 text-center">
                        <img src={dex} alt="" className="w-100" />
                    </div>

                    <div className="col-lg-3 pt-5 text-center">
                        <img src={coin_market_cap} alt="" className="w-100" />
                    </div>

                </div>
            </div>
        )
    }
}

export default Overview