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

describe('Student successfully register', () => {
    //test case
  it('TC1 - successfully register with valid values of required fields', () => {
    const f = new formPage()
    f.putRequiredFields('Kha','Hoai','Male','9825467895')
    f.clickSubmit()
    f.assertText(f.elements.dialogMessage,'Thanks for submitting the form')
  })
  it('TC2 - ',() => {
    const f = new formPage()
    f.putRequiredFields('Linh','Nguyen','Female','9852314782')
    f.putNotRequiredFields('nguyenkinh@gmail.com',['27','august','1998'],'m{enter}','12 AA street','2','1')
    f.attachImage('image1.png')
    f.clickSubmit()
    f.assertText(f.elements.dialogMessage,'Thanks for submitting the form')
  })
})

describe('Student can not successfully register', () => {
  //test case
  it('TC3 - successfully register with empty values of all fields', () => {
    const f = new formPage()  
    f.clickSubmit()
    f.assertBorderColor(f.elements.fristName,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.lastName,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.labelRadio,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.userNumber,'rgb(220, 53, 69)')
  })
  it('TC4 - FisrstName and LastName: "2hang$"; invalid Email format, Mobile Number: "4875#ak8999", DateofBirth > current date',() => {
    const f = new formPage()
    f.putRequiredFields('*Lin45','2ho@i','Other','0985a5741#')
    f.putNotRequiredFields('ngan@com.123',['25','June','2024'],'co{enter}','123 D5 street','2','1')
    f.attachImage('image1.png')
    f.clickSubmit()
    f.assertBorderColor(f.elements.email,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.userNumber,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.fristName,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.lastName,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.dateOfBirth,'rgb(220, 53, 69)')
  })
  it('TC5 - FisrstName and LastName: "2hang$"; invalid Email format, Mobile Number: "4875#ak8999", DateofBirth > current date',() => {
    const f = new formPage()
    const fristName = 'Nguyen Dinh linh Sang Hoang Phuc Khang Anh Dieu Thuc'
    const lastName = 'Trinh Nguyen Dinh Vinh Sang Hoang Phuc Khang AnhDuc'
    f.putRequiredFields(fristName,lastName,'Other','198123654789586')
    f.putNotRequiredFields('nnguyenlinh@gmail.com',['2','March','2005'],'ph{enter}','12 Harya street','2','1')
    f.attachImage('image1.png')
    f.clickSubmit()  
    f.assertBorderColor(f.elements.userNumber,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.fristName,'rgb(220, 53, 69)')
    f.assertBorderColor(f.elements.lastName,'rgb(220, 53, 69)') 
  })
  it('TC6 - Mobile Number <10 digits',() => {
    const f = new formPage()
    f.putRequiredFields('anh','dinh','Female','1286')
    f.putNotRequiredFields('susu124@gmail.com',['9','December','2002'],'m{enten}ph{enter}hi{enter}','12 Noida center','2','1')
    f.clickSubmit()  
    f.assertBorderColor(f.elements.userNumber,'rgb(220, 53, 69)')    
  })
})