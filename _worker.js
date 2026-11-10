export default {

     /**
     * @param {import("@cloudflare/workers-types").Request} request
     * @param {{UUID: string, PROXYIP: string, DNS_RESOLVER_URL: string}} env
     * @param {import("@cloudflare/workers-types").ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {
       
                        const url = new URL(request.url);
                        url.hostname = env.HOST || 'bg.viiic.net';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return fetch(request);
       

              }
        
};
