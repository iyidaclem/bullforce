import React from 'react'
import '../css/style.scss'
import Header from '../comps/Header'
import Overview from './Overview'
import Footer from '../comps/Footer'
import Staking from '../comps/Staking'
import Roadmap from '../comps/Roadmap'
import Tokenomics from '../comps/Tokenomics'
import Howtobuy from '../comps/Howtobuy'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "0"
        }
    }

    render() {
        return (
            <div>
                <Header App={this} />
                {this.state.currentPage=="0"&&<Overview  App={this} />}
                {this.state.currentPage=="1"&&<Roadmap  App={this} />}
                {this.state.currentPage=="2"&&<Tokenomics  App={this} />}
                {this.state.currentPage=="3"&&<Howtobuy  App={this} />}
                {this.state.currentPage=="4"&&<Staking  App={this} />}
                <Footer />
            </div>
        )
    }
}
AOS.init();
export default Main