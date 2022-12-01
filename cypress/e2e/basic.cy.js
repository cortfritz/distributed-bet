describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('A Humble Presentation to the Society of the Technically Eternal');
  });
});
