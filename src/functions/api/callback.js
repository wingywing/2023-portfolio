export async function onRequest(context) {
    const { request, env, data } = context;

    const client_id = env.GITHUB_CLIENT_ID;
    const client_secret = env.GITHUB_CLIENT_SECRET;

    try {
        const url = new URL(request.url);
        const code = url.searchParams.get('code');
        const state = url.searchParams.get('state');

        // Exchange the authorization code for an access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                client_id,
                client_secret,
                code,
                redirect_uri: `${url.origin}/api/callback`,
            }),
        });

        const tokenData = await tokenResponse.json();

        if (tokenData.error) {
            console.error('Token error:', tokenData.error_description);
            throw new Error(tokenData.error_description);
        }

        // Log token for debugging purposes
        console.log('Token received:', tokenData);

        // Redirect to the CMS page
        const cmsRedirectUrl = `${url.origin}/admin`;
        return Response.redirect(cmsRedirectUrl, 302);

    } catch (error) {
        console.error('Error in onRequest:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
