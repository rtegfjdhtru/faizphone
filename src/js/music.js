//version 1.1.1
import Vue from 'vue';
// import axios from 'axios';
import load from 'audio-loader'
import play from 'audio-play'

new Vue({
    el: '#header',
    data: {
        power:false,
        current: {},
        count: 0,
        hensin: false,
        number: '',
        single: false,
        burst: false,
        shotcount: 12,
        standby: false,
        player: new Audio(),
        se: [
            {
                id: 1,
                title: 'faizop',
                src: './music/fiazop.mp3'
            },
            {
                id: 2,
                title: 'faiz1',
                src: './music/faizp1.mp3'
            },
            {
                id: 3,
                title: 'faiz2',
                src: './music/faizp2.mp3'
            },
            {
                id: 4,
                title: 'faiz3',
                src: './music/faizp3.mp3'
            },
            {
                id: 5,
                title: 'standoby',
                src: './music/standoby2.mp3'
            },
            {
                id: 6,
                title: 'hensin',
                src: './music/setcomplete.mp3'
            },
            {
                id: 7,
                title: 'Exceed',
                src: './music/Exceed.mp3'
            },
            {
                id: 8,
                title: 'jetStrikerComeCloser',
                src: './music/3821.mp3'
            },
            {
                id: 9,
                title: 'error',
                src: './music/error.mp3'
            },
            {
                id: 10,
                title: 'singleMode',
                src: './music/singmode.mp3'
            },
            {
                id: 11,
                title: 'burstMode',
                src: './music/burstmode.mp3'
            },
            {
                id: 12,
                title: 'charge',
                src: './music/charge.mp3'
            },
            {
                id: 13,
                title: 'off',
                src: './music/off.mp3'
            },
            {
                id: 14,
                title: 'singelModeSe',
                src: './music/singlese.mp3'
            },
            {
                id: 15,
                title: 'burstModeSe',
                src: './music/burstse.mp3'
            },
            {
                id: 16,
                title: 'null',
                src: './music/null.mp3'
            },
            {
                id:17,
                title:'off',
                src:'./music/offse.mp3'
            },

        ]
    },
    //起動音
    // mounted: function () {
    //     this.current = this.se[0];
    //     this.player.src = this.current.src;
    //     this.player.play();
    // },
    mounted: function () {
        // var req = new XMLHttpRequest();
        // req.open('GET', 'localhost:3000', true);
        // console.log(req);
    },
    methods: {
        playBtn: function (num) {
            if (this.count === 0) {
                this.current = this.se[1];
                this.player.src = this.current.src;

                load('./music/faizp1.mp3').then(play);
                this.number = num;
                this.count++;
                console.log(this.number);
            } else if (this.count === 1) {
                this.current = this.se[2];
                this.player.src = this.current.src;
                load('./music/faizp2.mp3').then(play);
                this.number = this.number + num;
                this.count++;
                console.log(this.number);
            } else if (this.count === 2) {
                this.current = this.se[3];
                this.player.src = this.current.src;
                load('./music/faizp3.mp3').then(play);
                this.number = this.number + num;
                this.count++;
                console.log(this.number);
            } else if (this.count === 3) {
                this.current = this.se[3];
                this.player.src = this.current.src;
                load('./music/faizp3.mp3').then(play);
                this.number = this.number + num;
                this.count = 0;
                console.log(this.number);
            }
        },


        judg: function () {
            if (this.number === '555' && this.hensin === false) {
                //変身
                this.current = this.se[4];
                this.hensin = true;
                setTimeout(function () {
                    this.current = this.se[5];
                    this.player.src = this.current.src;
                    load(this.player.src).then(play);
                    this.number = '';
                }.bind(this), 1000)
            } else if (this.hensin !== false && this.number === '') {
                //Exceed charge
                this.current = this.se[6];
            } else if (this.hensin !== false && this.number === '3821') {
                this.current = this.se[7];
            } else if (this.hensin !== false && this.number === '103') {
                this.current = this.se[9];
                this.single = true;
                this.burst = false;
            } else if (this.hensin !== false && this.number === '106') {
                this.current = this.se[10];
                this.burst = true;
                this.single = false;
            } else if (this.hensin !== false && this.number === '279') {
                this.current = this.se[11];
                this.shotcount = 12;
            } else {
                //指定の番号出なければエラー音
                this.current = this.se[8];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
            }
            this.player.src = this.current.src;
            load(this.player.src).then(play);
            //番号の初期化
            this.number = '';
            this.count = 0;
        },
        //変身解除
        off: function () {
            if (this.hensin === true) {
                this.current = this.se[12];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
                this.hensin = false
            }
        },
        //コマンド初期化
        clear: function () {
            load('./music/offse.mp3').then(play);
            this.number = '';
            this.count = 0;
        },
        shot: function () {
            if (this.single === true && this.hensin === true && this.shotcount > 0) {
                this.current = this.se[13];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
                this.shotcount--;

                //空の場合
            } else if  (this.shotcount === 0) {
                this.current = this.se[15];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
            }

            else if  (this.burst === true && this.hensin === true　&& this.shotcount > 0) {
                this.current = this.se[14];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
                this.shotcount = this.shotcount - 3;
                console.log(this.shotcount);

                //空の場合
            }else if (this.shotcount === 0) {
                this.current = this.se[15];
                this.player.src = this.current.src;
                load(this.player.src).then(play);
            }
        },
        on:function(){
            if(this.power === false){
                this.power = true;
                this.current = this.se[0];
                this.player.src = this.current.src;
                this.player.play();
                //全て初期化
                this.hensin = false;
                this.number = '';
                this.count = 0;
            }
        }
    },


})
