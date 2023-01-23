class dashboardPage {
    elements = {
        getLoginButton: () => cy.get('[title="Log In"]'),
        getAccountMenu: () => cy.get('[title="Account"]'),
        getWidgetMenu: () => cy.get('[title="Widget"]'),
    };

    clickOnLoginButton() {
        this.elements.getLoginButton().click();
    }

    AccountMenu() {
        return this.elements.getAccountMenu();
    }

    openWidgets() {
        this.elements.getWidgetMenu().click();
    }
}

export default dashboardPage;
