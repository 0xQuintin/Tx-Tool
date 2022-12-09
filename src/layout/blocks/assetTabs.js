
export const AssetTab = ({tokenSymbol, tokenBalance}) => {

    return(
        <div class='row'>
            <div class='col-12 text-light'>
                <div class='card border-secondary bg-secondary'>
                    <div class='card-header bg-primary text-light'>{tokenSymbol}</div>
                    <div class='card-body bg-primary text-light'>{tokenBalance}</div>
                </div>
            </div>
        </div>
    );
}

export default AssetTab;
