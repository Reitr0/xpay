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
        {
            code: 'XUSDT',
            name: 'TRON USDT',
            symbol: '$',
        },
    ],
    defaultWalletName: 'XPAY Wallet',
    logoURI: {
        app: 'https://i.ibb.co/ZdkdCsT/1024.png',
        eth: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        bsc: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
        polygon:
            'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
        tron: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
        noImage: 'https://epay-images.s3.us-east-2.amazonaws.com/no-photo.png',
        trc20: 'https://tokens.pancakeswap.finance/images/0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B.png',
        xusdt: 'https://static.tronscan.org/production/upload/logo/new/TAZ1dbBfBCELD49obL3Agh9GtYVrp3jkJL.png?t=1715415057068',
    },
    endpoints: {
        app: {
            url: 'https://dukuwallet-2aeb92c5caa8.herokuapp.com/', //to this url <<<
            wssUrl: 'https://dukuwallet-2aeb92c5caa8.herokuapp.com/wss/v1/hello-wss',
        },
        privacyPolicy: 'https://www.vcoinlab.com/blog/privacy-policy',
        termsOfService: 'https://www.vcoinlab.com/blog/terms-of-service',
        ramp: 'https://app.ramp.network/?hostApiKey=ycrtmt9ec9xmgn3cgqvgbt9sw6jyptmxyfnm7f3x&hostAppName=VCoinLab&hostLogoUrl=https://metaxbank.io/home/images/logo-icon4.png',
        helpCenter: '',
        twitter: '',
        telegram: '',
        facebook: '',
        reddit: '',
        youtube: '',
        about: '',
        discord: '',
    },
    dapps: [
        {
            id: 'aave',
            name: 'METAXBANK',
            desc: 'Send Money Overseas Fast,Seamless and Low Cost',
            logo: 'https://metaxbank.io/home/images/logo-icon4.png',
            url: 'https://metaxbank.io/',
        },
        {
            id: 'uniswap',
            name: 'METAXBOOK',
            desc: 'Your Next Social Media',
            logo: 'https://metaxbank.io/home/images/logo-icon4.png',
            url: 'https://metaxbook.io',
        },
        {
            id: '1inch.io',
            name: 'METAXTRADE',
            desc: 'The Future Of Trading',
            logo: 'https://metaxbank.io/home/images/logo-icon4.png',
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
                'https://s2.coinmarketcap.com/static/img/coins/200x200/1958.png',
        },
    ],
};
