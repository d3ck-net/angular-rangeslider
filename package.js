Package.describe({
    summary: 'another version of the slider with a slight hack'
});

Package.onUse(function(api) {
    api.versionsFrom('0.9.0');
    api.addFiles('angular.rangeSlider.css', 'client');
    api.addFiles('angular.rangeSlider.js', 'client');
});