class CronJobsPage {
  elements = {
    getExecAllButton: () => cy.get('button').contains('exec all'),
  };

  openCronJobsPage() {
    cy.visit(Cypress.env('cronJobsURL'));
  }

  execAllCrons() {
    this.elements.getExecAllButton().click();
  }

  // cy.get('*[id^="events_list_"]')
  cronJobBox() {
    cy.frameLoaded('#cron-3');
    cy.iframe('#cron-3');
    cy.iframeCustom()
      .find('#mouseposition-extension-element-full-container')
      .should('be.visible');

    cy.frameLoaded('#cron-58');
    cy.iframe('#cron-58');
    cy.iframeCustom()
      .find('#mouseposition-extension-element-full-container')
      .should('be.visible');
  }
}

export default CronJobsPage;
