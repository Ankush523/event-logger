const ethers = require ("ethers");
const addABI = require("../frontend/src/ABI/addABI.json")
require("dotenv").config()


async function main() {
    const contractAddr = "0xc21d985f43520741CBB25C58EbCC78efDAB49E86";
    const provider = new ethers.providers.WebSocketProvider("wss://eth-goerli.g.alchemy.com/v2/CxL97XWU2bhy83jkLmdcBZjCSyJwlkVp");
    const addContract = new ethers.Contract(contractAddr,addABI,provider)
    addContract.on("Addition",(owner,sum) => {
        
    })
}