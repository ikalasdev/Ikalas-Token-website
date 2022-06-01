import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { _tr } from "../services/translate";



const Addkik = () => {


const tokenAddress = '0x28E41ccB451F0E813403Cc91Cc49B0ca8178F3f2';
const tokenSymbol = 'KIK';
const tokenDecimals = 18;
const tokenImage = 'https://ikalas.com/logo-light.png';


async function addToken() 
{
    
    try {
        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        });

        if (wasAdded) {
            console.log('Thanks for your interest!');
        } else {
            console.log('HelloWorld Coin has not been added');
        }
    } catch (error) {
        alert("An error occurred. Are you sure you have the metamask extension?");
        console.log(error);
    }
}


  return (
    <>
    <div>
        <button onClick={addToken} className="AddButton">{_tr("ButtonAddKIK")}</button>
    </div>
    </>
  );
};

export default Addkik;