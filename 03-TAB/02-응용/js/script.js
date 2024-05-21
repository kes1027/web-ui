$(function () {
  // 대상을 변수에 저장
  const tabMenu = $('.tab-menu > li');
  const tabContent = $('.tab-con-item');
  const body = $('body');

  // 배경 이미지와 텍스트 정보를 배열에 저장
  const bgArr = [
    { bg: 'blackpink01.jpg', title: '첫 번째 제목 삽입' },
    { bg: 'blackpink02.jpg', title: '두 번째 제목 삽입' },
    { bg: 'blackpink03.jpg', title: '세 번째 제목 삽입' },
  ];

  // console.log(bgArr, bgArr[1].title);

  body.css('background', `url(./img/${bgArr[0]}) no-repeat 0 0 /cover`);

  // const bgArr = ['blackpink01.jpg', 'blackpink02.jpg', 'blackpink03.jpg'];

  // console.log(bgArr[0]);
  // body.css('background', 'url(../img/blackpink01.jpg) no-repeat 0 0 /cover');
  //  body.css('background', `url(./img/${bgArr[0]}) no-repeat 0 0 /cover`);

  // 초기 세팅
  tabAction(0);

  // 클릭 이벤트
  tabMenu.on('click', function (e) {
    e.preventDefault();

    const tabIdx = $(this).index();
    tabAction(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 메서드 체인 :
    tabMenu.removeClass('on').eq(index).addClass('on');
    tabContent.hide().eq(index).show();

    // 배경 이미지 변경
    body.css('background', `url(./img/${bgArr[index].bg}) no-repeat 0 0 /cover`);

    // 타이틀 변경
    tabContent.find('h2').text(bgArr[index].title);
  }
});
