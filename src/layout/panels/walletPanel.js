
export const WalletPanel = () => {
    return(
        <div class='card-body align-contents-center scroll' style={{height: '285px'}}>           
            <div class='card border-secondary bg-secondary'>
                <div class='card-header bg-primary text-light'>Recieve Ξ</div>
                <div class='card-body bg-primary text-light'>
                    <span class='text-light'>1.03Ξ - TxHash: 0x7ba9...93e1⧉</span>
                </div>
            </div>
                <br/>
            <div class='card border-secondary bg-secondary'>
                <div class='card-header text-light bg-primary'>Send ERC-20</div>
                <div class='card-body bg-primary '>
                    <span class='text-light'>-20 SHIB - TxHash: 0xab1f...723b⧉</span>
                </div>
            </div>
                <br/>
            <div class='card border-secondary bg-secondary'>
                <div class='card-header bg-primary text-light'>Recieve Ξ</div>
                <div class='card-body bg-primary text-light'>
                    1.03Ξ - TxHash: 0x7ba9...93e1⧉
                </div>
            </div>
        </div>
        
    );
}

export default WalletPanel;
