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

 });
 it("Click on compare energy plan", () => {
  cy.contains('Compare energy plans').click();
 });



//it('Verify Header is present',()=>{
  //cy.get('h1').first().should('be.exist');
  
  //})
//describe('My First Test', () => {
  //it('Does not do much!', () => {
   // expect(true).to.equal(false)
 // })
//})
