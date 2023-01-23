class loginPage {
    elements = {
        getEmailInput: () => cy.get("#email"),
        getPasswordInput: () => cy.get("[name=password]"),
        getNotRobotRecaptchaCheckbox: () =>
            cy.get('[name="g-recaptcha-response"]'),
        getRememberMeCheckBox: () => cy.get("#stay_loggedin"),
        getLoginForm: () => cy.get("form"),
    };

    /**
     * Opens Login Page on ForumPay App
     */
    OpenForumPage() {
        cy.visit("/login");
    }

    /**
     * Finds email input
     * @returns Cypress element
     */
    EmailInput() {
        return this.elements.getEmailInput();
    }

    /**
     * Finds password input
     * @returns Cypress element
     */
    PasswordInput() {
        return this.elements.getPasswordInput();
    }

    /**
     * Finds "I am not robot" checkbox
     * @returns Cypress element
     */
    NotRobotCheckBox() {
        return this.elements.getNotRobotRecaptchaCheckbox();
    }

    /**
     * Finds "Remember me" checkbox
     * @returns Cypress element
     */
    RememberMeCheckBox() {
        return this.elements.getRememberMeCheckBox();
    }

    /**
     *  Logins user to the ForumPay App
     * @param {String} email - email of existing user
     * @param {String} password - valid password of that user
     */
    loginToApp(email, password) {
        Cypress.on("uncaught:exception", () => false);
        this.OpenForumPage();
        this.EmailInput().clear().type(email);
        this.PasswordInput().clear().type(password);
        this.NotRobotCheckBox().click();
        this.RememberMeCheckBox().click();
        this.elements.getLoginForm().submit();
    }
}

export default loginPage;
