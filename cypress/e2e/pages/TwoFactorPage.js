class twoFactorPage {
    elements = {
        getTwoFactorInput: () => cy.get("[name=code]"),
        getVerifyButton: () => cy.get("[value=VERIFY]"),
        getTwoFactorForm: () => cy.get("form"),
    };

    /**
     *  Finds wo factor input field
     * @returns Cypress element
     */
    TwoFactorInput() {
        return this.elements.getTwoFactorInput();
    }

    /**
     * Types two factor code in Two Factor input field
     * @param {String} code - hardcoded value of two factor code used in testing environment
     */
    typeTwoFactorCode(code) {
        this.TwoFactorInput().type(code);
        this.elements.getVerifyButton().click();
        cy.url().should("eq", Cypress.config("baseUrl"));
    }
}

export default twoFactorPage;
