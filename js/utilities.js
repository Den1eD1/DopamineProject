var app = app || {};

app.utitities = (function () {
   function utilities() {
   }

    utilities.prototype.generateDropdowns = function () {
        $('#project-dropdown').ddslick({
            data: [
                {
                    text: "Photoshop",
                    value: 1,
                    selected: true,
                    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/1041px-Adobe_Photoshop_CS6_icon.svg.png"

                },
                {
                    text: "Foursquare",
                    value: 4,
                    selected: false,
                    description: "Description with Foursquare",
                    imageSrc: "http://dl.dropbox.com/u/40036711/Images/foursquare-icon-32.png"
                }
            ]
            ,
            width: 370,
            background: '#FFFFFF',
            imagePosition: "left",
            selectText: "Select your favorite social network"
        });

        $('#asignee').ddslick({
            data: [
                {
                    text: "Christian Ivanov",
                    value: 1,
                    selected: true,
                    imageSrc: "img/trollFace.jpg"
                },
                {
                    text: "Gabriel Dimitrov",
                    value: 4,
                    selected: false,
                    imageSrc: "http://bullcityevents.com/wp/wp-content/uploads/2015/07/Check-in-minion.jpg"
                }
            ]
            ,
            width: 450,
            background: '#FFFFFF',
            imagePosition: "left",
            selectText: "Select your favorite social network"
        });

        $('#version').ddslick({
            data: [
                {
                    text: "v1.0",
                    value: 1,
                    selected: true
                },
                {
                    text: "v.2.0",
                    value: 2
                }
            ]
            ,
            width: 61,
            background: '#FFFFFF',
            imagePosition: "left",
            selectText: "Select your favorite social network"
        });

        utilities.prototype.generateTextArea = function () {
            CKEDITOR.replace( 'project-description', {
                uiColor : '#EEEEEE'
            } );
        }
    };

    utilities.prototype.generateJSON = function (containerType, taskHeader, iconClass) {
        var json = {
            containerType: containerType,
            taskHeader: taskHeader,
            iconClass: iconClass
        };

        return json;
    };


    return {
        load: function () {
            return new utilities();
        }
    }
}());