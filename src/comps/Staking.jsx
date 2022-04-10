import React from 'react'
import '../css/style.scss'
import drop_down from '../icons/drop_down.png'
import Footer from './Footer'
import Header from './Header'
import fire from '../icons/fire.png'
import premier from '../icons/premier.png'
import laliga from '../icons/laliga.png'
import bundesliga from '../icons/bundesliga.png'
import chelsea from '../icons/chelsea.png'
import realmadrid from '../icons/realmadrid.png'
import football_field from '../images/football_field.png'
import close from '../icons/close_toggler.png'


class Staking extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            match_selected:false
        }
        this.predict = this.predict.bind(this)
    }

    predict(){
        this.setState({match_selected:!this.state.match_selected});
    }

    render() {
        return (
            
           <div>
            <Header />
               {!this.state.match_selected && <div className="container-fluid staking">
                    <div className="row">
                        <div className="col-lg-12 staking_div">
                           {/* <img src={football_field} alt="" className='w-100'/> */}
                           <h1 className="color1 match_list_text">Match List</h1>
                        </div>
                        
                        <div className="col-lg-12 match_category">
                            <ul>
                                <li className='color1'><img src={fire} alt="" className='league_icons' /> <span>Hot Games</span></li>
                                <li className='color1'><img src={premier} alt="" className='league_icons' /> <span>Premier League</span></li>
                                <li className='color1'><img src={laliga} alt="" className='league_icons' /> <span>Laliga</span></li>
                                <li className='color1'><img src={bundesliga} alt="" className='league_icons' /> <span>Bundesliga</span></li>

                            </ul>
                        </div>

                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 predict_area">
                            <div className="header color1 m-3"><img src={laliga} alt="" className='league_icons' /> <span>LaLiga</span>
                                <span className='status bg-danger'>Live</span>
                            </div>
                            <div className="body text-center">
                                    <span onClick={()=>{this.predict()}} className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span onClick={()=>{this.predict()}} className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><i className='color2'>12 April, 2022</i>
                                    <br />
                                    <span className="text-light">Tap  to predict</span>
                                    <br />
                                    <hr className=' ' />
                            </div>

                            <div className="header color1 m-3"><img src={laliga} alt="" className='league_icons' /> <span>LaLiga</span>
                                <span className='status bg-success'>Predict</span>
                            </div>
                            <div className="body text-center">
                                    <span onClick={()=>{this.predict()}} className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span onClick={()=>{this.predict()}} className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><i className='color2'>12 April, 2022</i>
                                    <br />
                                    <span className="text-light">Tap  to predict</span>
                                    <br />
                                    <hr className=' ' />
                            </div>

                            <div className="header color1 m-3"><img src={laliga} alt="" className='league_icons' /> <span>LaLiga</span>
                                <span className='status bg-danger'>Live</span>
                            </div>
                            <div className="body text-center">
                                    <span onClick={()=>{this.predict()}} className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span onClick={()=>{this.predict()}} className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><i className='color2'>12 April, 2022</i>
                                    <br />
                                    <span className="text-light">Tap  to predict</span>
                                    <br />
                                    <hr className=' ' />
                            </div>

                            <div className="header color1 m-3"><img src={laliga} alt="" className='league_icons' /> <span>LaLiga</span>
                                <span className='status bg-danger'>Live</span>
                            </div>
                            <div className="body text-center">
                                    <span onClick={()=>{this.predict()}} className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span onClick={()=>{this.predict()}} className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><i className='color2'>12 April, 2022</i>
                                    <br />
                                    <span className="text-light">Tap  to predict</span>
                                    <br />
                                    <hr className=' ' />
                            </div>

                            <div className="header color1 m-3"><img src={bundesliga} alt="" className='league_icons' /> <span>Bundesliga</span>
                                <span className='status bg-danger'>Live</span>
                            </div>
                            <div className="body text-center">
                                    <span onClick={()=>{this.predict()}} className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span onClick={()=>{this.predict()}} className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><i className='color2'>12 April, 2022</i>
                                    <br />
                                    <span className="text-light">Tap  to predict</span>
                                    <br />
                                    <hr className=' ' />
                            </div>
                        </div>
                    </div>
                </div>}

               {this.state.match_selected && <div className="final_step container-fluid predict_area">

                   <div className="row">
                       <div className="col-lg-2"></div>
                       <div className="col-lg-8">
                       <img src={close} alt="" className='close_toggler' />
                <div className="header color1 m-3"><img src={bundesliga} alt="" className='league_icons' onClick={()=>{this.predict()}} /> <span>Bundesliga</span>
                                <span className='status bg-danger'>Live</span>
                            </div>

                            <div className="body text-center">
                                    <span  className="team team1 color1"><img src={realmadrid} alt="" className='league_icons' /> <span>Real Madrid</span></span> 
                                    <span className="time text-info m-3">20:08</span> 
                                    <span className="team team2 color1"><img src={chelsea} alt="" className='league_icons' /> <span>Chelsea</span></span>
                                    <br /><br /><input type="number" placeholder="20RFP"/><br /><br />
                                    <button className="btn bg2 w-50 text-center">Submit</button>
                                    <br />
                                    <hr className=' ' />
                            </div>
                       </div>
                   </div>
                </div>}

            <Footer />
           </div>
        )
    }
}

export default Staking

