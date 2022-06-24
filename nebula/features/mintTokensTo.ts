import {
  Connection,
  PublicKey,
  Signer,
  PublicKeyInitData,
} from '@solana/web3.js'
import {
  TOKEN_PROGRAM_ID,
  getOrCreateAssociatedTokenAccount,
  mintTo,
} from '@solana/spl-token'

import { INFO, DEBUG } from '@helpers/logger'

export const mintTokensTo = async (
  connection: Connection,
  owner: Signer,
  reciever: PublicKey,
  amount: number,
) => {
  const mint = new PublicKey(process.env.SPL_TOKEN_PUB as PublicKeyInitData)

  // Make sure owner account is created
  const bank = await getOrCreateAssociatedTokenAccount(
    connection,
    owner,
    mint,
    owner.publicKey,
  )

  // Make sure recipent account is created
  const recieverModel = await getOrCreateAssociatedTokenAccount(
    connection,
    owner,
    mint,
    reciever,
  )

  DEBUG('🏦 Bank: ', bank)
  DEBUG('🧑 Reciever Model: ', recieverModel)

  INFO('💵 Token ID: ', mint.toBase58())
  INFO('🏦 Bank Address: ', owner.publicKey.toBase58())
  INFO('🧑 Reciever Address: ', reciever.toBase58())

  const finalMint = await mintTo(
    connection,
    owner, // Signer´
    mint, // Mint
    recieverModel.address, // reciever address
    owner, // Authority
    amount, // Amount
    undefined,
    undefined,
    TOKEN_PROGRAM_ID,
  )

  INFO(`🧑 Recieved: ${amount}`)
  INFO(`🪪 MintId: ${finalMint}`)

  return finalMint
}
