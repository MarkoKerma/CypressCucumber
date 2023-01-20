/// <reference types="cypress" />
import dashboardPage from "./pages/dashboardPage";
import loginPage from "./pages/loginPage";
import twoFactorPage from "./pages/twoFactorPage";
import widgetPage from "./pages/widgetPage";
import widgetCodePage from "./pages/widgetCodePage";
import cronJobsPage from "./pages/cronJobsPage";
const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const dashboardPg = new dashboardPage();
const loginPg = new loginPage();
const twoFactorPg = new twoFactorPage();
const widgetPg = new widgetPage();
const widgetCodePg = new widgetCodePage();
const cronJobsPg = new cronJobsPage();
const userName = Cypress.env("username");
const password = Cypress.env("password");
const twoFactorInputCode = Cypress.env("twoFactorCode");

Given("I login to Limitlex Forum Pay", () => {
    loginPg.loginToApp(userName, password);
    twoFactorPg.typeTwoFactorCode(twoFactorInputCode);
    dashboardPg.AccountMenu().should("be.visible");
});

Given("open Widgets menu", () => {
    dashboardPg.openWidgets();
});

When("I input Order Amount {string}", (amountOfOrder) => {
    widgetPg.OrderAmountInput().should("be.visible");
    widgetPg.typeOrderAmount(amountOfOrder);
    widgetPg.applyWidgetChanges();
    widgetPg.widgetContainsValue(amountOfOrder);
});

When("copy widget HTML", () => {
    widgetPg.copyWidgetCode();
});

When("open Cron Jobs page", () => {
    cronJobsPg.openCronJobsPage();
});

When("start Cron Jobs", () => {
    cronJobsPg.execAllCrons();
    cronJobsPg.cronJobBox();
});

When("use Widget Code in browser", () => {
    widgetPg.replaceWidgetCode();
});

When("confirm I am not a robot", () => {
    widgetCodePg.clickNotRobotCheckBox();
});

Then("widget will open with correct amount {string}", (correctAmount) => {
    widgetCodePg.TotalAmountInFIAT(correctAmount);
});
