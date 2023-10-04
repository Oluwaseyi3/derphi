import useSWR from 'swr';
import useKeepSWRDataLiveAsBlocksArrive from './useKeepSWRDataLiveAsBlocksArrive';
import { Contract } from '@ethersproject/contracts';
import { useWeb3React } from '@web3-react/core';

function getPendingBalance(token: Contract) {
    return async (address: any, _: any) => {
        return token.balanceOf(address);
    };
}
export default function useRawBalance(token: Contract | undefined, suspense = false) {
    const { account } = useWeb3React();
    const shouldFetch = typeof account === 'string' && !!token;
  
    // Log the SWR key for debugging
    // console.log("SWR Key:", shouldFetch ? ['UnstakedBalance', account, token?.address] : null);
  
    const { data: balance, error, isLoading } = useSWR(
      shouldFetch ? ['UnstakedBalance', account, token?.address] : null, // Use token?.address to handle possible undefined token
      getPendingBalance(token!),
      {
        suspense,
      }
    );
  
    // Log the balance and error for debugging
    // console.log("Balance:", balance);
    // console.log("Error:", error);
  
    return {
      balance,
      isLoading: shouldFetch && isLoading, // Check isLoading
      isError: !!error,
    };
  }
  
  
  
  
  
  