import ToolsPanel from "./panels/toolsPanel";
import WalletPanel from "./panels/walletPanel";
import AssetsPanel from "./panels/assetPanel";
import { wallet } from "../utils/definition";

export const Body = ({ethBalance, addressSet}) => {

    const copyAddress = async () => {
        await navigator.clipboard.writeText(wallet.address);
        console.log(wallet.address + "has been saved");
    }

    return (
        <div class='container-fluid' style={{paddingTop: '15px'}}>
            <div class='row'>
                <div class='col-12'>
                    <div class='card bg-secondary'>
                        <div class='card-body'>
                            <div class='row' style={{paddingTop: '5px'}}>
                                <h1 class='display-3 text-light'>{ethBalance} Ξ</h1>
                            </div>
                            <div class='row' style={{paddingTop: '15px'}}>
                                <div class='col-3'></div>
                                <div class='col-3'>
                                    <button type="button" class='btn text-light bg-primary' style={{width: '80px'}}>Send</button>
                                </div>
                                <div class='col-3'>
                                    <button type="button" class='btn text-light bg-primary' onClick={copyAddress} style={{width: '80px'}}>Receive</button>
                                </div>
                                <div class='col-3'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row' style={{paddingTop: '15px'}}>
                <div class='col-12 '>
                    <div class='card bg-secondary border-dark'>
                        <ul class='nav nav-tabs align-contents-center text-light bg-dark'>
                            <li class='nav-item' role='presentation' style={{width: '33%'}}>
                                <button class='nav-link text-light w-100 bg-secondary' id='tools-tab' data-bs-toggle='tab' data-bs-target='#tools-tab-panel' type='button' role='tab'>Tools</button>
                            </li>
                            <li class='nav-item' style={{width: '33%'}}>
                                <button class='nav-link w-100 active text-light bg-secondary' id='wallet-tab' data-bs-toggle='tab' data-bs-target='#wallet-tab-panel' type='button' role='tab'>Wallet</button>
                            </li>
                            <li class='nav-item' style={{width: '34%'}}>
                                <button class='nav-link w-100 text-light bg-secondary' id='assets-tab' data-bs-toggle='tab' data-bs-target='#assets-tab-panel' type='button' role='tab'>Assets</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade" id="tools-tab-panel" role="tabpanel" tabindex="0"><ToolsPanel /></div>
                            <div class="tab-pane fade show active" id="wallet-tab-panel" role="tabpanel" tabindex="0"><WalletPanel /></div>
                            <div class="tab-pane fade" id="assets-tab-panel" role="tabpanel" tabindex="0"><AssetsPanel /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;









