// 공유하기
function share(sns) {
    var thisUrl = document.URL;
    var snsTitle = "Addict";
    if (sns == 'facebook') {
        var url = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(thisUrl);
        window.open(url, "", "width=486, height=286");
    }
    else if (sns == 'twitter') {
        var url = "http://twitter.com/share?url=" + encodeURIComponent(thisUrl) + "&text=" + encodeURIComponent(snsTitle);
        window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
    }
    else{
        var url = "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(thisUrl) + "&text=" + encodeURIComponent(snsTitle);
        window.open(url, "", "width=486, height=286");        

        // 카카오톡
        // // 사용할 앱의 JavaScript 키 설정
        // Kakao.init('fe12b1906251554b53a917060c58eadf');
        // // 카카오링크 버튼 생성
        // Kakao.Link.createDefaultButton({
        //     container: '#btnKakao', // HTML에서 작성한 ID값
        //     objectType: 'feed',
        //     content: {
        //         title: "에이딕트", // 보여질 제목
        //         description: "에이딕트", // 보여질 설명
        //         imageUrl: thisUrl, // 콘텐츠 URL
        //         link: {
        //             mobileWebUrl: thisUrl,
        //             webUrl: thisUrl
        //         }
        //     }
        // });
    }
}

function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

function copyLink() {
    const link = document.location.href;
    copyToClipboard(link);
    alert("주소가 복사되었습니다.");
};