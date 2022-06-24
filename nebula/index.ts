import 'dotenv/config'
import { PublicKey } from '@solana/web3.js'
import { Cluster, createConnection } from '@helpers/createConnection'

import { airdropTo } from './features/airdropTo'
import { createToken } from './features/createToken'
import { mintTokensTo } from './features/mintTokensTo'
import { burnTokens } from './features/burnTokens'

import { TOKEN_OWNER_KEYPAIR } from '@helpers/keys'

export default class Nebula {
  connection = createConnection(this.cluster)
  owner = TOKEN_OWNER_KEYPAIR

  constructor(private cluster = process.env.CLUSTER as Cluster) {}

  airdropToOwner(amount = 1) {
    return airdropTo(this.connection, this.owner.publicKey, amount)
  }

  airdropTo(recieverAddressId: string, amount = 1) {
    const reciever = new PublicKey(recieverAddressId)

    return airdropTo(this.connection, reciever, amount)
  }

  createToken() {
    return createToken(this.connection, this.owner)
  }

  async burnTokens(burnFromAddressId: string, amount: number) {
    const burnFrom = new PublicKey(burnFromAddressId)

    return await burnTokens(this.connection, this.owner, burnFrom, amount)
  }

  async mintTokensTo(recieverAddressId: string, amount: number) {
    const reciever = new PublicKey(recieverAddressId)

    await mintTokensTo(this.connection, this.owner, reciever, amount)

    return
  }
}
