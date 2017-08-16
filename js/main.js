var wow = new WOW();

	wow.init();
	answers = ['This is strictly for students only. However, if you are an experienced developer, a still want to have fun, you can mentor a student team. But you will not be eligible for any prizes.','No. 389, 12 Main, 1st Cross, Indiranagar, Bangalore 560038',"If you have to go home for the night, we won't stop you. Just come back the next morning. :)" ,"Yes! Don't forget to bring a charger too.","This is a team event. No lone crusaders, please.","Not to worry. Just hop on over to our <a href = 'https://www.facebook.com/groups/venturesity'> Vhackers </a> Vhackers group in Facebook and list your requirements. If you are still having trouble, we will help you find a team member on the day of the hack.","Team size is limited to 4. Any more, and the team might be a little crowded, don't you think?","No. Nothing. You don't even have to pay for food! We will take care of everything. But transportation is your responsibility."]
	questions = ['']
    var x = $('.questions');
    
	z = [];
	 zz = 0;
	for(let y in x){
		if (zz>8){
			break;
		}
		zz=zz+1;
		z.push(x[y].innerText);
	}
	

	// console.log(z);

	$('.questions').hover(function(){
		let index = $(this).index();
		// var that = this;

		// setTimeout(function()
		// 	{
				 $(this).children().empty(); 
				$(this).append('<p><strong>'+ answers[index] + '</strong></p>');
			// }
			// ,300);
		
		
	},function(){
		let index = $(this).index();
		$(this).html('<h2>'+ z[index] + '</h2>')
			
	});
	$('li').on('hover',function(){
		console.log('Value is ' + $(this).children('p').text());
	});

	$('.angle').on('click',function(){
			 $('html, body').animate({scrollTop: 0 }, 500);
	});

	$('a').on('click',function(e){
		e.preventDefault();
		console.log($(this).text());
		if ($(this).text()=='About Us'){
			// let y = $('.aboutUs').offset();
			// console.log(y);
			 $('html, body').animate({
        scrollTop: $('.aboutUs').offset().top - 100
    }, 500);	
		}
		if ($(this).text()=='FAQs'){
			// let y = $('.aboutUs').offset();
			// console.log(y);
			 $('html, body').animate({
        scrollTop: $('#faqs').offset().top - 100
    }, 500);	
		}
	});
	 $(".angle").hide(); //hide your div initially
    var topOfOthDiv = $(".image").offset().top;
    var bottomOfOthDiv = topOfOthDiv + $('.image').outerHeight(true);

    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv + 20) { //scrolled past the other div?
            $(".angle").show(); }

        else{
			$('.angle').hide();         	
        }
    }
    );

    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}