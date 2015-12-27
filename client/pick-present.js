Template.pickPresent.onRendered(function() {

    Session.set("currentPresentType", undefined);

    if (-1 < Meteor.user().emails[0].address.indexOf("gertienaus") ) {
        // dan is het mama
        Session.set("presents", [
            {
                name: "Nieuwe iPad",
                caption: "Als nieuw...",
                type: "crap",
                imgUrl: "http://2.bp.blogspot.com/-S9LZ3gkW8ZE/UHSUJxKQLYI/AAAAAAAAAFg/2nUPdTt92MI/s1600/broken_ipad.jpg"
            },
            {
                name: "Modern paar skies",
                caption: "Roets naar beneden...",
                type: "crap",
                imgUrl: "http://www.snowrepublic.com/upload/620x349/659566390532ff7d484302.JPG"
            },
            {
                name: "Aai foons",
                caption: "De modernste toestellen... voor jou!",
                type: "crap",
                imgUrl: "http://www.techwacky.com/wp-content/uploads/old-nokia-cell-phones-300x254.jpg"
            },
            {
                name: "Lekker etentje",
                caption: "Met allemaal!",
                type: "present",
                imgUrl: "http://blog.personalbodyplan.com/wp-content/uploads/2015/07/214.jpg"
            }
        ]);
    } else if (-1 < Meteor.user().emails[0].address.indexOf("nauspja") ) {
        // dan is het papa
        Session.set("presents", [
            {
                name: "1000 Trombones",
                caption: "Als nieuw...",
                type: "crap",
                imgUrl: "http://www.jingleweb.nl/wp-content/uploads/2013/01/788901424_3a0fd1be66_z-300x254.jpg"
            },
            {
                name: "Unne berg zooi!",
                caption: "Om flink van te genieten",
                type: "crap",
                imgUrl: "https://ikbenaargh.files.wordpress.com/2015/11/img_0048.jpg"
            },
            {
                name: "Goor fryer",
                caption: "De smerigste vetbak van Nederland!",
                type: "crap",
                imgUrl: "http://i39.tinypic.com/2qnmlad.jpg"
            },
            {
                name: "Airfryer Accessoire",
                caption: "Bak alle hapjes in laagjes",
                type: "present",
                imgUrl: "https://s-media-cache-ak0.pinimg.com/736x/1c/34/47/1c3447aa89ef0b6e6fa1da0bbb9ef067.jpg"
            }
        ]);
    } else if (-1 < Meteor.user().emails[0].address.indexOf("hoffelder") ) {
        // dan is het Hannah
        Session.set("presents", [
            {
                name: "Soccer match",
                caption: "Netherlands vs. Germany in June '16",
                type: "crap",
                imgUrl: "http://sf.co.ua/2012/wallpaper-1985906.jpg"
            },
            {
                name: "Camping trip",
                caption: "Cosy, in a tent...",
                type: "crap",
                imgUrl: "https://kzzinsky.files.wordpress.com/2015/01/crappy-tent2.jpg"
            },
            {
                name: "Your favorite food",
                caption: "Romantic dinner 4 2",
                type: "crap",
                imgUrl: "http://www.news.at/_storage/asset/3086460/storage/newsat:key-visual/file/29710790/mann-fleisch-teller.jpg"
            },
            {
                name: "Treat yourself good",
                caption: "Evening @ Zwaluwhoeve 26-12",
                type: "present",
                imgUrl: "http://cdn.nlladify-yanzhai.savviihq.com/wp-content/uploads/2015/02/Zwembad.jpg"
            }
        ]);
    } else {
        Session("presents", undefined);
    };

    Meteor.setTimeout(function() {
        $('.slider').slider({full_width: true});
        $('.slider').slider('pause');
        $('.indicators').css( "visibility", "hidden" );
    },200);
});

Template.pickPresent.events({
    'click #pickPresent' : function(e) {
        var current = $('.slider').find('.slides li.active').index();

        console.log(current);

        Session.set("currentPresentType", Session.get("presents")[current].type);

        $('#modal1').openModal();
    },
    'click #rejectPresent' : function(e) {
        var current = $('.slider').find('.slides li.active').index();

        console.log(current);

        if ( Session.get("presents").length > current ) {
            $('.slider').slider('next');
            Meteor.setTimeout(function() {
                $('.slider').slider('pause');
            },500);
        }
    },
    'click #logout' : function(e) {
        Router.go('/');
        Meteor.logout();
    }
});

Template.pickPresent.helpers({
    crap: function() {
        return Session.get("crap");
    },
    presents: function() {
        return Session.get("presents");
    },
    currentPresent: function() {
        try {
            var current = $('.slider').find('.slides li.active').index();
            var present = Session.get("presents")[current];
            return present;
        } catch (e) {

        }
    },
    userEmail: function() {
        return Meteor.user().emails[0].address;
    },
    userImg: function() {
        if (-1 < Meteor.user().emails[0].address.indexOf("gertienaus")) {
            return "http://www.snowchamps.nl/wp-content/uploads/2013/03/candice-swanepoel-5.jpg";
        } else if (-1 < Meteor.user().emails[0].address.indexOf("hoffelder")) {
            return "https://x2.xingassets.com/image/d_8_0_d9ad77c90_12266761_4/hannah-hoffelder-foto.1024x1024.jpg";
        } else {
            return "http://www.tonvansteenbergen.nl/media/rokgallery/b/bf822af0-dd5d-484c-c09b-4e1f8be792c8/159235eb-3468-4b51-fe5e-9af58e650245.jpg";
        }
    },
    canReject: function() {
        try {
            var current = $('.slider').find('.slides li.active').index();

            if ( Session.get("presents").length > current+1 ) {
                return true;
            }
        } catch (e) {

        }
    },
    currentPresentType: function() {
        try {
            if(Session.get("language") == "en") {
                if ("crap" == Session.get("currentPresentType")) {
                    return "You picked crap"
                } else {
                    return "Yeah, you picked your present"
                }
            } else {
                if ("crap" == Session.get("currentPresentType")) {
                    return "Je koos voor rotzooi"
                } else {
                    return "Je koos voor je cadeautje"
                }
            }

        } catch(e) {

        }
    },
    showPoem: function() {
        try {
            if ("crap" != Session.get("currentPresentType") && (-1 < Meteor.user().emails[0].address.indexOf("gertienaus") || -1 < Meteor.user().emails[0].address.indexOf("nauspja"))) {
                return true;
            }
        } catch(e) {

        }
    },
    showMessageHannah: function() {
        try {
            if ("crap" != Session.get("currentPresentType") && -1 < Meteor.user().emails[0].address.indexOf("hoffelder")) {
                return true;
            }
        } catch(e) {

        }
    },
    buttonText: function() {
        try {
            if(Session.get("language") == "en") {
                if ("crap" != Session.get("currentPresentType")) {
                    return "WRAP IT FOR ME";
                } else {
                    return "HMM, MAYBE NOT"
                }
            } else {
                if ("crap" != Session.get("currentPresentType")) {
                    return "PAK 'M MAAR IN";
                } else {
                    return "HMM, LAAT MAAR"
                }
            }
        } catch(e) {
            //
        }
    },
    session: function(key) {
        return Session.get(key);
    }
});