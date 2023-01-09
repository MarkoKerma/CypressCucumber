/// <reference types="cypress" />
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import TwoFactorPage from './pages/TwoFactorPage';
import WidgetPage from './pages/WidgetPage';
import WidgetCodePage from './pages/WidgetCodePage';
import CronJobsPage from './pages/CronJobsPage';
const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor');

const dashboardPage = new DashboardPage();
const loginPage = new LoginPage();
const twoFactorPage = new TwoFactorPage();
const widgetPage = new WidgetPage();
const widgetCodePage = new WidgetCodePage();
const cronJobsPage = new CronJobsPage();
const userName = Cypress.env('username');
const password = Cypress.env('password');
const twoFactorInputCode = Cypress.env('twoFactorCode');

const expectedFiatAmount = '33';

Given('I login to Limitlex Forum Pay', () => {
  loginPage.loginToApp(userName, password);
  twoFactorPage.typeTwoFactorCode(twoFactorInputCode);
  dashboardPage.AccountMenu().should('be.visible');
});

Given('open Widgets menu', () => {
  dashboardPage.openWidgets();
});

When('I input Order Amount {string}', (amoutOfOrder) => {
  widgetPage.OrderAmountInput().should('be.visible');
  widgetPage.typeOrderAmount(amoutOfOrder);
  widgetPage.applyWidgetChanges();
  widgetPage.widgetContainsValue(amoutOfOrder);
});

When('copy widget HTML', () => {
  widgetPage.copyWidgetCode();
});

When('start Cron Jobs', () => {
  cronJobsPage.openCronJobsPage();
  cronJobsPage.execAllCrons();
  cronJobsPage.cronJobBox();
});

When('use Widget Code in browser', () => {
  widgetPage.replaceWidgetCode();
});

When('confirm I am not a robot', () => {
  widgetCodePage.clickNotRobotCheckBox();
});

Then('widget will open with correct amount {string}', (correctAmount) => {
  widgetCodePage.TotalAmountInFIAT(correctAmount);
});
