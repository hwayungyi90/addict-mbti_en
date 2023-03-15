
const intro = document.querySelector('.intro'); // 인트로
const questionArea = document.querySelector('.question'); // 질문지
const loadingArea = document.querySelector('.loading') // 로딩

// 시작하기
const start = document.querySelector('.intro .action a');
start.addEventListener('click', () => {
    intro.style.display = 'none';
    questionArea.style.display = 'flex';
});

const question = {

    1: {

        "title": "You are free this weekend",

        "A": "Call your friends for a cocktail party",

        "B": "Netflix and chill",

        "type": "ei",

    },

    2: {

        "title": "You are lost in the middle of a trip",

        "A": "Search Google Map",

        "B": "Ask to random person on the street",

        "type": "ei",

    },

    3: {

        "title": "You see your ideal type at a party",

        "A": 'Ask him/her out',

        "B": "Wait till he/she checks you out",

        "type": "ei",

    },

    4: {

        "title": "If you have a $100 gift card",

        "A": "Buy your all-time favorite perfume",

        "B": "Try a new released perfume",

        "type": "sn",

    },

    5: {

        "title": "If your friend tells you about their relationship problems",

        "A": 'Give him/her an advice and solution',

        "B": 'Try to understand and connect with him/her',

        "type": "sn",

    },

    6: {

        "title": "If you have a party tomorrow",

        "A": "Decide last minute",

        "B": "Plan your outfit in advance",

        "type": "sn",

    },

    7: {

        "title": "If your friend tells you about going on a Europe trip",

        "A": "Ask him/her travel expense",

        "B": "Ask how excited he/she is",

        "type": "tf",

    },

    8: {

        "title": "If you're on Netflix before bed, you choose",

        "A": "Reality show",

        "B": "Drama series",

        "type": "tf",

    },

    9: {

        "title": "If your friend asks you if he/she gained weight",

        "A": '"You should start working out"',

        "B": '"No, you look fit as always"',

        "type": "tf",

    },

    10: {

        "title": "What reminds you when you hear the word 'peach'?",

        "A": "Sweet, fruity, juicy",

        "B": "Justin Bieber - Peaches",

        "type": "jp",

    },

    11: {

        "title": "Your anniversary is coming up",

        "A": "Make a reservation for restaurant",

        "B": "Plan the whole date",

        "type": "jp",

    },

    12: {

        "title": "If you are planning on a long drive",

        "A": "Make Spotify playlist in advance",

        "B": "Pick any playlist on Spotify",

        "type": "jp",

    },


}


$('#A').on('click', function () {
    var type = $('#type').val();
    var preValue = $('#' + type).val();
    $('#' + type).val(parseInt(preValue) + 1);
    next();
});

$('#B').on('click', function () {
    next();
});

// $('#back').on('click', function () {
//     prev();
// });

let q = 1;

// 로딩 이미지 배열
var imgArray = new Array();
imgArray[0] = "assets/images/loading/voidwood.jpg";
imgArray[1] = "assets/images/loading/blancdebloom.jpg";
imgArray[2] = "assets/images/loading/eatthepeach.jpg";
imgArray[3] = "assets/images/loading/muguet.jpg";
imgArray[4] = "assets/images/loading/musk.jpg";
imgArray[5] = "assets/images/loading/sandalwood.jpg";
imgArray[6] = "assets/images/loading/thefirst.jpg";
imgArray[7] = "assets/images/loading/tuberose.jpg";
imgArray[8] = "assets/images/loading/beforesunset.jpg";
// 로딩 기능 부여
function loader() {
    var objImg = document.getElementById('loadding');
    var imgNum = 1;
    setInterval(function () {
        // imgNum = Math.round(Math.random() * 8);
        objImg.src = imgArray[imgNum++];
        if (imgNum == imgArray.length) imgNum = 0;
    }, 400);
}

function next() {

    if (q > 12) {
        $('.question').hide();
        $('.loading').show();
        $('.loading').css('display', 'flex');
        loader();
        // mbti 타입
        var mbti = "";
        ($("#ei").val() < 2 ? mbti += "i" : mbti += "e");
        ($("#sn").val() < 2 ? mbti += "n" : mbti += "s");
        ($("#tf").val() < 2 ? mbti += "f" : mbti += "t");
        ($("#jp").val() < 2 ? mbti += "p" : mbti += "j");
        setTimeout(() => {
            // 페이지이동
            window.location.href = '/result/' + mbti + '.html';
        }, 3000);
        return false;
    } else {
        $('#questionTit').html(question[q]['title']);

        $(".progress span").attr('style', 'width:calc(100/12*' + q + '%)')

        $('#Atarget').html(question[q]['A']);

        $('#Btarget').html(question[q]['B']);

        $('#type').attr('value', question[q]['type']);

        q++;
    }

}

next();
