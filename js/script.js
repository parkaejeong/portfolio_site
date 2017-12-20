$(document).ready(function(){
	$('a.gallery').colorbox();

	var me=$('.me').fadeIn(1500);

	$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=0 && sct<=650){
		var me=$('.me').fadeIn(1500);
	}
	else{
		var me=$('.me').fadeOut(1500);
	}

	});


	var options = {
	'speed' : 500,
	// 스피드
	'initTop': 250,
	// 기본 top 위치
	'alwaysTop' : false,
	// 항상고정 true , false 이동
	'default_x' : '#wrap'
	//레어아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	$('#nav').Floater(options);

	/* 퀵바연결 */
	$('#btn01').click(function(){
		$('html,body').animate({scrollTop:$('#main').offset().top},600);
	});
	$('#btn02').click(function(){
		$('html,body').animate({scrollTop:$('#profile').offset().top},600);
	});
	$('#btn03').click(function(){
		$('html,body').animate({scrollTop:$('#css').offset().top},600);
	});
	$('#btn04').click(function(){
		$('html,body').animate({scrollTop:$('#jquery').offset().top},600);
	});
	$('#btn05').click(function(){
		$('html,body').animate({scrollTop:$('#jquery2').offset().top},600);
	});
	$('#btn06').click(function(){
		$('html,body').animate({scrollTop:$('#video').offset().top},600);
	});
	$('#btn07').click(function(){
		$('html,body').animate({scrollTop:$('#adaptive01').offset().top},600);
	});
	$('#btn08').click(function(){
		$('html,body').animate({scrollTop:$('#epilogue').offset().top},600);
	});
/* 	$('#btn08').click(function(){
		$('html,body').animate({scrollTop:$('#').offset().top},600);
	}); */



	/* 메뉴연결(클릭) */
	var menu = $('#menuWrap > ul >li');
	var contents = $('#contents > div');
	var btn = $('#nav ul li');

	menu.click(function(event){
		event.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		var tt = section.offset().top;
		$('html,body').stop().animate({scrollTop:tt});
	});




	/* 프로필 탭 메뉴 */
	$('.anchor .list01').on('click',function(){
	$('.panel>li').css('display','none');
	$('.panel>li.list01').css('display','block');
	$('.anchor>li').removeClass('active');
	$('.anchor>li.list01').addClass('active');
	$('.anchor .list01 img').attr('src','images/user_on.png');
	$('.anchor .list02 img').attr('src','images/cup_off.png');
	$('.anchor .list03 img').attr('src','images/advantage_off.png');
	$('.anchor .list04 img').attr('src','images/skill_off.png');
	});

	$('.anchor .list02').on('click',function(){
	$('.panel>li').css('display','none');
	$('.panel>li.list02').css('display','block');
	$('.anchor>li').removeClass('active');
	$('.anchor>li.list02').addClass('active');
	$('.anchor .list01 img').attr('src','images/user_off.png');
	$('.anchor .list02 img').attr('src','images/cup_on.png');
	$('.anchor .list03 img').attr('src','images/advantage_off.png');
	$('.anchor .list04 img').attr('src','images/skill_off.png');
	});

	$('.anchor .list03').on('click',function(){
	$('.panel>li').css('display','none');
	$('.panel>li.list03').css('display','block');
	$('.anchor>li').removeClass('active');
	$('.anchor>li.list03').addClass('active');
	$('.anchor .list01 img').attr('src','images/user_off.png');
	$('.anchor .list02 img').attr('src','images/cup_off.png');
	$('.anchor .list03 img').attr('src','images/advantage_on.png');
	$('.anchor .list04 img').attr('src','images/skill_off.png');
	});

	$('.anchor .list04').on('click',function(){
	$('.panel>li').css('display','none');
	$('.panel>li.list04').css('display','block');
	$('.anchor>li').removeClass('active');
	$('.anchor>li.list04').addClass('active');
	$('.anchor .list01 img').attr('src','images/user_off.png');
	$('.anchor .list02 img').attr('src','images/cup_off.png');
	$('.anchor .list03 img').attr('src','images/advantage_off.png');
	$('.anchor .list04 img').attr('src','images/skill_on.png');
	});


	/* 이미지갤러리(2D 그래픽) */
	var current = 1;
	var thumbListSize = 4;
    var thumbnail = $('#graphicBox');
	var prev = thumbnail.find('>.left');
	var next = thumbnail.find('>.right');
	var container = thumbnail.find('>.graphicImg > ul');
	var containWidth = thumbnail.find('>.graphicImg').width();
	var thumb = container.find('>.thumb');
	var maxSize = thumb.size(); // 6개
	var image = $('#graphicImage > p');

	next.on('click',function(){
		if(current < maxSize/thumbListSize -1) {
			current++;
		} else{
			alert('페이지의 마지막입니다.');
		}
		// 0 < 18 / 6 = 3  ......  0 < 3-1  ...... 0 < 2
		//alert(current);
		listMove();
	});
	prev.on('click',function(){
		if(current > 0) {
			current--;
		} else{
			alert('페이지의 처음입니다.');
		}
		// 0 < 18 / 6 = 3  ......  0 < 3-1  ...... 0 < 2
		//alert(current);
		listMove();
	});

	function listMove(){
		var tl = containWidth * current * -1;
		//tl(0, -760, -1520, -2280) = 760px * (0,1,2,3) * -1
		container.stop().animate({left: tl},{duration: 400, easing: 'easeOutCubic'});
	}
	listMove();

	thumb.on('click',function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	})



/* 스크롤에 따른 배경 움직임 CSS */

$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=1800 && sct<=2500){
		$('.css01_bg').stop().animate({left:0},300)
		$('.css02_bg').stop().animate({right:0},300)
	}
	else{
		$('.css01_bg').stop().animate({left:-1000},300)
		$('.css02_bg').stop().animate({right:-1000},300)
	}

	/* 스크롤에 따른 배경 움직임 CSS(sub) */
	if(sct>=1800 && sct<=2500){
		$('#css_sub').fadeIn(500);
		$('#css>span').fadeIn(500);
	}
	else{
		$('#css_sub').fadeOut(500);
		$('#css>span').fadeOut(500);
	}

});




/* 스크롤에 따른 배경 움직임 jquery */

$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=2800 && sct<=3300){
		/* $('.jquery01_bg').stop().animate({left:0},300) */
		$('.jquery02_bg').stop().animate({right:0},300)
	}
	else{
		/* $('.jquery01_bg').stop().animate({left:-1000},300) */
		$('.jquery02_bg').stop().animate({right:-1000},300)
	}
});


/* 스크롤에 따른 배경 움직임 jquery */

$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=3800 && sct<=4300){
		/* $('.jquery01_bg').stop().animate({left:0},300) */
		$('.jquery202_bg').stop().animate({right:0},300)
	}
	else{
		/* $('.jquery01_bg').stop().animate({left:-1000},300) */
		$('.jquery202_bg').stop().animate({right:-1000},300)
	}
});


/* 스크롤에 따른 배경 움직임 video */

$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=4800 && sct<=5300){
		/* $('.video01_bg').stop().animate({left:0},300) */
		$('.video02_bg').stop().animate({right:0},300)
	}
	else{
		/* $('.video01_bg').stop().animate({left:-1000},300) */
		$('.video02_bg').stop().animate({right:-1000},300)
	}
});

/* 스크롤에 따른 배경 움직임 video */

$(window).scroll(function(){
	var sct = $(window).scrollTop();
	var menu = $('#top_menu')
	//console.log(sct)

	if(sct>=5800 && sct<=6300){
		/* $('.adaptive0101_bg').stop().animate({left:0},300) */
		$('.adaptive0102_bg').stop().animate({right:-0},300)
	}
	else{
		/* $('.adaptive0101_bg').stop().animate({left:-1000},300) */
		$('.adaptive0102_bg').stop().animate({right:-1000},300)
	}
});


	/* 메뉴바 */
  		var menuheight = 0; //메뉴높이
	$(window).scroll(function(){
		var winLoc = $(window).scrollTop();
		if(winLoc > menuheight){	//스크롤내렸을때
			$('#header').stop().css('margin-top','0px');
			$('#menuWrap').stop().animate({height: '70px'},300).css('background-color','#ece1d8').css('box-shadow','1px 2px 2px #777777');
			$('#menu li').stop().animate({'margin-top': '12px'});
			$('.mLogo').stop().animate({'left':'18%'});
			$('.mLogo a img').stop().animate({width: '45px'});
		}
		else if(winLoc <= menuheight){	//맨꼭대기에있을때
			headerLoc = (menuheight-winLoc);
			$('#header').stop().css('margin-top','30px');
			$('#menuWrap').stop().animate({height: '120px'},300).css('box-shadow','none');
			$('#menu li').stop().animate({'margin-top': '73px'});
			$('.mLogo').stop().animate({left: '50%'},300);
			$('.mLogo a img').stop().animate({width: '60px'});
		};
	});



	$('.list04').click(function(){
		$('iframe').get(0).contentDocument.location.reload();
	});



/* 서브이미지 슬라이드 */

var menu=$('#animate>li');
	var onText=$('#animate .greeting .text_image .on');
	var offText=$('#animate .greeting .text_image .off');
	var onShowImg=$('#animate .greeting .menu_image');

	onText.css('display','block');
	offText.css('display','none');
	onShowImg.animate({width:240},{duration:1500, queue:false, easing:'easeOutCubic'})

	menu.hover(function(){
		var tg=$(this);
		var onImg=tg.find('.text_image> .on');
		var offImg =tg.find('.text_image > .off');
		var menuImage=tg.find('.menu_image');
		var imageWidth = menuImage.find('img').innerWidth();


		onText.css('display','none');
		offText.css('display','block');
		onShowImg.animate({width:0},{duration:1500, queue:false, easing:'easeOutCubic'})

		onImg.css('display','block');
		offImg.css('display','none');
		menuImage.animate({width:imageWidth},{duration:1500, queue:false, easing:'easeOutCubic'})

	},function(){
		var tg=$(this);
		var onImg=tg.find('.text_image > .on');
		var offImg=tg.find('.text_image > .off');
		var menuImage= tg.find('.menu_image');
		var imageWidth = 0;

		onText.css('display','block');
		offText.css('display','none');
		onShowImg.animate({width:240},{duration:1500, queue:false ,easing:'easeOutCubic'})

		onImg.css('display','none');
		offImg.css('display','block');
		menuImage.animate({width:imageWidth},{duration:1500, queue:false ,easing:'easeOutCubic'})

		onText.css('display','block');
		offText.css('display','none');
		onShowImg.animate({width:240},{duration:1500, queue:false, easing:'easeOutCubic'})
	})

});




jQuery(document).ready(function(){



	//profile 이미지 둥둥  ok

	$('#contents>#profile>img').DB_springMove({
		key:'e24102',                //라이센스키
		dir:'y',               //방향축('x','y')
		mirror:1,              //반대방향이동(1,-1)
		radius:10,             //반경
		motionSpeed:0.1       //속도(0~1)
	});


	/* 메뉴연결(스크롤) */

	var menu = $('#menuWrap > ul >li');
	var contents = $('#contents > div');
	var btn = $('#nav ul li');


	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			}
		});
	});

	/* codepen */

	$(document).on('ready', function () {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
	});


});
