const { I } = inject();

module.exports = {
  registerHeaderText: "Register Account",
  firstNameInput: { css: "#input-firstname" },
  lastNameInput: { css: "#input-lastname" },
  emailInput: { css: "#input-email" },
  phoneInput: { css: "#input-telephone" },
  passwordInput: { css: "#input-password" },
  passwordConfirmInput: { css: "#input-confirm" },
  newsSubscribeBtn: {
    xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]',
  },
  agreeRegisterBtn: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  registerBtn: { xpath: '//*[@id="content"]/form/div/div/input[2]' },
  registerSuccess: "Your Account Has Been Created!",

  verifyRegisterPage() {
    I.see(this.registerHeaderText);
  },
  fillRegisterForm(user) {
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.emailInput, user.email);
    I.fillField(this.phoneInput, user.phone);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.passwordConfirmInput, user.passwordConfirm);
    I.checkOption(this.newsSubscribeBtn);
    I.checkOption(this.agreeRegisterBtn);
    I.click(this.registerBtn);
  },
  confirmRegister() {
    I.see(this.registerSuccess);
  },
};
