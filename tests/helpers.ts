import Wallet from '../src/wallet'

const defaultSeed = 'sound idle panel often situate develop unit text design antenna '
  + 'vendor screen opinion balcony share trigger accuse scatter visa uniform brass '
  + 'update opinion media'

export const getIdentity = async (seed: string = defaultSeed) => {
  const password = 'password'
  const wallet = await Wallet.restore(password, seed)
  const [identity] = wallet.identities
  return identity
}