Feature('Search');


Scenario('Login', (I, homePage) => {
    I.amOnPage('https://dev.freedcamp.chat/login');
    I.wait(1);
    homePage.fillFields('assd@asd.com');
    I.see('ERROR');
});
