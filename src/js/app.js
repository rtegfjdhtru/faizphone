import Vue from 'vue';

new Vue({
    el: '#header',
    data: {
        isActive: false
    },
    methods: {
        menuActive: function () {
            if (this.isActive === false) {
                return this.isActive = true;
            } else {
                return this.isActive = false;
            }
        },
        menuClickOut: function () {
            this.isActive = false;
        }
    }

});



//
// new Vue({
//     el: '#gallery',
//     data: {
//         isActiveSmall: false,
//         isActiveMedium: false,
//         isActiveLarge: false,
//     },
//     methods: {
//         imgWidthLarge: function () {
//             if (this.isActiveLarge === false) {
//                 this.isActiveLarge = true;
//                 this.isActiveSmall = false;
//                 this.isActiveMedium = false;
//             }
//         },
//         imgWidthMedium: function () {
//             if (this.isActiveMedium === false) {
//                 this.isActiveLarge = false;
//                 this.isActiveSmall = false;
//                 this.isActiveMedium = true;
//             }
//         },
//         imgWidthSmall: function () {
//             if (this.isActiveSmall === false) {
//                 this.isActiveLarge = false;
//                 this.isActiveSmall = true;
//                 this.isActiveMedium = false;
//             }
//         },
//
//     },
//     computed:{
//         imgWidthClass: function (){
//             return{
//                 'p-gallery-container--panel--active--large': this.isActiveLarge,
//                 'p-gallery-container--panel--active--medium':this.isActiveMedium,
//                 'p-gallery-container--panel--active--small':this.isActiveSmall
//             }
//         }
//     }
// });