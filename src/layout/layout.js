import Header from "./header";
import Body from "./body";
import { useState } from "react";

const Layout = () => {
    let [addressSet, setAddress] = useState("");
    let [ethBalance, setEthBalance] = useState("");

    return (
            <div className='container base' style={{height: '100%'}}>
                <div class='row h-20'>
                    <Header setEthBalance={setEthBalance} setAddress={setAddress} addressSet={addressSet} />
                </div>
                <div class='row h-80'>
                    <Body ethBalance={ethBalance} addressSet={addressSet}/>
                </div>
            </div>
    );
}

export default Layout;