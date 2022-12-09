import { provider, wallet } from "./definition";
import { utils } from "ethers";

export let txHash;

export const sendUTF8 = async (_signer, _connectedAddress, _targetAddress, _message) => {

    let _gasLimit;
    let _currentMaxFee;
    let _currentMaxPriority;

    await provider.getFeeData().then((data) => {
        _currentMaxFee = data.maxFeePerGas;
        _currentMaxPriority = data.maxPriorityFeePerGas;
    });

    let UTF8Tx = {
        type: 2,
        chainId: 5,
        from: _connectedAddress,
        to: _targetAddress,
        value: utils.hexlify(1),
        data: utils.hexlify(utils.toUtf8Bytes(_message)),
        nonce: await provider.getTransactionCount(_connectedAddress),
        gasLimit: _gasLimit,
        maxFeePerGas: _currentMaxFee,
        maxPriorityFeePerGas: _currentMaxPriority
    }

    await provider.estimateGas(UTF8Tx)
    .then(data => {
        _gasLimit = data._hex;
    });

    UTF8Tx = {
        type: 2,
        chainId: 5,
        from: _connectedAddress,
        to: _targetAddress,
        value: utils.hexlify(1),
        data: utils.hexlify(utils.toUtf8Bytes(_message)),
        nonce: await provider.getTransactionCount(_connectedAddress),
        gasLimit: _gasLimit,
        maxFeePerGas: _currentMaxFee,
        maxPriorityFeePerGas: _currentMaxPriority
    }

    const signedUTF8Tx = await wallet.signTransaction(UTF8Tx);
    await provider.sendTransaction(signedUTF8Tx)
    .then(data=> {
        txHash = data.hash;
        console.log("Transaction hash:", data.hash);
    })
}

export default sendUTF8;