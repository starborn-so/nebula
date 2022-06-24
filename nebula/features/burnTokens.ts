import {
  Connection,
  PublicKey,
  PublicKeyInitData,
  Signer,
} from '@solana/web3.js'
import { burn } from '@solana/spl-token'

import { DEBUG, INFO } from '@helpers/logger'

export const burnTokens = async (
  connection: Connection,
  owner: Signer,
  accountToBurnFrom: PublicKey,
  amount: number,
) => {
  const mint = new PublicKey(process.env.SPL_TOKEN_PUB as PublicKeyInitData)

  const burnAction = await burn(
    connection,
    owner,
    accountToBurnFrom,
    mint,
    owner,
    amount,
  )

  DEBUG(burnAction)
  INFO(`💵🔥 Burned: ${amount}S◎L`)
  INFO(`🫅 From: ${accountToBurnFrom}`)

  return burnAction
}
