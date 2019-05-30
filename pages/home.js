const I = actor();


module.exports = {

    // setting locators
    searchField: "#form-email",

    // introducing methods
    fillFields(value) {
        I.fillField(this.searchField, value);
        I.click("#login-button");
    }

};
