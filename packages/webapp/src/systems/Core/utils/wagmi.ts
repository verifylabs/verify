import { configureChains, createClient, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const apiKey = '37CgCluiS0enLCQHnV1nYZ5tN07m-ZK2';

const { chains, provider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey }),
  publicProvider(),
]);

// Set up client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
});
