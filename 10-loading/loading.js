$(function () {
  const $window = $(window);
  const $body = $('body');
  // '' : 원래는 문자열로 작성해야하지만 문자열의 경우 공백 생기면 오류 남
  // `` : 줄 바뀐 상태에서도 오류 나지 않음
  let $loading = `<div class="loading">
                            <p>loading...</p>
                          </div>`;

  // loading 구조 삽입
  // html 구조를 삽입하는 매서드 : append
  $body.append($loading);

  // jQuery 객체로 만들기
  $loading = $('.loading');

  $window.on('load', function () {
    // 로딩 완료 후 1초 뒤에 사라지게

    // <타이머> setTimeout :  반복 없음 / setInterval : 반복
    setTimeout(function () {
      $loading.fadeOut();
    }, 1000);
  });
});
