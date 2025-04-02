describe('ejercicios', () => {

it('Crear tarea', () => {

cy.visit("https://todomvc.com/examples/react/dist/#/")
cy.get('[data-testid="text-input"]').type('comprar pan{enter}')

})
it('Marcar tarea como completada', () => {
cy.visit("https://todomvc.com/examples/react/dist/#/")
cy.get('[data-testid="text-input"]').type('comprar pan{enter}')
cy.get('[data-testid="todo-item-toggle"]').click()

})
it('Desmarcar tarea', () => {
cy.visit("https://todomvc.com/examples/react/dist/#/")
cy.get('[data-testid="text-input"]').type('comprar pan{enter}')
cy.get('[data-testid="todo-item-toggle"]').click()
cy.get('[data-testid="todo-item-toggle"]').click()
})

it('Editar tarea', () => {
cy.visit("https://todomvc.com/examples/react/dist/#/")
cy.get('[data-testid="text-input"]').type('comprar pan{enter}')
cy.get('[data-testid="todo-item-label"]').dblclick()
cy.get('[data-testid="todo-item-label"]').clear()
cy.get('[data-testid="text-input"]').type('comprar leche{enter}')

})
})
