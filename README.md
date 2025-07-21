# ODIN 4DEV ICP ([odin4dev](https://odin4dev.com))
---

## 🚀 Features

* 💱 Trade tokens (`buy` / `sell`)
* 🔄 Swap between tokens
* 💰 Query token balances
* 🧩 Typed support for complex Motoko canister interfaces via `idlFactory`

---

## 📦 Installation


### Required Libraries
Make sure you install the following dependencies:

```bash
npm install @dfinity/agent @dfinity/candid
```

To use the SDK directly:

```bash
npm install icp-odin-canister
# or
pnpm add icp-odin-canister
```

> You can also clone this repo directly if you are working with local agents or development mode.

---

## 🛠 Usage

```js
import { HttpAgent } from '@dfinity/agent';
import {
  getActor,
  tokenTrade,
  getBalance,
  tokenSwap,
} from '';

const canisterId = 'cpbhu-5iaaa-aaaad-aalta-cai';
const agent = new HttpAgent({ host: 'https://icp0.io' });

(async () => {
  const actor = getActor(canisterId, agent);

  // Token Trade (buy)
  await tokenTrade({
    actor,
    tokenid: 'btc-token-id',
    typeofTrade: 'buy',
    amount: { btc: BigInt(100000) },
  });

  // Query Balance
  const balance = await getBalance({
    actor,
    user: 'principal-id',
    context: 'btc',
    tokenid: 'btc-token-id',
  });
  console.log(balance);

  // Token Swap
  await tokenSwap({
    actor,
    tokenid_from: 'btc-token-id',
    tokenid_to: 'ckbtc-token-id',
    amount_from: BigInt(50000),
  });
})();
```

---

## 📁 Project Structure

```bash
icp-odin-canister/
├── src/
│   ├── idlFactory.js
│   └── methods/
│       └── token.js
├── examples/
│   └── example.js
```

---

## 🧠 Canister Info

* **Canister Controllers:**

  * `cpbhu-5iaaa-aaaad-aalta-cai`
  * `z5ukj-lyaaa-aaaaj-azw6a-cai`
  * `2daxo-giaaa-aaaap-anvca-cai`
  * `wbfpg-66qlo-3bwue-pgh2b-oywpr-45i3b-vtmdp-hivfe-r7h5m-ktja2-yqe`

* **Subnet ID:**

  * `qdvhd-os4o2-zzrdw-xrcv4-gljou-eztdp-bj326-e6jgr-tkhuc-ql6v2-yqe`

* **Module Hash:**

  * `5061501afcbcc9f4675cf58fb757188ebcfc221def7b9b6fcc4b210b09ab54ee`

---

## 📄 License

MIT
