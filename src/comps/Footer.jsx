import React from 'react'
import '../css/style.scss'
import fb from '../icons/fb.png'
import tw from '../icons/tw.png'
import tg from '../icons/tg.png'
import youtube from '../icons/youtube.png'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }



    render() {
        return (
            <div className="">
                <div className="container-fluid pt-5 pb-5 footer">
                    <div className="row ">
                        <div className="col-lg-6">
                            <p className="color1">Copyright © {new Date().getFullYear()} The BullForce, All rights reserved</p>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={tg} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer