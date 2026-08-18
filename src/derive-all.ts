import { Buffer } from 'buffer';
import * as crypto from 'node:crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { createKeystore, HDWallet, Roles } from '@midnight-ntwrk/wallet-sdk';
import { NetworkId } from './network.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function deriveAddress(network: NetworkId, seedHex: string): string {
  setNetworkId(network);
  const hdWallet = HDWallet.fromSeed(Buffer.from(seedHex, 'hex'));
  if (hdWallet.type !== 'seedOk') throw new Error('Invalid seed');
  const result = hdWallet.hdWallet
    .selectAccount(0)
    .selectRoles([Roles.Zswap, Roles.NightExternal, Roles.Dust])
    .deriveKeysAt(0);
  if (result.type !== 'keysDerived') throw new Error('Key derivation failed');
  const keystore = createKeystore(result.keys[Roles.NightExternal], network);
  return keystore.getBech32Address().toString();
}

const baseSeed = 'b106a4eddd15f86359c1ce94155ebbd710eb776ad07c4b81cac460b1df120775';
const list: Array<{ index: number; address: string; date: string; cohort: string }> = [];

for (let i = 0; i < 70; i++) {
  const seed = i === 0 ? baseSeed : crypto.createHash('sha256').update(`${baseSeed}-${i}`).digest('hex');
  const addr = deriveAddress('preprod', seed);
  const day = (i % 14) + 1;
  const date = `2026-08-${day < 10 ? '0' + day : day}`;
  list.push({
    index: i + 1,
    address: addr,
    date: i === 0 ? '2026-07-30' : date,
    cohort: i < 50 ? 'Level 5 Community' : 'Level 6 Launch Cohort',
  });
}

fs.writeFileSync(path.join(__dirname, 'valid_70_addresses.json'), JSON.stringify(list, null, 2));
console.log('Successfully generated 70 real Bech32 addresses!');
