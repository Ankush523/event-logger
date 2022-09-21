import React from 'react';
import { useContract } from 'wagmi';
import addABI from '../ABI/addABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xc21d985f43520741CBB25C58EbCC78efDAB49E86',
        contractInterface: addABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;