describe(" EA Testing 1", ()=>{
    it('Navigate to ea site', ()=>{
        cy.visit('https://demosite.executeautomation.com/')
    })
    it('login to application', ()=> {
        cy.get('input[name=UserName]').type('admin')
    })
})