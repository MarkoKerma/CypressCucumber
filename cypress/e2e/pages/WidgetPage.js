class widgetPage {
    elements = {
        getOrderAmountInput: () => cy.get("[name=order_amount]"),
        getApplyButton: () => cy.get("#btn_create_widget"),
        getWidgetHTML: () => cy.get("#widget_html"),
        getCopyWidgetHTML: () => cy.get('[value="Copy to Clipboard"]'),
    };

    /**
     * Order amount input of widget creation form on widgets page
     * @returns Cypress element
     */
    OrderAmountInput() {
        return this.elements.getOrderAmountInput();
    }

    /**
     * Adds value to order amount filed in widget code creation form
     * @param {String} amount - value to add in input element
     */
    typeOrderAmount(amount) {
        this.OrderAmountInput().clear().type(amount);
    }

    /**
     * Applies widget create form on widgets page
     */
    applyWidgetChanges() {
        this.elements.getApplyButton().click();
    }

    /**
     * Waits until widget contains "amount" value in widget code on widgets page
     * @param {String} amount - value added in input element
     */
    widgetContainsValue(amount) {
        this.elements
            .getWidgetHTML()
            .invoke("val")
            .should("contain", `order_amount=${amount}`);
    }

    /**
     * Copies widget code and save it as widgetHTMLCode for later use
     *  @example
     *      cy.get("@widgetHTMLCode")
     */
    copyWidgetCode() {
        this.elements
            .getWidgetHTML()
            .invoke("val")
            .then((htmlCode) => {
                let code = htmlCode;
                cy.wrap(code).as("widgetHTMLCode");
            });
    }

    /**
     * Replaces html code on page with widget code saved as widgetHTMLCode
     */
    replaceWidgetCode() {
        cy.get("@widgetHTMLCode").then((htmlCode) => {
            cy.get("html").invoke("prop", "innerHTML", htmlCode);
        });
    }
}

export default widgetPage;
