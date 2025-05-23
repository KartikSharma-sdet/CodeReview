import { defineConfig, devices } from '@playwright/test';

module.exports = defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright']
  ]
});

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: ['html', 'allure-playwright'],
  use: {
    trace: 'on-first-retry',
    screenshot : "only-on-failure",
    video : "on"
    },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // }
  ]
});

    
