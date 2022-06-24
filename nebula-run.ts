import Nebula from './nebula'

const nebula = new Nebula()

const TSPL_RECIEVER_WALLET_ID = 'Bxwfgfvpnz1mGFwHhZqHSkzi2eFJxyVovzzgKPSqWyVh'

const main = async () => {
  // Airdrop tokens
  // nebula.airdropTo(TSPL_RECIEVER_WALLET_ID, 3);
  // nebula.airdropToOwner(3);

  // Create token
  // nebula.createToken();

  // Mint to
  // await nebula.mintTokensTo(TSPL_RECIEVER_WALLET_ID, 100)

  // Burn from
  await nebula.burnTokens(TSPL_RECIEVER_WALLET_ID, 100)
}

main()
