$(function () {
  // 대상을 변수에 저장
  const $window =
    $(window); /* '' 안에 쓰지 않고, jquery 매소드를 사용하려면 제이커리의 객체가 되어야 하기 때문에 $ 사용 */
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');

    $header.removeClass('active');
  });

  // 마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    // console.log(e);
    // wheel delta : 음수면 휠 아래로 내렸다는 뜻, 양수면 휠 위로 올렸다는 뜻

    if (e.originalEvent.wheelDelta > 0) {
      // 휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      // 휠을 내렸을 때
      $header.addClass('hide');
    }
  });
});
