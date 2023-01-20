class twoFactorPage {
    elements = {
        getTwoFactorInput: () => cy.get("[name=code]"),
        getVerifyButton: () => cy.get("[value=VERIFY]"),
        getTwoFactorForm: () => cy.get("form"),
    };

    TwoFactorInput() {
        return this.elements.getTwoFactorInput();
    }

    typeTwoFactorCode(code) {
        this.TwoFactorInput().type(code);
        this.elements.getVerifyButton().click();
        cy.url().should("eq", Cypress.config("baseUrl"));
    }
}

export default twoFactorPage;
