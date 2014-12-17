$(function () {
    app.initialize();

    // Activate Knockout
    ko.validation.init({ grouping: { observable: false } });
    ko.applyBindings(app);

    GuruMeditation.display('Your custom message');
});
