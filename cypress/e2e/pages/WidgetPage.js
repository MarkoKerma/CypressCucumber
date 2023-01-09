class WidgetPage {
  elements = {
    getOrderAmountInput: () => cy.get('[name=order_amount]'),
    getApplyButton: () => cy.get('#btn_create_widget'),
    getWidgetHTML: () => cy.get('#widget_html'),
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
      .invoke('val')
      .should('contain', `order_amount=${amount}`);
  }

  copyWidgetCode() {
    return this.elements.getWidgetHTML().invoke('val').as('WidgetCode');
  }

  replaceWidgetCode() {
    this.elements
      .getWidgetHTML()
      .invoke('val')
      .then((text) => {
        cy.log(text);
        cy.get('html').invoke('prop', 'innerHTML', text);
      });
  }
}

export default WidgetPage;
