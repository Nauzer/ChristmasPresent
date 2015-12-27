Template.home.onRendered(function() {
    $('.slider').slider({full_width: true});
    console.log(Session.get("texts"));
    if(Session.get("texts") == undefined) {
        Session.set("texts", {
            gameName: "Kies je cadeautje!",
            quote1: "Heb je geluk of is het stuk?",
            quote2: "Is het hot of krijg je schrot?",
            quote3: "Is het snoep of krijg je troep?",
            callToAction: "Kijk snel in jouw pakje!"
        });
    }
});

Template.home.helpers({
    session: function(key) {
        return Session.get("texts")[key];
    }
});