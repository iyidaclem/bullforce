import React from 'react'
import '../css/style.scss'
import roadmap from '../icons/roadmap.png'


class Roadmap extends React.Component {

    render() {
        return (
            <div className="container-fluid roadmap">

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="color1 text-center">
                            BULLFORCE ROAD MAP
                            </h1>
                            <p className="color1 text-center">
                            MAXIMUM SUPPLY: 1000000000
                            </p>
                        </div>
                </div>

                <div className="row roadmap_container pt-5">
                        
                        <div className="col-md-3 text-center">
                           <img src={roadmap} alt="" />
                           <h2 className="color2 text-center">Q1-2022</h2>
                           <ul className='color1' data-aos="fade-right" data-aos-duration="500">
                               <li>Official Telegram group launch</li>
                               <li>Official Twitter, Discord, Medium & Facebook</li>
                               <li>Official website Launch</li>
                               <li>Seed sale</li>
                               <li>Community Building – 1000+ Telegram members</li>
                               <li>Smart contract development on BSC</li>
                           </ul>
                        </div>

                        <div className="col-md-3 text-center">
                           <img src={roadmap} alt="" />
                           <h2 className="color2 text-center">Q2-2022</h2>
                           <ul className='color1' data-aos="fade-right" data-aos-duration="500">
                               <li>Smart contract audit</li>
                               <li>Building a strong community</li>
                               <li>Private sale</li>
                               <li>Dex Launch</li>
                               <li>Pancakeswap listing</li>
                               <li>Coinmarketcap, Coingecko listing</li>
                               <li>Sports based utility</li>
                               <li>Staking feature at Launch</li>
                           </ul>
                        </div>

                        <div className="col-md-3 text-center">
                           <img src={roadmap} alt="" />
                           <h2 className="color2 text-center">Q1-2022</h2>
                           <ul className='color1' data-aos="fade-right" data-aos-duration="500">
                               <li>Grow the community</li>
                               <li>Dashboard to show Rewards, Staking and Portfolio</li>
                               <li>Partnership with other projects</li>
                               <li>Explore more Dex listing options</li>
                               <li>Aggressive marketing of the token, bring influencers</li>
                           </ul>
                        </div>

                        <div className="col-md-3 text-center">
                           <img src={roadmap} alt="" />
                           <h2 className="color2 text-center">Q1-2022</h2>
                           <ul className='color1' data-aos="fade-right" data-aos-duration="500">
                                <li>Goals are meant to achieve, we set higher goals from here to take $BFRC to newer heights</li>
                           </ul>
                        </div>

                </div>
            </div>
        )
    }
}

export default Roadmap