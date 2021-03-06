console.log({ nodeEnv: process.env.NODE_ENV });

import * as config from 'config';

const appConfig = config.get('app') as any;
const networkConfig = config.get('network') as any;

export const AppConfig = {
  port: process.env.PORT || appConfig.port || 3000,
  txAggregationTime: process.env.BLOCK_TIME || appConfig.txAggregationTime || 2000,
  maxBatchCapacity: process.env.MAX_BATCH_CAPACITY || appConfig.maxBatchCapacity || 30
};

export const NetworkConfig = {
  rpc: process.env.RPC || networkConfig.rpc,
  gasRpc: process.env.GAS_RPC || networkConfig.gasRpc,
  contract: process.env.CONTRACT_ADDRESS || networkConfig.contract,
  etherscan_prefix: process.env.ETHERSCAN_PREFIX || networkConfig.etherscan_prefix,
  gasContract: process.env.GAS_CONTRACT || networkConfig.gas_contract,
};

export const Mnemonic = process.env.MNEMONIC || config.get('mnemonic');
export const GasMnemonic = process.env.GAS_MNEMONIC || config.get('gas_mnemonic');

console.log('CONFIG: #1');
console.log({
  mnemonic: Mnemonic,
  gasMnemonic: GasMnemonic,
  rpc: NetworkConfig.rpc,
  gasRpc: NetworkConfig.gasRpc,
  contract: NetworkConfig.contract,
  gasContract: NetworkConfig.gasContract,
  etherscan_prefix: NetworkConfig.etherscan_prefix,
});
