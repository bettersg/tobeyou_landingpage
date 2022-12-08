// gsap.utils.toArray(".comparisonSection").forEach((section) => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: section,
//       start: "center center",
//       // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
//       end: () => "+=" + section.offsetWidth,
//       scrub: true,
//       pin: true,
//       anticipatePin: 1,	  
//     },
//     defaults: { ease: "power1" },
//   });
//   // animate the container one way...
//   tl.fromTo(
//     section.querySelector(".afterImage"),
//     { xPercent: 100, x: 0 },
//     { xPercent: 0 }
//   )
//     // ...and the image the opposite way (at the same time)
//     .fromTo(
//       section.querySelector(".afterImage img"),
//       { xPercent: -100, x: 0 },
//       { xPercent: 0 },
//       0
//     );
// });

// ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });


let sections = gsap.utils.toArray(".scrollpanel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".scrollcontainer",
      pin: true,
      scrub: 0.1,
    //   snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000"
    }
  });


gsap.set(".large_side_characters", { opacity: 0 });


gsap.utils.toArray(".scroll_animate_bounce").forEach(function (bouncer) {
	// var containerTrigger = addClass.parent('.scrollin-parent');


	bouncer_tl = gsap.timeline({
		scrollTrigger: {
			trigger: bouncer,			
			toggleActions: "play pause play reset",
			containerAnimation: scrollTween,
	  		start: "left-=550px center",	  
		}
	});
	bouncer_tl.fromTo(
		bouncer,
		{ scale: 0.8, opacity: 0.3, transformOrigin: "50% 100%" },
		{ scale: 1, opacity: 1, delay: 0.5, duration: 3, ease: "elastic" }
	);

})

gsap.utils.toArray(".scroll_animate_appear").forEach(function (item) {
	
	item_tl = gsap.timeline({
		scrollTrigger: {
			trigger: item,
			toggleActions: "play pause play reset",
			containerAnimation: scrollTween,
	  		start: "left-=400px center",	  
		}
	});
	item_tl.fromTo(
		item,
		{ opacity: 0, y: 20 },
		{ opacity: 1, y:0, delay: 0.5, duration: 2, ease: "power1" }
	);

})

//   gsap.to("#nadia_side_characters", {
// 	opacity:1,
// 	duration:3,
// 	ease: "power1",
// 	scrollTrigger: {
// 	  trigger: ".large_nadia",
	//   containerAnimation: scrollTween,
	//   start: "left center",
	//   toggleActions: "play pauses play reset",
// 	  id: "1",
// 	}
//   });

//   gsap.to("#aman_side_characters", {
// 	opacity:1,
// 	duration: 3,
// 	ease: "power1",
// 	scrollTrigger: {
// 	  trigger: ".large_aman",
// 	  containerAnimation: scrollTween,
// 	  start: "left center",
// 	  toggleActions: "play pause play reset",
// 	  id: "2",
// 	}
//   });

//   gsap.to("#zhihao_side_characters", {
// 	opacity:1,
// 	duration: 3,
// 	ease: "power1",
// 	scrollTrigger: {
// 	  trigger: ".large_aman",
// 	  containerAnimation: scrollTween,
// 	  start: "left center",
// 	  toggleActions: "play pause play reset",
// 	  id: "2",
// 	}
//   });




// const bouncing = document.querySelectorAll("animate_bounce");

gsap.utils.toArray(".animate_bounce").forEach(function (bouncer) {
	
	bouncer_tl = gsap.timeline({
		scrollTrigger: {
			trigger: bouncer,			
			toggleActions: "play pause play reset"
		}
	});
	bouncer_tl.fromTo(
		bouncer,
		{ scale: 0.8, opacity: 0.3, transformOrigin: "50% 100%" },
		{ scale: 1, opacity: 1, delay: 0.5, duration: 3, ease: "elastic" }
	);

})

gsap.utils.toArray(".animate_appear").forEach(function (item) {
	
	item_tl = gsap.timeline({
		scrollTrigger: {
			trigger: item,
			toggleActions: "play pause play reset"
		}
	});
	item_tl.fromTo(
		item,
		{ opacity: 0, y: 20 },
		{ opacity: 1, y:0, delay: 0.5, duration: 1, ease: "power1" }
	);

})



gsap.fromTo(
  ".header_bounce",
  { scale: 0.5, transformOrigin: "50% 100%" },
  { scale: 1.1, duration: 2, delay: 0.5, ease: "back" }
);

function showVideo() {
	$('#large_trailerbutton').delay(2000).prop('disabled', true);
	gsap.fromTo(
		'#large_screenshotcircle',
		{ scale: 1, opacity: 1, transformOrigin: "50% 50%" },
		{ scale: 0, opacity: 0, duration: 1, ease: "elastic" }
	);

	$('#large_screenshotcircle').delay(1000).hide(0);
	$('#large_trailervideo').delay(1000).show(1000);
	// gsap.fromTo(
	// 	'#large_trailervideo',
	// 	{ scale: 0.5, opacity: 0.3, delay: 1, transformOrigin: "50% 100%" },
	// 	{ scale: 1, opacity: 1, delay: 1, duration: 1, ease: "elastic" }
	// 	)
	
};




const small_main_char = document.querySelectorAll(".small_main_character");

// Animation on load:
gsap.fromTo(small_main_char[0],{ scale: 0.95,  transformOrigin: "50% 100%" },{ scale: 1,   delay: 0.5, duration: 3, ease: "elastic" })
console.log('0 fired', small_main_char);
// const duration = 3000;



$("#carousel1").on('slide.bs.carousel', function () {
	gsap.fromTo(small_main_char, { scale: 0.95,  transformOrigin: "50% 100%" }, { scale: 1,  delay: 0.5, duration: 3, ease: "elastic" })
	
});
