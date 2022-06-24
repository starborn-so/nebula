import { clusterApiUrl, Connection } from "@solana/web3.js";

export type Cluster = "devnet" | "testnet" | "mainnet-beta";

export const createConnection = (cluster?: Cluster) => {
  const setCluster = cluster ? cluster : (process.env.CLUSTER as Cluster);

  return new Connection(clusterApiUrl(setCluster), "confirmed");
};
