import { chain, configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains([chain.localhost], [publicProvider()]);

export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});
