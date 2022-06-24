import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

import { DEBUG, INFO } from "@helpers/logger";

export const airdropTo = async (
  connection: Connection,
  toPublicKey: PublicKey,
  amount: number
) => {
  const airdropSignature = await connection.requestAirdrop(
    toPublicKey,
    amount * LAMPORTS_PER_SOL
  );

  const transactionConfirmation = await connection.confirmTransaction(
    airdropSignature
  );

  DEBUG(transactionConfirmation);
  INFO(`💸 Airdropped: ${amount}S◎L`);
  INFO(`🫅 To: ${toPublicKey}`);

  return transactionConfirmation;
};
