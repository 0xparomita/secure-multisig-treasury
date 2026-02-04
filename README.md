# Secure Multisig Treasury

A multi-signature wallet allows a group of users to manage a shared pool of funds or control sensitive contract functions. A transaction is only executed if it receives the minimum required number of confirmations from the authorized owners.



## Key Features
* **M-of-N Authorization**: Set a threshold (e.g., 3-of-5) for security.
* **Non-Custodial**: Owners retain full control over the contract logic.
* **Transaction Queue**: Proposals are stored on-chain for verification before execution.

## Flow
1. **Submit**: An owner proposes a transaction (to, value, data).
2. **Confirm**: Other owners review and sign off on the proposal.
3. **Execute**: Once the threshold is met, anyone can trigger the execution.

## License
MIT
