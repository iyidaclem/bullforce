import React from 'react'
import '../css/style.scss'
import phone from '../images/phone.png'


class Howtobuy extends React.Component {

    render() {
        return (
            <div className="container-fluid Howtobuy pt-5">
                <div className="row">

                    <div className="col-lg-12"><h1 className="color1 text-center">HOW TO BUY</h1></div>

                    <div className="col-lg-8">
                        <h5 className="color1 pt-3">
                        DOWNLOAD TRUST WALLET & METAMASK
                        </h5>
                        <p className="color1" data-aos="fade-right" data-aos-duration="500">
                        In this tutorial, we recommend using the Trust Wallet & MetaMask wallet, 
                        which can be installed as a Chrome extension or downloaded as a mobile application.
                        </p>
                        
                        <h5 className="color1 pt-3">CONFIGURE FOR THE BSC NETWORK</h5>
                        <ul className="color1" data-aos="fade-right" data-aos-duration="500">
                            <li>a) Create a wallet in Trust wallet with Smart chain which means we can trade Binance coin for BullForce ($BFRC)</li>
                            <li>b) Next up we configure MetaMask to work with BSC, meaning we can trade Binance Coin (BNB) for BullForce ($BFRC) 
                                using MetaMask. Heres a handy how to guide: <span className="color2">Add BSC To MetaMask</span></li>
                        </ul>

                        <h5 className="color1 pt-5">BUY BNB</h5>
                        <p className="color1" data-aos="fade-right" data-aos-duration="500">Now you have the wallet set up, you can add some BNB and begin trading. Head to any exchange you are registered to 
                        (Coinbase, kucoin, binance, kraken) and purchase BNB using your native currency</p>

                        <h5 className="color1 pt-5">SEND YOUR BNB TO TRUST WALLET METAMASK</h5>
                        <p className="color1" data-aos="fade-right" data-aos-duration="500">
                        Open your Trust wallet or MetaMask wallet and copy your wallet address – you can find this underneath your account name, it will start with “0x”. 
                        Head to your exchange and withdraw your BNB to your MetaMask wallet address. Send on the BEP20 network.
                        </p>

                        <h5 className="color1 pt-5">TRADE YOUR BNB FOR $BFRC (BULLFORCE)</h5>
                        <p className="color1" data-aos="fade-right" data-aos-duration="500">Go to poocoin using the buy now button below. BULLFORCE is already selected by default. 
                        Connect your wallet by using the “Connect” button in the top right hand corner. Then push trade. Ensure the “Auto slippage” 
                        button is green and then input the number of BNB you would like to trade and hit swap.</p>

                        <br />
                        
                        <p className="color1">
                        Go to <span className="color2" data-aos="fade-right" data-aos-duration="500">https://pancakeswap.finance/ </span> Connect your wallet by using the “Connect” button in the top right hand corner. 
                        In currency section select BNB in the top and in the bottom select currency and paste BULLFORCE contract, set the slippage 
                        and hit swap.

                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src={phone} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Howtobuy