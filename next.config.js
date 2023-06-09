const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    staticImage: true,
    latex: true,
    flexsearch: {
        codeblock: false
    }
})

module.exports = withNextra({
    reactStrictMode: true, swcMinify: true,
    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return JSON.stringify(Math.random());
    },
    async headers() {
        return [
            {
                source: '/(.*)?', // Matches all pages
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(),fullscreen=self'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: `object-src 'none'; frame-ancestors 'none'` //The object-src directive is set to 'none' to prevent plugins from being loaded.
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    }
                ]
            }
        ]
    }
})




