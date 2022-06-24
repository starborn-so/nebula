import { Keypair, Signer, PublicKey } from '@solana/web3.js'
import * as testKeyFile from '/Users/simon/.config/solana/tspl-owner.json'

let testKeyPublic = testKeyFile
let testKeySecret = testKeyPublic.splice(0, 32)

// export const keypairAsSigner = (keypair: Keypair): Signer => {
//   return {
//     secretKey: keypair.secretKey,
//     publicKey: keypair.publicKey,
//   }
// }

export const TOKEN_OWNER_KEYPAIR = Keypair.fromSeed(
  Uint8Array.from(testKeySecret),
)

// export const TOKEN_OWNER_SIGNER = {
//   secretKey: Uint8Array.from(testKeySecret),
//   publicKey: testKeyPublic,
// };

// export const TOKEN_OWNER_KEYPAIR = new Keypair({
//   secretKey: process.env.SPL_TOKEN_OWNER_SECRET as any,
//   publicKey: process.env.SPL_TOKEN_OWNER_PUBLIC as any,
// });
