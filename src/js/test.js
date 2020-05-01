import Vue from 'vue';
import load from 'audio-loader'
import play from 'audio-play'



// load('./music/fiazop.mp3').then(play);
// let aa = 'あいうえお';
//
// const button = document.querySelector('button');
// button.addEventListener('click',event=>{
//     load('./music/fiazop.mp3').then(play);
//     console.log(aa);
// });

new Vue({
    el: '#app1',  //elでスコープを指定　今回は#app1
    data: {  //dataの中にプロパティを定義しておけば、vueの中で保持して使いまわせる。今回はテンプレートに表示している
        message: 'あばばばばばば'
    },
    methods: {
        btnSe: function () {
            load('./music/fiazop.mp3').then(play);
        }
    }
})



