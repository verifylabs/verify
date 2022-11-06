import { configureChains, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      id: 256236330,
      name: 'SKALE ETH-SF Vega',
      network: 'https://eth-sf.skalenodes.com/v1/hackathon-content-live-vega',
      rpcUrls: {
        default: 'https://eth-sf.skalenodes.com/v1/hackathon-content-live-vega',
      },
      nativeCurrency: {
        name: 'sFUEL',
        symbol: 'sFUEL',
        decimals: 18,
      },
    },
  ],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: 'https://eth-sf.skalenodes.com/v1/hackathon-content-live-vega',
      }),
    }),
  ]
);

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
  webSocketProvider,
});
