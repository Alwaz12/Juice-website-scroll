//First timeline for the ".flavour" section


var tl = gsap.timeline({scrollTrigger: {
  trigger: ".flavour",
  start: "0% 95%",
  end: "90% 10%",
  scrub: true,
  //markers: true,
}})

tl.to("#bottle-strawberry", {
  top: "175%",
  left: "28%",
  width: "18%"
}, 'one')

tl.to("#bottle-berry", {
  top: "172%",
  left: "-3%",
  width: "20%"
}, 'one')

tl.to("#bottle-mango", {
  top: "172%",
  left: "56%",
  width: "20%"
}, 'one')

tl.to("#mangoslice", {
  top: "189%",
  left: "60%",
  width: "8%"
}, 'one')

tl.to("#berry", {
  top: "186%",
  left: "-1%",
  width: "6%"
}, 'one')

tl.to("#strawberry", {
  top: "187%",
  left: "29%",
  width: "5%"
}, 'one')

tl.to("#berry2", {
  top: "120%",
  left: "85%",
  width: "15%",
  rotate: "55deg"
}, 'one')

//First timeline for the ".fresh" section


var tl = gsap.timeline({scrollTrigger: {
  trigger: ".fresh",
  start: "0% 95%",
  end: "50% 50%",
  scrub: true,
 // markers: true,
}})

tl.to("#bottle-strawberry", {
  top: "215%",
  left: "44%",
  width: "50%"
}, 'two')

tl.to("#bottle-berry", {
  top: "215%",
  left: "38%",
  width: "45%"
}, 'two')

tl.to("#bottle-mango", {
  top: "217%",
  left: "54%",
  width: "45%"
}, 'two')

tl.to("#strawberry", {
  top: "268%",
  left: "5%",
  width: "12%"
}, 'two')

tl.to("#mangoslice", {
  top: "255%",
  left: "45%",
  width: "18%"
}, 'two')

tl.to("#berry", {
  top: "250%",
  left: "75%",
  width: "15%"
}, 'two')


//Third timeline for the "favorites" section


var tl = gsap.timeline({scrollTrigger: {
  trigger: ".favorites",
  start: "0% 95%",
  end: "50% 50%",
  scrub: true,
 // markers: true,
}})

tl.to("#bottle-strawberry", {
  top: "318%",
  left: "48%",
  width: "25%"
}, 'three')

tl.to("#bottle-berry", {
  top: "317%",
  left: "27%",
  width: "25%"
}, 'three')

tl.to("#bottle-mango", {
  top: "318%",
  left: "69%",
  width: "25%"
}, 'three')

tl.to("#strawberry", {
  top: "290%",
  left: "45%",
  width: "10%"
}, 'three')
