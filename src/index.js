import { web3, NodeProvider, ONE_ALPH, DUST_AMOUNT, ALPH } from '@alephium/web3'
import { getDefaultAlephiumWallet } from "@alephium/get-extension-wallet"
import { Funnel } from './artifacts/ts/Funnel'
import axios from "axios";

var wallet;

async function connectWallet() {
  // Returns the `window.alephiumProviders.alephium` object after user selects
  // the extension wallet.
  const windowAlephium = await getDefaultAlephiumWallet()
  // Authenticate user to the current dApp, return the selected account
  const selectedAccount = await windowAlephium?.enable()

  if (windowAlephium && selectedAccount) {
    console.log(selectedAccount);
    wallet = windowAlephium;
  }
  else {
    console.log('connection to alephium wallet failed');
  }
}
window.connectWallet = connectWallet;

async function toAbout(){
    window.location.href = './about.html';
}
window.toAbout = toAbout;

async function toHome(){
    window.location.href = './';
}
window.toHome = toHome;

async function toFunnels(){
    window.location.href = './funnelboard.html';
}
window.toFunnels = toFunnels;

async function toFunnel(){
    window.location.href = './funnel.html';
}
window.toFunnel = toFunnel;

async function a() {
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agents", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.a = a;


async function d() {
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await axios.post("https://gm-serve3.onrender.com/api/funnalph/payee/entries", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.d = d;


async function b() {
try {
        const data = {
            payer: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/payer/entries", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.b = b;

async function c() {
var now = new Date().toUTCString();
try {
        const data = {
            pId: '14cLiRion2B2H1aFBbyPraNvbmJeks2YaaLr8KhMdacAnW09e0088392',
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
            payer: '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW',
            agent: 'none',
            amount: '7',
            timestamp: now,
        }
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/entry", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.c = c;


async function e() {
    var now = new Date().toUTCString();
    try {
        const data = {
            aId: '14cLiRion2B2H1aFBbyPraNvbmJeks2YaaLr8KhMdacAnW09e0088392',
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
            agent: '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW',
            total: '20',
            timestamp: now,
        }
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agent/set", {
            data: data,
        });
        console.log(response.data);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hi");
}
window.e = e;


async function f() {
    var flag = false;
    var t = "";
    try {
        const data = {
            payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
        }
        const response = await axios.post("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agents", {
            data: data,
        });
        var i = 0;
        while (i < response.data.agents.length){
            if (response.data.agents[i].agent == '18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW'){
                flag = true;
                t = response.data.agents[i].total;
                break;

            }
            i++;
        }
    }
    catch (err) {
        console.log(err);
    }
    if (!flag){
        throw "agent doesn't exist for payee";
    }
    else {
        try {
            console.log(t);
            const data = {
                payee: '14cLiRion2B2H1aFBbyPraNvWz1SUufiU2cgmWiqBNyAY',
                agent: "18PtRKysjGKNQJijidydDH6bmJeks2YaaLr8KhMdacAnW",
                amount: t,
                added: "7",
            }
            const response = await axios.put("https://cors-anywhere.herokuapp.com/https://gm-serve3.onrender.com/api/funnalph/agent/update", {
                data: data,
            });
        }
        catch (err){
            console.log(err);
        }
    }

}
window.f = f;

async function loadFunnelboard(){
    console.log("hi");
    var el = document.getElementById("nvbr");
    var w = el.clientWidth;
    console.log(w);
    if (w < 600) {
        document.getElementById("ht3").style.fontSize = "320%";
        document.getElementById("ht1").style.width = "60%";
    }

}
window.loadFunnelboard = loadFunnelboard;

async function create_entry(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const funnelAddress = 'zPiJiMa3jZVKMjBtTK7eUFUvWHH8AsXEeBQxgAtoa5yU'
    const fun = Funnel.at(funnelAddress)
    console.log(wallet);
    try {
        const res = await fun.transact.createEntry({
        signer: wallet,
        args: { amt: 2n, to: '1KMwDH1yqkK51jLBmWWAS5NwbLa59sEoyhanTtXRwgUU', ag: '1KMwDH1yqkK51jLBmWWAS5NwbLa59sEoyhanTtXRwgUU'},
        attoAlphAmount: DUST_AMOUNT + (ONE_ALPH * 2n)/10n
        //this amount is 0.10 ALPH, needed to insert into one mapping in Ralph. if there were more mappings, it 
        //would have been a multiple of this
      })
        console.log("funnel entry created successfully!");
    }
    catch (err) {
        console.log(err);
        console.log("funnel entry creation task failed successfully!");
    }
    
}
window.create_entry = create_entry;
