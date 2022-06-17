import {useState, useEffect} from 'react'
import { ethers } from "ethers";

export default function ConnectMetamask() {

    const [errorMessage, setErrorMessage] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", accountsChanged);
        window.ethereum.on("chainChanged", chainChanged);
        }
    }, []);

    const connectHandler = async () => {
        if (window.ethereum) {
        try {
            const res = await window.ethereum.request({
            method: "eth_requestAccounts",
            });
            await accountsChanged(res[0]);
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            
            const addr = await signer.getAddress();

            setUserAddress(addr.toString());
        } catch (err) {
            console.error(err);
            setErrorMessage("There was a problem connecting to MetaMask");
        }
        } else {
        setErrorMessage("Install MetaMask");
        }
        
    };

    const accountsChanged = async (newAccount) => {
        setAccount(newAccount);
        try {
        const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [newAccount.toString(), "latest"],
        });
        setBalance(ethers.utils.formatEther(balance));
        } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");
        }
    };

    const chainChanged = () => {
        setErrorMessage(null);
        setAccount(null);
        setBalance(null);
    };

    return(
        <button className="btn-connectwallet" onClick={connectHandler}>"{account == null ? "Connect Metamask" : "Metamask Connected"}"</button>
    );
}