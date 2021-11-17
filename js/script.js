// メニュー　ライトボックス（Luminous）
new LuminousGallery(document.querySelectorAll(".grid-gallery"),{},{
    caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt')
    }
});

// SP版オープンメニュー
const btn = document.querySelector('.sp-btn-menu');
const nav = document.querySelector('.sp-header-nav-list');
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
});

// トップへ戻るボタン（jQuery）
$(function() {
    let appear = false;
    let pagetop = $('#page-top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'bottom': '50px' //下から50pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'bottom': '-100px' //下から-100pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 400); //0.4秒かけてトップへ戻る
      return false;
    });
  });
