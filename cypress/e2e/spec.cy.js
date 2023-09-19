import 'cypress-mochawesome-reporter/register';
//describe('template spec', () => {
  //it('passes', () => {
   // cy.visit('https://example.cypress.io')
 // })
//})

//describe('My First Test', () => {
  //it('Does not do much!', () => {
   // expect(true).to.equal(true)
 // })
//})
//describe('template spec', () => {
  //it('passed', () => {
    //cy.visit('https://www.agl.com.au')
    //cy.contains('Compare energy plans');
    //cy.contains('Compare energy plans').click()
    //cy.contains('Compare energy');
    

  //})
//})
it("Open the Url", () => {
  cy.visit("https://www.agl.com.au");
  cy.get('#button-bbba39ef41').click();


 });
it("Click on compare energy plan", () => {
  cy.wait(4000);
  //cy.get('#button-bbba39ef41 > span').click();
 // cy.get('#button-bbba39ef41').click({force: true});
  //cy.get('#container-97550e0812 > div > div > div > div > div.cmp-hero-banner__item.hero-banner-content > div.button.agl-btn-primary--default.btn-fitted.btn-left.section').trigger("click");
 // cy.contains(' Energy ').click();
 // cy.contains('Compare energy plans').click();
 });

 it("lklkl", () => {

 });


//it('Verify Header is present',()=>{
  //cy.get('h1').first().should('be.exist');
  
  //})
//describe('My First Test', () => {
  //it('Does not do much!', () => {
   // expect(true).to.equal(false)
 // })
//})
