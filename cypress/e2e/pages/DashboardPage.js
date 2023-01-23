class dashboardPage {
    elements = {
        getLoginButton: () => cy.get('[title="Log In"]'),
        getAccountMenu: () => cy.get('[title="Account"]'),
        getWidgetMenu: () => cy.get('[title="Widget"]'),
    };

    /**
     * Clicks on Login Button
     */
    clickOnLoginButton() {
        this.elements.getLoginButton().click();
    }

    /**
     * Finds Account from Account menu
     * @returns Cypress element
     */
    AccountMenu() {
        return this.elements.getAccountMenu();
    }

    /**
     * Selects Widget section from Header menu
     */
    openWidgets() {
        this.elements.getWidgetMenu().click();
    }
}

export default dashboardPage;
