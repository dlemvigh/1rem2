import { test, expect } from '@playwright/experimental-ct-svelte';
import Calculator from '$src/components/calculator.svelte';

test.describe('Calculator.svelte', () => {
	test('Initial form', async ({ mount }) => {
		const component = await mount(Calculator);
		await expect(component).toHaveScreenshot();
	});

	test('8 x 99 kg', async ({ mount }) => {
		const component = await mount(Calculator, {
			props: {
				reps: '8',
				weight: '99'
			}
		});
		await expect(component).toHaveScreenshot();
	});

	test('reps only', async ({ mount }) => {
		const component = await mount(Calculator, {
			props: {
				reps: '12'
			}
		});
		await expect(component).toHaveScreenshot();
	});

	test('weight only', async ({ mount }) => {
		const component = await mount(Calculator, {
			props: {
				weight: '125'
			}
		});
		await expect(component).toHaveScreenshot();
	});
});
