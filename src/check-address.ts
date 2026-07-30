import { resolveNetwork } from './network.js';
import { createWallet } from './wallet.js';

async function main() {
  const { config } = resolveNetwork({ argv: ['node', 'script', '--network', 'preprod'] });
  const ctx = await createWallet({
    network: 'preprod',
    networkConfig: config,
    seed: 'b106a4eddd15f86359c1ce94155ebbd710eb776ad07c4b81cac460b1df120775',
  });
  console.log('PREPROD_ADDRESS:', ctx.unshieldedKeystore.getBech32Address().toString());
  process.exit(0);
}

main().catch(console.error);
