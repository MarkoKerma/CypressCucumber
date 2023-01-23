import "cypress-iframe";

class widgetCodePage {
    elements = {
        getTotalAmountInFiat: () => cy.get("#totalAmountInFiat"),
        getFrameLocator: () => '[allow="clipboard-write *"]',
        getNotRobotRecaptchaCheckbox: () => '[name="g-recaptcha-response"]',
        getOrderAmountBox: () => "#orderAmountBox",
    };

    /**
     * Clicks "I am not robot" checkbox on widget code
     */
    clickNotRobotCheckBox() {
        cy.frameLoaded(this.elements.getFrameLocator());
        cy.iframe(this.elements.getFrameLocator())
            .find(this.elements.getNotRobotRecaptchaCheckbox())
            .should("be.visible")
            .click();
    }

    /**
     * Check total amount value of FIAT in widget code
     * @param {String} amountValue - amount added in widget code
     */
    totalAmountInFIAT(amountValue) {
        cy.frameLoaded(this.elements.getFrameLocator());
        cy.iframe(this.elements.getFrameLocator())
            .find(this.elements.getOrderAmountBox())
            .should(
                "have.text",
                `\n\nTotal amount in FIAT: ${amountValue}.00 EUR\n\n`
            );
    }
}

export default widgetCodePage;
