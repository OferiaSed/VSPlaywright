import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
});
