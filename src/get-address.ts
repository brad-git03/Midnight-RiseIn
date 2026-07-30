import { Buffer } from 'buffer';
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { createKeystore, HDWallet, Roles } from '@midnight-ntwrk/wallet-sdk';
import { loadState, NetworkId } from './network.js';

function deriveAddress(network: NetworkId, seedHex: string) {
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

const state = loadState();
if (state && state.wallets) {
  for (const [net, info] of Object.entries(state.wallets)) {
    if (info?.seed) {
      const addr = deriveAddress(net as NetworkId, info.seed);
      console.log(`Network: ${net.toUpperCase()}`);
      console.log(`Address: ${addr}\n`);
    }
  }
}
