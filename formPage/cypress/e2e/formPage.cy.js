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
    
    cy.get('#firstName').type('Kha')
    cy.get("#lastName").type('Hoai')
    cy.get('[type="radio"]').check('Male',{ force: true })
    cy.get('#userNumber').type('9825467895')
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('February')
    cy.get('.react-datepicker__year-select').select('2003')
    cy.get('[role="option"]').contains('7').click()
    cy.get('#submit').click()
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

describe('Student can not successfully register', () => {  
  //test case
  it('TC3 - with all empty fields', () => {    
    cy.get('#submit').click()
    //cy.wait(50000)
    cy.get('#firstName').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('[for="gender-radio-1"]').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#userNumber').should('have.css','border-color','rgb(220, 53, 69)')
  })
  it('TC4', () => {    
    cy.get('#firstName').type('*Lin45')
    cy.get("#lastName").type('2ho@i')
    cy.get('#userEmail').type('ngan@com.123')    
    cy.get('[type="radio"]').check('Other',{ force: true })
    cy.get('#userNumber').type('0985a5741#')
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('June')
    cy.get('.react-datepicker__year-select').select('2024')
    cy.get('[role="option"]').contains('25').click()
    cy.get('.subjects-auto-complete__value-container').type('co{enter}')
    cy.get('[type="checkbox"]').check('1',{ force: true })
    cy.get('[type="checkbox"]').check('2',{ force: true })    
    cy.get('#uploadPicture').selectFile('image1.png', { force: true })
    cy.get('#currentAddress').type('123 D5 street')
    cy.get('.css-1hwfws3').contains('Select State').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('.css-yk16xz-control').contains('Select City').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()  
    cy.get('#userNumber').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#userEmail').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#firstName').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#dateOfBirthInput').should('have.css','border-color','rgb(220, 53, 69)')    
  })
  it('TC5', () => {    
    cy.get('#firstName').type('Nguyen Dinh linh Sang Hoang Phuc Khang Anh Dieu Thuc')
    cy.get("#lastName").type('Trinh Nguyen Dinh Vinh Sang Hoang Phuc Khang Anh Duc')
    cy.get('#userEmail').type('nguyenlinh@gmail.com')    
    cy.get('[type="radio"]').check('Other',{ force: true })
    cy.get('#userNumber').type('985273147822893574')
    cy.wait(2000)
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('March')
    cy.get('.react-datepicker__year-select').select('2005')
    cy.get('[role="option"]').contains('2').click()
    cy.get('.subjects-auto-complete__value-container').type('p{enter}')
    cy.get('[type="checkbox"]').check('3',{ force: true })   
    cy.get('#currentAddress').type('12 Harya stree')
    cy.get('.css-1hwfws3').contains('Select State').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('.css-yk16xz-control').contains('Select City').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()  
    cy.get('#userNumber').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#firstName').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#lastName').should('have.css','border-color','rgb(220, 53, 69)')       
  })
  it('TC6 - Moblie Number < 10 digits', () => {    
    cy.get('#firstName').type('Anh')
    cy.get("#lastName").type('dinh')
    cy.get('#userEmail').type('susu124@gmail.com')    
    cy.get('[type="radio"]').check('Female',{ force: true })
    cy.get('#userNumber').type('1286')
    cy.get('#dateOfBirthInput').click()    
    cy.get('.react-datepicker__month-select').select('December')
    cy.get('.react-datepicker__year-select').select('2002')
    cy.get('[role="option"]').contains('9').click()
    cy.get('.subjects-auto-complete__value-container').type('co{enter}')
    cy.get('[type="checkbox"]').check('1',{ force: true })
    cy.get('[type="checkbox"]').check('2',{ force: true })
    cy.get('#currentAddress').type('123 D5 street')
    cy.get('.css-1hwfws3').contains('Select State').click()
    cy.get('#react-select-3-option-1').click()
    cy.get('.css-yk16xz-control').contains('Select City').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('#submit').click()
    cy.get('#userNumber').should('have.css','border-color','rgb(220, 53, 69)')     
  })
})