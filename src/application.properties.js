export const applicationProperties = {
    isTesting: false,
    defaultTheme: {
        code: 'light',
        icon: 'Light',
        name: 'Light',
    },
    themes: [
        {
            code: 'dark',
            icon: 'Dark',
            name: 'Dark',
        },
        {
            code: 'light',
            icon: 'Light',
            name: 'Light',
        },
    ],
    defaultCurrency: {code: 'USD', value: 1, name: 'US Dollar', symbol: '$'},
    currencies: [
        {
            code: 'AUD',
            name: 'Australian Dollar',
            symbol: '$',
        },
        {
            code: 'EUR',
            name: 'Euro',
            symbol: '€',
        },
        {
            code: 'GBP',
            name: 'British Pound',
            symbol: '£',
        },
        {
            code: 'RUB',
            name: 'Russian Ruble',
            symbol: '₽',
        },
        {
            code: 'USD',
            name: 'US Dollar',
            symbol: '$',
        },
    ],
    defaultWalletName: 'XPay Wallet',
    logoURI: {
        app: 'https://i.ibb.co/ZdkdCsT/1024.png',
        eth: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        bsc: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
        polygon:
            'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
        tron: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
        usdt: 'https://rampnetwork.github.io/assets/crypto-assets/usdt.svg',
        noImage: 'https://epay-images.s3.us-east-2.amazonaws.com/no-photo.png',
    },
    endpoints: {
        app: {
            url: 'https://azurewallet-52c179a71c09.herokuapp.com',
            wssUrl: 'https://azurewallet-52c179a71c09.herokuapp.com/wss/v1/hello-wss',
        },
        privacyPolicy: 'https://www.vcoinlab.com/blog/privacy-policy',
        termsOfService: 'https://www.vcoinlab.com/blog/terms-of-service',
        ramp: 'https://app.ramp.network/?hostApiKey=ycrtmt9ec9xmgn3cgqvgbt9sw6jyptmxyfnm7f3x&hostAppName=VCoinLab&hostLogoUrl=https://epay-images.s3.us-east-2.amazonaws.com/logo.png',
        helpCenter: 'https://vcoinlab.com',
        twitter: 'https://vcoinlab.com',
        telegram: 'https://vcoinlab.com',
        facebook: 'https://vcoinlab.com',
        reddit: 'https://vcoinlab.com',
        youtube: 'https://vcoinlab.com',
        about: 'https://vcoinlab.com',
        discord: 'https://vcoinlab.com',
    },
    dapps: [
        {
            id: 'aave',
            name: 'METAXBANK',
            desc: '',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
            url: 'https://metaxbank.io/',
        },
        {
            id: 'uniswap',
            name: 'METAXBOOK',
            desc: '',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
            url: 'https://metaxbook.io',
        },
        {
            id: '1inch.io',
            name: 'METAXTRADE',
            desc: '',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png',
            url: 'https://trade1.metaxtrade.io',
        },
    ],
    walletConnect: {
        description: 'VCoinLab Wallet',
        url: 'https://www.vcoinlab.com/blog/privacy-policy',
        icons: ['https://www.vcoinlab.com/static/images/logo.png'],
        name: 'VCoinLab Wallet',
        ssl: true,
    },
    oneSignal: {
        appId: '63da9a2a-4ea6-4c98-8cf6-ecef0a6e851d',
    },
    networks: [
        {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            chain: 'ETH',
            logoURI:
                'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        },
        {
            id: 'binance-chain',
            name: 'Binance Smart Chain',
            chain: 'BSC',
            symbol: 'BNB',
            logoURI:
                'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
        },
        {
            id: 'polygon',
            name: 'Polygon',
            chain: 'POLYGON',
            symbol: 'MATIC',
            logoURI:
                'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
        },
        {
            id: 'tron',
            name: 'Tron',
            chain: 'TRON',
            symbol: 'TRX',
            logoURI:
                'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
        },
    ],
};
