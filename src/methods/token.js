import { Actor } from '@dfinity/agent';
import { idlFactory } from '../idlFactory.js';

export function getActor(canisterId, agent) {
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
}

export async function tokenTrade({ actor, tokenid, typeofTrade, amount, settings }) {
  const tradeRequest = {
    tokenid,
    typeof: { [typeofTrade]: null }, // buy / sell
    amount,
    settings: settings ?? [],
  };
  return actor.token_trade(tradeRequest);
}

export async function getBalance({ actor, user, context, tokenid }) {
  return actor.getBalance(user, context, tokenid);
}

export async function tokenSwap({ actor, tokenid_from, tokenid_to, amount_from, settings }) {
  const swapRequest = {
    tokenid_from,
    tokenid_to,
    amount_from,
    settings: settings ?? [],
  };
  return actor.token_swap(swapRequest);
}
