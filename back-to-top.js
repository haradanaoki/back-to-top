function back2top(selectorButton, selectorContent, posVerticalScroll) {
  var objButton = $(selectorButton);

  // 初期状態: ボタンは非表示にしておく
  objButton.hide();

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > posVerticalScroll) {
      //スクロール位置が指定の場所を超えた場合
      // 表示
      objButton.fadeIn();
    } else {
      // 非表示
      objButton.fadeOut();
    }
  });

  //スクロールしてトップ
  objButton.on('click', function() {
    $(selectorContent).animate(
      {
        scrollTop: 0
      },
      500
    );

    return false;
  });
}
