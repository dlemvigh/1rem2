import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte';
import { devices } from '@playwright/test';
import { resolve } from 'node:path';

const config: PlaywrightTestConfig = {
	testDir: 'src',
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? [['html', { open: 'never' }]] : [['html', { open: 'on-failure' }]],
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	],

	use: {
		ctViteConfig: {
			resolve: {
				alias: {
					// Setup the built-in $lib alias in SvelteKit
					$src: resolve('src'),
					$lib: resolve('src/lib')
				}
			}
		}
	}
};

export default config;
