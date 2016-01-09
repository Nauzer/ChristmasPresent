Template.english.onRendered(function() {
    Session.set("language", "en");
    Session.set("texts", {
        gameName: "Pick your present!",
        quote1: "Are you lucky or is it sucky!",
        quote2: "Is it hot or is it not'?",
        quote3: "Is it crap, in a nice gift wrap?!",
        callToAction: "Open your package now!"
    });
    Router.go('/');
});