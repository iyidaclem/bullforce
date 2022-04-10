import React from 'react'
import '../css/style.scss'
import drop_down from '../icons/drop_down.png'
import Footer from './Footer'
import Header from './Header'


class Staking extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            
           <div>
               <Header />
                <div className="container-fluid staking">
                <div className="row">

                    <div className="col-lg-12 pt-3">
                        <h3 className="color1">Reward For Passion Staking, dedicated to increasing user staking income</h3>

                        <p className="color1" data-aos="fade-right" data-aos-duration="500">
                        In this tutorial, we recommend using the Trust Wallet & MetaMask wallet, which can be installed as 
                        a Chrome extension or downloaded as a mobile application.
                        </p>

                        <div className="stake-menu">
                            <ul className='color1'>
                                <li>Locked Staking</li>
                                <li>DeFi Staking</li>
                            </ul>
                        </div>

                        <div className="choose-search">
                            <ul className='color1'>
                                <li><small>Choose or search</small></li>
                                <li><input type="checkbox" name="onlyavailable" id="" /><small>Display Available only</small></li>
                                <li><input type="checkbox" name="onlyavailable" id="" /><small>March case</small></li>
                            </ul>
                        </div>

                        <h3 className="color1">Locked Staking</h3>
                            <div className="locked-staking-table color1">
                                <ul className=''>
                                    <li>Token</li>
                                    <li>Estimated APY</li>
                                    <li>Duration(Days)</li>
                                    <li>Minimum Locked Amount</li>
                                </ul>
                                <ul>
                                    <li><input type="checkbox" name="" id="" /> ONE</li>
                                    <li className="apy">11.2%</li>
                                    <li>
                                    <span>30</span>
                                    <span>30</span>
                                    <span>30</span>
                                    </li>
                                    <li>1 ONE</li>
                                    <li><button className="btn bg2 w-100">Stake Now</button></li>
                                </ul>

                                <ul>
                                    <li><input type="checkbox" name="" id="" /> ONE</li>
                                    <li className="apy">11.2%</li>
                                    <li>
                                    <span>30</span>
                                    <span>30</span>
                                    <span>30</span>
                                    </li>
                                    <li>1 ONE</li>
                                    <li><button className="btn bg2 w-100">Stake Now</button></li>
                                </ul>

                                <ul>
                                    <li><input type="checkbox" name="" id="" /> ONE</li>
                                    <li className="apy">11.2%</li>
                                    <li>
                                    <span>30</span>
                                    <span>30</span>
                                    <span>30</span>
                                    </li>
                                    <li>1 ONE</li>
                                    <li><button className="btn bg2 w-100">Stake Now</button></li>
                                </ul>

                                <ul>
                                    <li><input type="checkbox" name="" id="" /> ONE</li>
                                    <li className="apy">11.2%</li>
                                    <li>
                                    <span>30</span>
                                    <span>30</span>
                                    <span>30</span>
                                    </li>
                                    <li>1 ONE</li>
                                    <li><button className="btn bg2 w-100">Stake Now</button></li>
                                </ul>

                                <ul>
                                    <li><input type="checkbox" name="" id="" /> ONE</li>
                                    <li className="apy">11.2%</li>
                                    <li>
                                    <span>30</span>
                                    <span>30</span>
                                    <span>30</span>
                                    </li>
                                    <li>1 ONE</li>
                                    <li><button className="btn bg2 w-100">Stake Now</button></li>
                                </ul>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 staking-area">
                        <h2 className="text-center color1 pt-5">
                            APY Staking
                        </h2>

                        <h4 className="color1">Duration</h4>
                        <ul>
                            <li>30 Days</li>
                            <li>60 Days</li>
                            <li>90 Days</li>
                            <li>120 Days</li>
                        </ul>
                        <h2 className=" color1 pt-5">
                            Locked Amount
                        </h2>

                        <div className="inputarea">
                            <input type="number" name="locked_amount" placeholder="Enter Amount" id="" />
                            <span>|</span>
                            <span className="max color2">Max</span>
                        </div>

                        <p className="text-muted pt-3">Available Amount: 0.000000</p>

                        <h6 className="color1">Locked Amount Limits</h6>
                        <p className="text-muted">Minimum: <span className="color1">0.01 Token</span></p>
                        <p className="text-muted">Maximum: <span className="color1">1200 Token</span></p>

                        <hr className='bg-muted' />
                            <div className="summary-head color1">
                            <span className="">Summary</span>
                            <span className="right">Show more <img src={drop_down} alt="" /></span>
                            </div>
                            <div className="summary-head color1">
                            <span className="text-muted">Est. APY <i className='info'>i</i></span>
                            <span className="show-more ">15.79%</span>
                            </div>
                            
                            <div className="summary-head color1">
                            <span className="text-muted">Est. Interest <i className='info'>i</i></span>
                            <span className="show-more text-success">0 Token</span>
                            </div>

                            <br />
                            <hr className="bg-muted" /><br />

                            <input type="checkbox" name="agree" id="" /> 
                            <span className="color1"> I have read and agree to the APY 
                            Staking Service Agreement</span>
                            <br />
                            <button className="btn bg2 text-center pt-2 m-3 w-75">Confirm</button>

                    </div>
                </div>
            </div>

            <Footer />
           </div>
        )
    }
}

export default Staking
