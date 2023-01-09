class DashboardPage {
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

  WidgetMenu() {
    return this.elements.getWidgetMenu();
  }

  openWidgets() {
    this.WidgetMenu().click();
  }
}

export default DashboardPage;
