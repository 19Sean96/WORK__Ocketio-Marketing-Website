const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: "default-src 'self' 'unsafe-eval' 'unsafe-inline' wirewise.io *.wirewise.io http://143.198.146.26; img-src data: 'self' *; style-src 'self' 'unsafe-inline'; script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com"
    }
]

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders
            }
        ]
    }
}