const url = 'https://food-hayang.netlify.app/'

function setShare(){
    var resultImg = document.querySelector('#figImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '뭐먹양 | 하양 맛집 사이트'
    const shareDes = document.querySelector('#names');
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [
            {
                title: '웹으로 보기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ],
    });
}