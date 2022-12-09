import { wallet } from "../utils/definition.js";
import { useState, React } from "react";
import { truncateAddress } from "../utils/truncateAddress.js";
import { utils } from "ethers";

export const Header = ({setEthBalance, setAddress, addressSet}) => {

    const connectDevice = async () => {

        const bal = utils.formatEther(await wallet.getBalance());
        const round = Math.round(bal * 10000) / 10000;

        setAddress(addressSet = (await truncateAddress(wallet.address)).toString());
        document.getElementById('addressDiv').innerHTML = addressSet;
        setEthBalance((round).toString());
        
    }

    return (
        <div class='container-fluid center-text align-items-center'>
            <div class='row align-items-center bg-secondary' style={{height: '50px'}}>
                <div class="col-4">
                    <h5 class='text-light'>Tx-Tool.eth</h5>
                </div>
                <div class="col-4">
                </div>
                <div class="col-4 text-light" id="addressDiv">
                    <button type="button" class='btn btn-primary' onClick={connectDevice}>Connect</button>
                </div>
            </div>
        </div>
)}

export default Header;