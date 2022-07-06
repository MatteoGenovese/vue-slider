var app = new Vue({
    el: "#app",
    data: {
        slides: [{
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                activeObject: true,
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
                activeObject: false,
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                activeObject: false,

            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                activeObject: false,
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                activeObject: false,
            }
        ],
        mainIndex: 0,
        hover: true,
        clock: null,

    },
    methods: {
        nextButtonClicked: function() {
            this.mainIndex++;
            if (this.mainIndex === this.slides.length) {
                this.mainIndex = 0
            }

        },
        prevButtonClicked: function() {
            this.mainIndex--;
            if (this.mainIndex === -1) {
                this.mainIndex = this.slides.length - 1;
            }
        },

        clickOnThumbnail: function(indexPassed) {
            this.mainIndex = indexPassed;
        },

        stopInterval: function() {
            clearInterval(this.clock);
            this.clock = null;
        },
        continueInterval: function() {
            if (this.clock === null) {
                this.clock = setInterval(this.nextButtonClicked, 1500);
                //this.clock = setInterval(() = {
                // this.nextButtonClicked();
                // }, 1000);
            }
        }


    },
    updated() {
        console.log("qualcosa è cambiato");
    },
    created() {
        this.continueInterval();
    }
});