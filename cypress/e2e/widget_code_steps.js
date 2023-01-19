/// <reference types="cypress" />
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import TwoFactorPage from "./pages/TwoFactorPage";
import WidgetPage from "./pages/WidgetPage";
import WidgetCodePage from "./pages/WidgetCodePage";
import CronJobsPage from "./pages/CronJobsPage";
const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const dashboardPage = new DashboardPage();
const loginPage = new LoginPage();
const twoFactorPage = new TwoFactorPage();
const widgetPage = new WidgetPage();
const widgetCodePage = new WidgetCodePage();
const cronJobsPage = new CronJobsPage();
const userName = Cypress.env("username");
const password = Cypress.env("password");
const twoFactorInputCode = Cypress.env("twoFactorCode");

Given("I login to Limitlex Forum Pay", () => {
    loginPage.loginToApp(userName, password);
    twoFactorPage.typeTwoFactorCode(twoFactorInputCode);
    dashboardPage.AccountMenu().should("be.visible");
});

Given("open Widgets menu", () => {
    dashboardPage.openWidgets();
});

When("I input Order Amount {string}", (amountOfOrder) => {
    widgetPage.OrderAmountInput().should("be.visible");
    widgetPage.typeOrderAmount(amountOfOrder);
    widgetPage.applyWidgetChanges();
    widgetPage.widgetContainsValue(amountOfOrder);
});

When("copy widget HTML", () => {
    widgetPage.copyWidgetCode();
});

When("open Cron Jobs page", () => {
    cronJobsPage.openCronJobsPage();
});

When("start Cron Jobs", () => {
    cronJobsPage.execAllCrons();
    cronJobsPage.cronJobBox();
});

When("use Widget Code in browser", () => {
    widgetPage.replaceWidgetCode();
});

When("confirm I am not a robot", () => {
    widgetCodePage.clickNotRobotCheckBox();
});

Then("widget will open with correct amount {string}", (correctAmount) => {
    widgetCodePage.TotalAmountInFIAT(correctAmount);
});
