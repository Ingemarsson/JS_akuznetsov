Feature("store");

let newUser = {
  firstName: "Roman",
  lastName: "228",
  email: Date.now() + "@test.com",
  phone: "+380999999999",
  password: "password",
  passwordConfirm: "password",
};

Scenario("test register", ({ I, homePage, registerPage }) => {
  I.openStore();
  homePage.openRegistrationPage();
  registerPage.verifyRegisterPage();
  registerPage.fillRegisterForm(newUser);
});
