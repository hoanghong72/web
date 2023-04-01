Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

//hook event

  beforeEach(() => {
    // runs before each test in the block
    cy.viewport(1280, 1100)
    cy.visit('https://demoqa.com/automation-practice-form')
  })
// test Suite or test Scenario
describe('Student successfully register', () => {
  //test case
  it('TC1', () => {
    
    cy.get('#firstName').type('Sa')
    //cy.wait(1000)
    cy.get("#lastName").type('Ka')
    cy.get('#userEmail').type('s@gmail.com')
    //cy.get('#gender-radio-1').check(({ force: true }))//because id="gender-radio-1" is being covered by another element:
    cy.get('[type="radio"]').check('Female',{ force: true })
    cy.get('#userNumber').type('1234567890')    
    //cy.get('#dateOfBirthInput').clear().type('4 Mar 2024')--> loi boi vì se xuat hien them thanh phan moi tach ra khoi page nên ko thể xác thực hay tương tác lại vơới đối tượng
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('June')
    cy.get('.react-datepicker__year-select').select('1988')
    //cy.get('[role="option"]').eq(1).click()// eq get index of element, begin 0
    cy.get('[role="option"]').contains('12').click()
    //Input Subject
    cy.get('.subjects-auto-complete__value-container').type('m{enter}ch{enter}e{enter}')
    // cy.get('[type="checkbox"]').check('1')
    // cy.get('[type="checkbox"]').check('2')
    // cy.get('[type="checkbox"]').check('1')
    //cy.get('label').contains('Sports').click() sai trùng nhiều label
    //cy.get('label').contains('[type="checkbox"]',1).check() sai
    //cy.get('label[for="hobbies-checkbox-1"]').click() //đúng
    cy.get('[type="checkbox"]').check('1',{ force: true })
    cy.get('[type="checkbox"]').check('2',{ force: true })
    cy.get('[type="checkbox"]').check('3',{ force: true })
    cy.get('[type="checkbox"]').uncheck('1',{ force: true })
    cy.get('#uploadPicture').selectFile('image1.png', { force: true })
    cy.get('#currentAddress').type('12 AD street')
    cy.get('.css-1hwfws3').contains('Select State').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('.css-yk16xz-control').contains('Select City').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()
    cy.wait(100)
    cy.get('[role="dialog"]').should('be.visible')
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
  })
  it('TC2', () => {    
    cy.get('#firstName').type('Sa')
    cy.get("#lastName").type('Ka')
    cy.get('#userEmail').type('s@gmail.com')    
    cy.get('[type="radio"]').check('Female',{ force: true })
    cy.get('#userNumber').type('1234567890')
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('June')
    cy.get('.react-datepicker__year-select').select('1988')
    cy.get('[role="option"]').contains('12').click()
    cy.get('.subjects-auto-complete__value-container').type('m{enter}ch{enter}e{enter}')
    cy.get('[type="checkbox"]').check('1',{ force: true })
    cy.get('[type="checkbox"]').check('2',{ force: true })
    cy.get('[type="checkbox"]').check('3',{ force: true })
    cy.get('[type="checkbox"]').uncheck('1',{ force: true })
    cy.get('#uploadPicture').selectFile('image1.png', { force: true })
    cy.get('#currentAddress').type('12 AD street')
    cy.get('.css-1hwfws3').contains('Select State').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('.css-yk16xz-control').contains('Select City').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()
    cy.wait(100)
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
  })
})

// describe('Unhappy Scenario', () => {
//   //test case
//   it('tescase1', () => {    
    
//   })
// })