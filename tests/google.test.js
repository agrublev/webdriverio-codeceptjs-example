Feature('Search');


Scenario('for bananas wikipedia article', (I, homePage) => {
    I.amOnPage('/');
    homePage.searchFor('banana wikipedia');
    I.see('Banana - Wikipedia, the free encyclopedia');
});

Scenario('for oranges wikipedia article', (I, homePage) => {
    I.amOnPage('/');
    homePage.searchFor('orange wikipedia');
    I.see('Orange - Wikipedia, the free encyclopedia');
});
