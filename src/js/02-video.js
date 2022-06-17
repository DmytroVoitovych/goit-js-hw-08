import Player from '@vimeo/player';
var throttle = require('lodash.throttle'); 
const iframe = document.querySelector('iframe');

const VIDEO_STORAGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem(VIDEO_STORAGE_KEY, data.seconds); //записываем данные в хранилище
     //   console.log(localStorage.getItem('videoplayer-current-time')); // проверка лодаша ) все гуд
};

const optimizedOnPlay = throttle(onPlay, 1000); 
player.on('timeupdate', optimizedOnPlay);
// гайд который мне помог https://habr.com/ru/post/647359/

const setTime = localStorage.getItem(VIDEO_STORAGE_KEY);
if (setTime) {//правка касаемо записаного времени
    player.setCurrentTime(setTime).then(function (seconds) {  // получаем данные с хранилища
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}

// ниже мои муки и попытки сделатть ДЗ)))))))))))))))))))
//     import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
// const iframe = document.querySelector('iframe');
// // import _ from 'lodash.throttle';
// // import throttle from 'lodash/throttle';

// const player = new Player(iframe);

// const onPlay = function (data) {
//     // let num = 0;//пробы пера
//     localStorage.setItem("videoplayer-current-time", data.seconds); //записываем данные в хранилище
//      // const v = Math.round(+Object.values(localStorage).join(""));  //пробы пера
//     // return num += v;  //пробы пера
//     // console.log(num);//пробы пера
// //   console.log(localStorage.getItem('videoplayer-current-time')); // проверка лодаша ) все гуд
// };
// const optimizedHandler = throttle(onPlay, 1000); 
// player.on('timeupdate', optimizedHandler);
// // гайд который мне помог https://habr.com/ru/post/647359/
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {  // получаем данные с хранилища
//         // seconds = the actual time that the player seeked to
//     }).catch(function (error) {
//         switch (error.name) {
//             case 'RangeError':
//                 // the time was less than 0 or greater than the video’s duration
//                 break;

//             default:
//                 // some other error occurred
//                 break;
//         }
//     });




// const a = Math.pow(2.6525285981219103, 32);
// console.log(Math.round(2.6525285981219103));
