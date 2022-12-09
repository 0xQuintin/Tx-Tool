import { useState, useRef } from "react"
import { providers, ethers, utils} from "ethers";
import { truncateAddress } from "../../utils/truncateAddress.js";
import { sendUTF8, txHash } from "../../utils/sendUTF8.js";
import { ethPersonalSign } from '../../utils/ethPersonalSign'
import { provider, wallet, privateKey, derivationPath } from "../../utils/definition.js";
import { Toast } from "bootstrap";
import { HDNode } from "ethers/lib/utils.js";

export const ToolsPanel = () => {

    let [address, setAddress] = useState("");
    let [derivedAddress, setDerived] = useState("");
    let [resultHash, setHash] = useState("");
    let addressInput = useRef(null);
    let messageInput = useRef(null);
    let personalInput = useRef(null);
    let derivationInput = useRef(null);
    let UTF8Toast = document.getElementById('txToast');
    const toastTx = new Toast(UTF8Toast);


    const connectDevice = async () => {
        setAddress(address = (await truncateAddress(wallet.address)).toString());
    }

    const sendUTF8Message = async () => {
        await sendUTF8(wallet, wallet.address, addressInput.current.value, messageInput.current.value);
        setHash(resultHash = txHash);
        toastTx.show();
    }

    const deriveAddress = async () => {

       setDerived(derivedAddress = wallet.address);
    }

    const personalSign = async () => {
        //ethPersonalSign(personalInput.current.value);
    }

    return (
        <div class='container-fluid text-center' style={{paddingTop: '15px', paddingBottom: '15px'}}>
            <div class='row'>
                <div class="accordion accordion-flush" id="tool-accordions">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="UTF8-header">
                            <button class="accordion-button collapsed bg-primary text-light border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#UTF8-collapse" aria-expanded="false" aria-controls="UTF8-collapse">
                                Send a UTF8 message onchain.
                            </button>
                        </h2>
                        <div id="UTF8-collapse" class="accordion-collapse collapse" aria-labelledby="UTF8-header" data-bs-parent="#tool-accordions">
                            <div class="accordion-body bg-secondary">
                                <div class='container-fluid'>
                                    <div class='row'>
                                        <div class='col-12'>
                                            <p class='text-light'>Enter a recipient address and message to send.</p>
                                        </div>
                                    </div>
                                    <div class='row' style={{paddingBottom: '10px'}}>
                                        <div class='col-6'>
                                            <div class='input-group'>
                                                <input type='text' class='form-control bg-dark text-light border-dark' placeholder='Recipient address' ref={addressInput}></input>
                                            </div>
                                        </div>
                                        <div class='col-6'>
                                        <input type='text' class='form-control bg-dark text-light border-dark' placeholder='Message to send' ref={messageInput}></input>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <div class='col-12'>
                                            <button type='button' class='btn btn-primary' onClick={sendUTF8Message}>Send</button>
                                        </div>
                                        <div class="toast align-items-center" role="alert" id="txToast" aria-live="assertive" aria-atomic="true" style={{paddingTop: '5px'}}>
                                            <div class="d-flex">
                                              <div class="toast-body">
                                                TxHash: {resultHash}
                                              </div>
                                              <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="derive-header">
                            <button class="accordion-button collapsed bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#derive-collapse" aria-expanded="false" aria-controls="derive-collapse">
                                Generate address from any derivation path.
                            </button>
                        </h2>
                        <div id="derive-collapse" class="accordion-collapse collapse" aria-labelledby="derive-header" data-bs-parent="#tool-accordions">
                            <div class="accordion-body bg-secondary">
                            <div class='container-fluid'>
                                    <div class='row'>
                                        <div class='col'>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control bg-dark border-dark text-light" ref={derivationInput} placeholder="m/44'/60'/0'/0" aria-label="m/443'/60'/0'/0" aria-describedby="derivation-button"></input>
                                                <button class="btn btn-primary" type="button" onClick={deriveAddress}>generate</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <span class='text-light'>Address: {derivedAddress}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="personal-header">
                            <button class="accordion-button collapsed bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target="#personal-collapse" aria-expanded="false" aria-controls="personal-collapse">
                                Sign personal message.
                            </button>
                        </h2>
                        <div id="personal-collapse" class="accordion-collapse collapse" aria-labelledby="personal-header" data-bs-parent="#tool-accordions">
                            <div class="accordion-body bg-secondary">
                                <div class='container-fluid'>
                                    <div class='row'>
                                        <p class='text-light'>Enter a message to sign.</p>
                                    </div>
                                    <div class='row'>
                                        <div class='col'>
                                            <div class='input-group mb-3'>
                                                <input type="text" class='form-control bg-dark border-dark text-light' ref={personalInput} placeholder='Message'></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='row'>
                                        <button type="button" class='btn btn-primary' onClick={personalSign}>Sign</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
    </div>
)}

export default ToolsPanel;