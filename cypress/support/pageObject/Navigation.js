class Navigation{
    isitHomepage() {
        cy.visit("https://magento.softwaretestingboard.com");
      }
}
export default new Navigation();