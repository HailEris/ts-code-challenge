import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    testDir: 'tests',
    timeout: 30000,
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },
};
export default config;