import React from 'react'
import '../css/style.scss'
import nfl from '../images/nfl.png'
import bullvideo from '../video/bullforce.mp4';


class Overview extends React.Component {

    render() {
        return (
            <div className="container-fluid overview">
                <div className="row welcome">
                    <video autoPlay loop muted id="myVideo">
                        <source src={bullvideo} type="video/mp4" />
                    </video>
                    <span className="content">
                        
                    <span className="button-group">
                    <button className="btn bg2 ">Sports DAPPS</button>
                        <button className="btn bg2 ">Buy Now</button>
                    </span>
                    </span>
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
                    <div className="col-lg-6 nfl_div d-none" >
                        <img src={nfl} alt="" className='w-75' data-aos="zoom-in-up" data-aos-duration="1000" />
                    </div>
                </div>
                </div>
        )
    }
}

export default Overview