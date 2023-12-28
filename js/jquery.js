//jquery
$(function(){
    $('.location-listing').hide();
    $('.location-listing').slice(0, 4).show(); // 초기갯수
    $('.moreBtn').click(function(e){ // 클릭시 more
        e.preventDefault();
        $('.location-listing:hidden').slice(0, 4).fadeIn(200).show(); // 숨긴 설정된 4개 표시
        if($('.location-listing:hidden').length == 0){ // 컨텐츠 남아있는지 확인
           $('.moreBtn').fadeOut(100); // 컨텐츠 없을시 버튼 없애기 
        }
    });
});
