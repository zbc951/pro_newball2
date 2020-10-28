//<<<<<<<<<<<<<<此頁管理首頁﹑與測試>>>>>>>>>>>>>>
$(document).ready(function() {
    console.log("index ready");
      //page_name = active種類頁
      var fileName = location.pathname.split("/").slice(-1);
      var testname = fileName.toString();
      var page_name = [
        'soccer',
        'basball',
        'basketball',
        'horse_race',
        'esp',
        'stock',
        'lottery',
        'ice_ball',
        'tennis',
        'snooker',
        'v_ball',
        'motor_sport',
        'badminton',
        'football',
        'bso',
        'table_ball'
    ];
    var left_taget =[
      '.left .index.active li:nth-child(1)',
      '.left .index.active li:nth-child(2)',
      '.left .index.active li:nth-child(3)',
      '.left .index.active li:nth-child(4)',
      '.left .index.active li:nth-child(5)',
      '.left .index.active li:nth-child(6)',
      '.left .index.active li:nth-child(7)',
      '.left .index.active li:nth-child(8)',
      '.left .index.active li:nth-child(9)',
      '.left .index.active li:nth-child(10)',
      '.left .index.active li:nth-child(11)',
      '.left .index.active li:nth-child(12)',
      '.left .index.active li:nth-child(13)',
      '.left .index.active li:nth-child(14)',
      '.left .index.active li:nth-child(15)',
      '.left .index.active li:nth-child(16)',
      '.left .index.active li:nth-child(17)',
      '.left .index.active li:nth-child(18)'
    ]


    for(var i = 0 ; i<page_name.length ; i++){
      if ( testname.indexOf(page_name[i])> -1 ) {
  
        $(left_taget[i+2]).addClass('active');
        // return console.log('i = '+i);
      
      } else {
        // console.log('not found')
      }
    }
    console.log('this page = {'+fileName+'}')
    //<---------隨著頁面更換左球種-----------------------
      
      
      //測試鈕開關
      $('.all_test li:nth-child(1)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.test,.test2,.en_cn').css('display','none');
      })
      $('.all_test li:nth-child(2)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.test,.test2,.en_cn').css('display','block');
      })
      //<--------
      //中英文切換
      $('.en_cn li.cn').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('header.cn').css('display','block');
        $('.container.cn').css('display','block');
        $('header.en').css('display','none');
        $('.container.en').css('display','none');
      })
      $('.en_cn li.en').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('header.cn').css('display','none');
        $('.container.cn').css('display','none');
        $('header.en').css('display','block');
        $('.container.en').css('display','block');
      })
      //<--------------------
      
      

  

      //search main
      $('.s_box').click(function(){
        
        if($(this).parent().parent().hasClass('active') == true){
          console.log('s_box');
          return  $(this).parent().parent().removeClass('active');
        }else{
          $(this).parent().parent().addClass('active');
        }
      })
      //<----------
      //search child
      $('.gt ul').hide();
      $('.gt').click(function(){
        if($(this).hasClass('active') != true){
                  $(this).addClass('active');
          return $(this).children("ul").slideDown('slow', function() {});
        }else{
                $(this).removeClass('active');
          return $(this).children("ul").hide();
        }
      })
      //<-----------
  
      //單關
      $('.test2 li:nth-child(1)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('aside.bet_solo').addClass('active');
      });
      //單關確認
      $('.bet_solo .bet_btn').click(function(){
        $('.bet_solo .computer').removeClass('active');
        $('.bet_solo .check_page ,.hidden_i_block').addClass('active');
      });
      //<------------------
      //串關
      $('.test2 li:nth-child(2)').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('aside.fixed_size').addClass('active')
        $('aside.bet_solo').removeClass('active');
      });
      //<------------------
      //shop car double bet購物車
        var shop_car_title = $('aside .bet_box.fixed_size .title');
        var shop_car_check = $('.double_bet_btn')
        shop_car_title.click(function(){
          if($(this).parent().hasClass('active') != true){
            $(this).parent().addClass('active');
          }else{
            $(this).parent().removeClass('active');
          }
        })
        shop_car_check.click(function(){
          console.log('shop check');
          $('aside.bet_double').addClass('active');
        })
        //<----------
      //關閉彈窗
      $('aside .bet_box .title .close').click(function(){
        $('.test2 li').siblings().removeClass('active');
        if($(this).parents().hasClass('bet_double') == true){
          return $(this).parents().removeClass('active');
        }
      $('aside.bet_solo').removeClass('active');
      })
      //關閉all彈窗
      $('.test2 li:nth-child(3)').click(function(){
        $(this).siblings().removeClass('active');
      
        $('.bet_double').removeClass('active');
        $('.bet_solo').removeClass('active');
      });
      //<------------------

      //註冊&登入_彈窗close
      var close_b = $('aside .sign_box .sign_close');
      var sign_up = $('aside.sign_up');
      var sign_inin = $('aside.sign_in');

      var sign_up_btn = $('.h_wrap .right .sign_yet span.up');
      var sign_inin_btn = $('.h_wrap .right .sign_yet span.in');

      $('.test2 li:nth-child(4),.h_wrap .right .sign_yet span.up ,.sign_up_btn').click(function(){
        $('aside.sign_in.black_bg').removeClass('active');
        sign_up.addClass('active');
      })
      $('.test2 li:nth-child(5),.h_wrap .right .sign_yet span.in').click(function(){
        sign_inin.addClass('active');
      })
      close_b.click(function(){
        console.log('sign_c')
        $(this).parent().parents().removeClass('active')
      })

      //註冊成功彈窗
      var sign_up_push = $('.sign_up_push');
      sign_up_push.click(function(){
        $('aside.sign_up.black_bg').removeClass('active');
        $('aside.sign_up_ok.black_bg').addClass('active');
      })
      //<-----------------
      //登入狀態切換
      var sign_yet = $('.h_wrap .right .sign_yet');
      var sign_in = $('.h_wrap .right .sign_in');
      var list_yet = $('.f_wrap .f_bot ul.yet');
      var list_in = $('.f_wrap .f_bot ul.in');
      var btn_start = $('header .h_wrap .right');
      var btn_start2 = $('.sign_in_btn');

      var right_2_live = $('.right_2');
      var head_wrap = $('.h_wrap');
      var main_page = $('main');
      var search_bar = $('.search_bar');
      var r_wrap = $('.right .wrap');

      var yet_status = $('.yet_sign_in_status');
      var in_status = $('.sign_in_status');
      var h_status = $('.time_line .time_box');

      var soccer_in = $('.left .index.active li:nth-child(3)');
      btn_start2.click(function(){
          if(sign_in.hasClass('active')){
            
            return  sign_active(false);
          }else{
            $('aside.sign_in.black_bg').removeClass('active');
            return  sign_active(true);
          }
        })

       function sign_active (sign){
         console.log('sign ='+sign)
      if(sign == false){
                soccer_in.removeClass('active');
                h_status.removeClass('in_status');
                in_status.removeClass('active');
                yet_status.addClass('active');
                $('aside.fixed_size').removeClass('active')
                sign_yet.addClass('active');
                sign_in.removeClass('active');
                list_yet.addClass('active');
                right_2_live.removeClass('active');
                head_wrap.removeClass('live_mode');
                main_page.removeClass('live_mode');
                search_bar.addClass('big_size');
                r_wrap.addClass('big_size');
        return  list_in.removeClass('active');
      }else{
                soccer_in.addClass('active');
                h_status.addClass('in_status');
                in_status.addClass('active');
                yet_status.removeClass('active');
                $('aside.fixed_size').addClass('active')
                sign_yet.removeClass('active');
                sign_in.addClass('active');
                list_yet.removeClass('active');
                right_2_live.addClass('active');
                head_wrap.addClass('live_mode');
                main_page.addClass('live_mode');
                search_bar.removeClass('big_size');
                r_wrap.removeClass('big_size');
        return  list_in.addClass('active');
      }
      }
      //<-----------


      
      //聲明infor
      var infor_con = $('.infor_con');
      $('.icon_infor').click(function(){
        if( infor_con.hasClass('active') != true){
          return infor_con.addClass('active');
        }else{
          return infor_con.removeClass('active');
        }
      })
      //<-----------------
 
      //直播區域
      //tag
        var live_page = $('.live_content');
        var talk_page = $('.talk_content');
        function tagChage (my){
          if($(my).hasClass('active') != true){
                  $(my).siblings().removeClass('active');
                  $(my).addClass('active');
          }
        }
      $('.live_page .live_games .live_tag .live_1').click(function(){
        var my = $(this);
        tagChage(my);
        live_page.siblings().removeClass('active');
        live_page.addClass('active');
      })
      $('.live_page .live_games .live_tag .live_2').click(function(){
        var my = $(this);
        tagChage(my);
        talk_page.siblings().removeClass('active');
        talk_page.addClass('active');
      })
      //ball_drow
      $('.live_content .live_balls .ball_wrap').click(function(){
        if($(this).hasClass('active') != true){
                $(this).addClass('active');
                $(this).siblings().removeClass('start');
                $(this).children(".ball_drow").addClass('active')
        return  $(this).children(".ball_drow").slideDown("slow");
      
        }else{
                $(this).removeClass('active');
                $(this).siblings().addClass('start');
                return     $(this).children(".ball_drow").removeClass('active')
          // $(this).children(".ball_drow").hide();
        }
      
      })
      //<-----------------
//新手_專業_比賽結果_switch
var hardchange = $(' main .right .search_bar p.beginner');
var g_result_btn = $('main .right .search_bar p.g_result_btn'); 

var beginner_page = $('.page_beginner');
var senior_page = $('.page_senior');
var g_result = $('.page_result');
hardchange.click(function(){

  if($(this).hasClass('start')!=true){
    change_methods('beg');
    $(this).addClass('start');
  }else{
    change_methods('sen');
    $(this).removeClass('start');
  }
})
function change_methods(ishard){
  if(ishard == 'beg'){
    hardchange.text('新手版');
    beginner_page.css('display','block');
    senior_page.css('display','none');
  }else if(ishard == 'sen')
  {
    hardchange.text('專業版');
    beginner_page.css('display','none');
    senior_page.css('display','block');
  }
}
//<---------------------------


  //給予單關標籤
  $( ".card li.row span.two_text" ).addClass(function( index, currentClass ) {
    var addedClass;
   
    if ( currentClass != "i_box") {
      addedClass = "solo_bet";
      return addedClass;
      
    }

  });
  //單關投注觸發
  $('.card li.row span.solo_bet').click(function(){
    console.log('solo_bet click');
    $('aside.bet_solo').addClass('active');
  })
    //勾選icon
    var check_btn = $('.league_choice .row span.check,.balls_choice .row span.check');
    check_btn.click(function(){
        if($(this).hasClass('active') != true){
            return  $(this).addClass('active');
        }else{
            return  $(this).removeClass('active');
        }
    })
    //<--------------------------------------
    //<p>選擇球種</p>
    var ball_tag_btn = $('.ball_cho');
    var balls_choice = $('.balls_choice ,.league_choice');
    ball_tag_btn.click(function(){
        if(balls_choice.hasClass('active') != true){
                    $(this).addClass('active');
            return  balls_choice.addClass('active');
        }else{
                    $(this).removeClass('active');
            return  balls_choice.removeClass('active');
        }
    })
    //<----------------------------------------
  }); 