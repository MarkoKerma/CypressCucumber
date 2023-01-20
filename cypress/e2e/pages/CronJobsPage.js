class cronJobsPage {
    elements = {
        getExecAllButton: () => cy.get("button").contains("exec all"),
    };

    openCronJobsPage() {
        cy.visit(Cypress.env("cronJobsURL"));
    }

    execAllCrons() {
        this.elements.getExecAllButton().click();
    }

    cronJobBox() {
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
