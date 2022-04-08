import React from 'react'
import '../css/style.scss'
import logo from '../icons/logo.png'
import toggler from '../icons/navbar_toggler.png'
import close from '../icons/close_toggler.png'
import drop_down from '../icons/drop_down.png'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show_nav:false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar(){
        this.setState({show_nav:!this.state.show_nav})
    }
    swichpage(num){
        this.props.App.setState({currentPage:`${num}`})
    }

    render() {
        return (
            <div className="bg1 navbar">
                <img src={logo} alt="" className='logo' />
                <ul className={`nav-items ${this.state.show_nav?"show":""}`} data-aos={!this.state.show_nav?("flip-right"):""} data-aos-duration="1000">
                    <li className={"item"} onClick={()=>{this.swichpage(0);this.toggleNavbar()}}>Overview</li>
                    <li className={"item"} onClick={()=>{this.swichpage(1);this.toggleNavbar()}}>Roadmap</li>
                    <li className={"item"} onClick={()=>{this.swichpage(2);this.toggleNavbar()}}>Tokenomics</li>
                    <li className={"item"} onClick={()=>{this.swichpage(3);this.toggleNavbar()}}>How to buy</li>
                    <li className={"item"} onClick={()=>{this.swichpage(4);this.toggleNavbar()}}>Staking</li>
                    <li className={"item"} onClick={()=>{this.swichpage(4);this.toggleNavbar()}}>WhitePaper</li>
                </ul>
                <div className="lang">
                    <span className="lang_add">+</span>
                    <span className='en'>English</span>
                    <img src={drop_down} alt="" className='drop_down' />
                </div>

                {!this.state.show_nav?<img onClick={()=>this.toggleNavbar()} src={toggler} alt="" className='navbar_toggler' />:
                <img onClick={()=>this.toggleNavbar()} src={close} alt="" className='close_navbar' />}

            </div>
        )
    }
}

export default Header