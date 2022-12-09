import { providers, ethers } from "ethers";
import { createContext } from "react";

export const privateKey = "6a4c924e7725fde4dd52f5caf91803e9e7496853fac4bdf9a75466f1903ec6da";
export const APIKey = "bV4BZip2EDoW9h7hnRCVzhsrVb1hptjD";
export const provider = new providers.AlchemyProvider("goerli", APIKey);
export const wallet = new ethers.Wallet(privateKey, provider);
export const connectedAddress = wallet.address;
export const derivationPath = "m/44'/60'/0'/0";

export const WalletAddress = createContext("");

export default WalletAddress;