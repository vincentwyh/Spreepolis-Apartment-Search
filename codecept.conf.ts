import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*_test.ts',
  output: './tests/screenshots/actual',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.spreepolis.berlin/mieten',
      show: true
    },
    ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder : './tests/output/',
      baseFolder: './tests/screenshots/base/',
      diffFolder: './tests/screenshots/diff/',
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'Spreepolis-Apartment-Search'
}