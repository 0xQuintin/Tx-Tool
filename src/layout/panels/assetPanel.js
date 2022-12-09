import { getBalance, betterGetter } from '../../utils/findERC20';
import { useRef, useState } from 'react';
import { utils } from 'ethers';
import AssetTab from '../blocks/assetTabs';

export const AssetsPanel = () => {

    let contractInput = useRef(null);
    let [tokenBalance, setTokenBalance] = useState("");
    let [tokenSymbol, setTokenSymbol] = useState("");
    let [asset, setAsset] = useState([]);


    let addAsset = async () => {
        setTokenSymbol(tokenSymbol = await betterGetter()[0]);
        setTokenBalance(tokenBalance = await betterGetter()[1]);
        setAsset(asset.concat(
        <div class='card border-secondary bg-secondary'>
        <div class='card-header bg-primary text-light'>{tokenSymbol}</div>
        <div class='card-body bg-primary text-light'>{tokenBalance}</div>
        </div>
        ));
    }

    return(
        <div class='container-fluid' style={{paddingTop: '15px', paddingBottom: '15px'}}>
            <div class='row'>
                <div class='col-12'>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control bg-dark border-dark text-light" ref={contractInput} placeholder="contract address"></input>
                        <button class="btn btn-primary" type="button" onClick={addAsset}>Get balance</button>
                    </div>
                    {asset}
                </div>
            </div>
        </div>
    );
}

export default AssetsPanel;

/*
        let finderResult = await getBalance(contractInput.current.value);
        setTokenBalance(finderResult[0]);
        const round = Math.round(utils.formatEther(tokenBalance) * 100) / 100;
        tokenBalance > 0 ? document.getElementById('contractSpan').innerHTML = round : document.getElementById('contractSpan').innerHTML = "0";
        document.getElementById('nameSpan').innerHTML = finderResult[1];
*/