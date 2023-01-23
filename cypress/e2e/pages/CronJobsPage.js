class cronJobsPage {
    elements = {
        getExecAllButton: () => cy.get("button").contains("exec all"),
    };

    /**
     * Opens CronJobs page on ForumPay
     */
    openCronJobsPage() {
        cy.visit(Cypress.env("cronJobsURL"));
    }

    /**
     *  Executes all CronJobs on CronJobs Page
     */
    execAllCrons() {
        this.elements.getExecAllButton().click();
    }

    /**
     * Waits for all CronJobs to be executed by checking two crons
     * first with id 3 - checkUnconfirmedTransactions BTC and
     * second with id 41 - externalExchangeGetSettings zbx
     */
    waitCronsToFinish() {
        cy.frameLoaded("#cron-3");
        cy.iframe("#cron-3").should(
            "contain",
            "Running test run !!one time check only!!"
        );

        cy.frameLoaded("#cron-41");
        cy.iframe("#cron-41").should("contain", "Exchange zbx not enabled!");
    }
}

export default cronJobsPage;
