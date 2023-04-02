class formPage{

    elements = { 
         fristName:'#firstName',
         lastName:'#lastName',
         email: '#userEmail',
         gender: '[type="radio"]',
         labelRadio: '[for="gender-radio-1"]',
         userNumber: '#userNumber',
         dateOfBirth: '#dateOfBirthInput',
         subjects: '.subjects-auto-complete__value-container',
         hobbies: '[type="checkbox"]',
         uploadImage: '#uploadPicture',
         address: '#currentAddress',
         dropListState: '.css-1hwfws3',
         dropListCity: '.css-yk16xz-control',
         btnSubmit: '#submit',
         dialogMessage: '#example-modal-sizes-title-lg',
    }
    putName(strFristName,strLastName) {
        cy.get(this.elements.fristName).type(strFristName)
        cy.get(this.elements.lastName).type(strLastName)
    }
    putEmail(strEmail){
        cy.get(this.elements.email).type(strEmail)        
    }
    selectGender(strGender){
        cy.get(this.elements.gender).check(strGender,{ force: true })
    }
    putMobileNumber(strUserNumber){
        cy.get(this.elements.userNumber).type(strUserNumber)
    }
    setDateOfBirth(strDate, strMonth, strYear){
        cy.get(this.elements.dateOfBirth).click()
        cy.get('.react-datepicker__month-select').select(strMonth)
        cy.get('.react-datepicker__year-select').select(strYear)
        cy.get('[role="option"]').contains(strDate).click()
    }
    putSubjects(strSubject){
        cy.get(this.elements.subjects).type(strSubject)
    }
    seclectHobby(strHobby){
        cy.get(this.elements.hobbies).check(strHobby,{ force: true })
    }
    selectAllHobbies(){
        this.seclectHobby('1')
        this.seclectHobby('2')
        this.seclectHobby('3')
    }
    attachImage(strImage){
        cy.get(this.elements.uploadImage).selectFile(strImage, { force: true })
    }
    putAddress(strAddress){
        cy.get(this.elements.address).type(strAddress)
    }
    selectSate(idState){
        cy.get(this.elements.dropListState).contains('Select State').click()
        cy.get('#react-select-3-option-'+idState).click()
    }
    selectCity(idCity){
        cy.get(this.elements.dropListState).contains('Select City').click()
        cy.get('#react-select-4-option-'+idCity).click()
    }
    clickSubmit() {
        cy.get(this.elements.btnSubmit).click()
    }
    putRequiredFields(strFristName,strLastName,strGender,strMobileNumber){
        this.putName(strFristName,strLastName)
        this.selectGender(strGender)
        this.putMobileNumber(strMobileNumber)
    }
    assertText(element,str){
        cy.get(element).should('have.text',str)
    }
    assertBorderColor(element,value){
        cy.get(element).should('have.css','border-color',value)
    } 
    putNotRequiredFields(email,dateOfBirth,subjects,address,idState,idCity){
        this.putEmail(email)
        this.setDateOfBirth(dateOfBirth[0],dateOfBirth[1],dateOfBirth[2])
        this.putSubjects(subjects)
        this.selectAllHobbies()
        this.putAddress(address)
        this.selectSate(idState)
        this.selectCity(idCity)
    } 
};
export default formPage