import formPage from '../pages/formPage'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
  beforeEach(() => {
    // runs before each test in the block
    cy.viewport(1280, 1100)
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  describe('Happy Scenario', () => {
    //test case
    it('tescase1', () => {
      const f = new formPage()
      f.putName()
      

    })
})
