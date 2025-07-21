import { HttpAgent } from '@dfinity/agent';
import {
  getActor,
  tokenTrade,
  getBalance,
  tokenSwap,
} from '../src/methods/token.js';

const canisterId = 'cpbhu-5iaaa-aaaad-aalta-cai';
const agent = new HttpAgent({ host: 'https://icp0.io' });

const run = async () => {
  const actor = getActor(canisterId, agent);

  try {
    // token_trade (buy)
    const tradeResult = await tokenTrade({
      actor,
      tokenid: 'btc-token-id',
      typeofTrade: 'buy', // buy / sell
      amount: { btc: BigInt(100_000) },
    });
    console.log('Trade result:', tradeResult);

    // getBalance
    const balance = await getBalance({
      actor,
      user: 'user-principal-id',
      context: 'btc',
      tokenid: 'btc-token-id',
    });
    console.log('Balance:', balance);

    // token_swap
    const swapResult = await tokenSwap({
      actor,
      tokenid_from: 'btc-token-id',
      tokenid_to: 'ckbtc-token-id',
      amount_from: BigInt(50_000),
    });
    console.log('Swap result:', swapResult);
  } catch (e) {
    console.error('Error:', e);
  }
};

run();
