
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
