
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

        "title": "옷을 사러 갔는데<br /> 매장 직원이 내게 다가온다.",

        "A": "옷을 추천받거나 치수를 물어본다.",

        "B": "슬쩍 자리를 피해서 쇼핑을 즐긴다.",

        "type": "EI",

    },

    2: {

        "title": "오늘은 월요일!<br /> 술을 꼭 먹어야겠다.",

        "A": "모든 친구들에게 나오라고 전화한다.",

        "B": "혼술을 준비하려고 마트에 간다.",

        "type": "EI",

    },

    3: {

        "title": "코로나 끝!<br /> 오랜만에 다같이 노래방을 갔다면?",

        "A": '"내가 먼저 선빵!" 마이크부터 찾는다.',

        "B": "노래를 찾고 있는척 스마트폰을 잠깐 본다.",

        "type": "EI",

    },

    4: {

        "title": "자주 가는 음식점에<br /> 신메뉴가 나왔다면?",

        "A": "무난하게 원래 먹던 걸로 시킨다.",

        "B": "무조건 신메뉴를 시켜본다.",

        "type": "SN",

    },

    5: {

        "title": "친구가 우울하다며 전화가 왔다.",

        "A": '"음… 내 생각은…" 내 이야기를 해준다',

        "B": '"왜 그래? 무슨 일이야? 그래서?" 다 받아준다',

        "type": "SN",

    },

    6: {

        "title": "오랜만에 친구들을 만나러 간다.<br /> 오늘 뭐 입지?",

        "A": "오늘 기분에 따라 옷을 고른다.",

        "B": "전날 미리 코디해놓는다.",

        "type": "SN",

    },

    7: {

        "title": "친구가 힘들게 돈을 모아<br /> 명품을 샀다.",

        "A": "얼마주고 샀어?",

        "B": "오~ 신상~ 그동안 고생했다!",

        "type": "TF",

    },

    8: {

        "title": "옆자리에 내 이상형이 있다.<br /> 친구가 번호를 물어봐준다면?",

        "A": "에이 됐어. 그냥 앉아있자.",

        "B": "아 진짜? 나야 고맙지! 잘 되면 쏠게!",

        "type": "TF",

    },

    9: {

        "title": "오늘 일이 안풀린다.<br /> 왜그러지?",

        "A": '"오늘만 있는게 아니잖아! 할 수 있어!" 생각한다.',

        "B": '"아... 또 나야?" 라고 생각한다.',

        "type": "TF",

    },

    10: {

        "title": "썸남(녀)과 데이트 중<br /> 썸남(녀)의 친구를 만났다.",

        "A": "썸남(녀)가 소개시켜줄 때까지 기다린다.",

        "B": "먼저 다가가 인사를 건넨다.",

        "type": "JP",

    },

    11: {

        "title": "가고 싶은 음식점을 갔는데<br /> 웨이팅이 3시간이다.",

        "A": "비슷한 곳을 찾아 다른 곳으로 간다.",

        "B": "기다리자! 여기가 핫플이야!",

        "type": "JP",

    },

    12: {

        "title": "몇 년 만에<br /> 친구에게 연락이 왔다.",

        "A": "잘 지냈어? 언제 만날래? 하며 약속을 잡는다.",

        "B": "잘 지냈어? 하며 가벼운 안부를 물어본다.",

        "type": "JP",

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
        ($("#EI").val() < 2 ? mbti += "I" : mbti += "E");
        ($("#SN").val() < 2 ? mbti += "N" : mbti += "S");
        ($("#TF").val() < 2 ? mbti += "F" : mbti += "T");
        ($("#JP").val() < 2 ? mbti += "P" : mbti += "J");
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
