class widgetPage {
    elements = {
        getOrderAmountInput: () => cy.get("[name=order_amount]"),
        getApplyButton: () => cy.get("#btn_create_widget"),
        getWidgetHTML: () => cy.get("#widget_html"),
        getCopyWidgetHTML: () => cy.get('[value="Copy to Clipboard"]'),
    };

    OrderAmountInput() {
        return this.elements.getOrderAmountInput();
    }

    typeOrderAmount(amount) {
        this.OrderAmountInput().clear().type(amount);
    }

    applyWidgetChanges() {
        this.elements.getApplyButton().click();
    }

    widgetContainsValue(amount) {
        this.elements
            .getWidgetHTML()
            .invoke("val")
            .should("contain", `order_amount=${amount}`);
    }

    copyWidgetCode() {
        this.elements
            .getWidgetHTML()
            .invoke("val")
            .then((htmlCode) => {
                let code = htmlCode;
                cy.wrap(code).as("widgetHTMLCode");
            });
    }

    replaceWidgetCode() {
        cy.get('@widgetHTMLCode').then((htmlCode) => {
            cy.log(htmlCode);
            cy.get("html").invoke("prop", "innerHTML", htmlCode);
        });
    }
}

export default widgetPage;
