import { createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains([chain.mainnet], [publicProvider()]);

export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
