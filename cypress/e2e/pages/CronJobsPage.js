class cronJobsPage {
    elements = {
        getExecAllButton: () => cy.get("button").contains("exec all"),
        btcCronFrameId: "#cron-3",
        externalExchangeCronId: "#cron-41",
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
        const expectedBtcCronMsg = "Running test run !!one time check only!!";
        const expectedExtExcCronMsg = "Exchange zbx not enabled!";
        cy.frameLoaded(this.elements.btcCronFrameId);
        cy.iframe(this.elements.btcCronFrameId).should(
            "contain",
            expectedBtcCronMsg
        );

        cy.frameLoaded(this.elements.externalExchangeCronId);
        cy.iframe(this.elements.externalExchangeCronId).should(
            "contain",
            expectedExtExcCronMsg
        );
    }
}

export default cronJobsPage;
