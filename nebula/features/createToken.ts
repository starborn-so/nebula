import { Connection, PublicKey, Signer } from "@solana/web3.js";
import { createMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";

import { DEBUG, INFO } from "@helpers/logger";

export const createToken = async (connection: Connection, owner: Signer) => {
  const mint = await createMint(
    connection,
    owner, // Fee payer
    owner.publicKey, // Mint authority
    owner.publicKey, // Freeze authority
    6 // Decimals
  );

  DEBUG("💵 Mint data");
  DEBUG(mint);
  INFO(`🪪 Mint ID: ${mint.toBase58()}`);

  return mint;
};
