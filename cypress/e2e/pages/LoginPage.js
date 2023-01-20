class LoginPage {
    elements = {
        getEmailInput: () => cy.get("#email"),
        getPasswordInput: () => cy.get("[name=password]"),
        getNotRobotRecaptchaCheckbox: () =>
            cy.get('[name="g-recaptcha-response"]'),
        getRememberMeCheckBox: () => cy.get("#stay_loggedin"),
        getLoginForm: () => cy.get("form"),
    };

    OpenForumPage() {
        cy.visit("/login");
    }

    EmailInput() {
        return this.elements.getEmailInput();
    }

    PasswordInput() {
        return this.elements.getPasswordInput();
    }

    NotRobotCheckBox() {
        return this.elements.getNotRobotRecaptchaCheckbox();
    }

    RememberMeCheckBox() {
        return this.elements.getRememberMeCheckBox();
    }

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

export default LoginPage;
