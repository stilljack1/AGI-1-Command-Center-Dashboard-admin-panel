const SYSTEM_CONTRACT = {
    productUrl: 'https://agi1.org',
    neuralUrl: 'https://agi1.org/neural',
    apiUrl: 'https://api.agi1.org',
    corporateUrl: 'https://fairgroupai.com',
    commandCenterApiPath: '/command-center/api/v1',
};

const CONFIG = {
    // Prefer the co-hosted command center API when the dashboard is served from agi1.org.
    API_BASE_URL:
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://127.0.0.1:8000'
            : window.location.hostname === 'agi1.org' || window.location.hostname === 'www.agi1.org'
                ? `${window.location.origin}${SYSTEM_CONTRACT.commandCenterApiPath}`
                : `${SYSTEM_CONTRACT.productUrl}${SYSTEM_CONTRACT.commandCenterApiPath}`,
    DASHBOARD_MODE: 'LIVE',
    AUTH_TOKEN_KEY: 'agi1_admin_token',
    AUTH_ADMIN_KEY: 'agi1_admin_user',
    SYSTEM_CONTRACT,
};
