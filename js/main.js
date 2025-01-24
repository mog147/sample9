
// hamburger
if(window.matchMedia("(max-width: 768px)").matches){
    // ウィンドウサイズが 768px以下の場合のコードをここに

      $(".btn-gNav").click(function(){
        if($(".gnav").hasClass("open")){ // クリックされた要素がopenクラスだったら
          $(".gnav").removeClass("open");
        }else{
          $(".gnav").addClass("open");
        }
      });

      $(".gnav").click(function(){
        $(this).removeClass("open");
      });

  }

  $(function () {

    var webStorage = function () {
  
      if (sessionStorage.getItem('access')) {
  
        /*
          2回目以降アクセス時の処理
        */
  
        $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
        $(".loading").addClass('is-active');
        
  
      } else {
  
        /*
          初回アクセス時の処理
        */
  
        sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
  
        $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
  
        setTimeout(function () {
  
          // ローディングを数秒後に非表示にする
  
          $(".loading").addClass('is-active');
          //$(".loading-animation").removeClass('is-active');
  
        }, 5000); // ローディングを表示する時間
  
      }
  
    }
  
    webStorage();
    
  });