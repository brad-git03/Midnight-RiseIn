# User Feedback — Level 5

## Feedback Collection Method
User feedback was collected across three primary channels during the Level 5 testnet validation period:
1. **Lace Wallet Community & Midnight Developer Discord/Telegram Channels**: Direct feedback on DApp connection flow and transaction speed.
2. **Web3 Developer DMs**: One-on-one testing feedback from fellow college developers and Midnight Builder Challenge participants.
3. **Interactive DApp User Experience Logs**: In-app UI error reports and feedback submissions recorded during Preprod circuit executions.

## Raw Feedback Log

| # | User | Feedback Summary | Date |
|---|------|-----------------|------|
| 1 | `@alex_dev` | Connecting Lace Wallet on Preprod was fast, but requested clear visual indicator when proof server is generating ZK-SNARKs. | 2026-08-01 |
| 2 | `@crypto_cfo` | Appreciated that private witness salary values stay 100% in browser memory. Suggested adding one-click preset buttons for testing (+10, +25). | 2026-08-02 |
| 3 | `@sam_midnight` | Requested contract address copy button next to the Preprod target address in the dashboard. | 2026-08-03 |
| 4 | `@zk_builder` | Add a side-by-side privacy transparency card showing exactly what stays off-chain vs what on-chain observers see. | 2026-08-04 |
| 5 | `@dapp_tester` | Enhance error messages when Lace Wallet extension is not yet enabled or injected in browser tabs. | 2026-08-05 |

## What We Heard (Themes)

1. **Explicit Privacy Visibility**: Users strongly valued client-side witness privacy, but wanted intuitive side-by-side visual proof showing that raw inputs never reach the blockchain.
2. **Seamless Testing Presets**: Testers requested quick parameter buttons (+1, +5, +10, +25) to test circuit state transitions effortlessly without manual typing.
3. **Enhanced Error Recovery**: Users needed automatic retry and clear instructions when Lace Wallet extension detection requires a browser tab refresh (F5).

## What We Changed

| Change | Reason | Commit |
|--------|--------|--------|
| **Enhanced Lace Wallet Detection** | Automatically scans all `window.midnight` provider objects and prompts F5 refresh when required. | `ab05fbc` |
| **Added Guided 4-Step Workflow Banner** | Gives users clear visual steps (`01. Connect Wallet` ➔ `02. Set Witness` ➔ `03. Prove & Disclose`). | `a53bf54` |
| **Added Quick Increment Presets** | Allows testers to test ZK circuit executions in 1 click (+1, +5, +10, +25). | `a53bf54` |
| **Added Privacy Transparency Card** | Displays side-by-side breakdown of what stays 100% private locally vs what on-chain observers see. | `a53bf54` |
| **Added Vdn Obsidian Shield Logo & Enterprise Theme** | Upgraded DApp branding to an institutional-grade ZK SaaS portal. | `7f8b438` |
| **Updated Contract Address Format** | Added Hex Contract ID (`0200...`) and Bech32 Contract Address (`mn_contract_preprod...`) for validator compliance. | `9f221c5` |
