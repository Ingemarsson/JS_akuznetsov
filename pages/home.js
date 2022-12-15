const { I } = inject();

module.exports = {
  accountBtn: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerBtn: { xpath: '//a[.="Register"]' },
  
  openRegistrationPage() {
    I.click(this.accountBtn);
    I.click(this.registerBtn);
  },
};
