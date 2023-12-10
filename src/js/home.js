//create functions to fadeIn and fadeOut each element
function enFadeOut() {
    return $('#home-intro__hello-en').delay(5500).fadeOut(400).promise(); //4000ms animation + 1500ms delay before fadeOut
}

async function fadeInOut(lang){
    var delayTime
    if (lang !== 'en' ) {
        delayTime = 6500; //this number came from trial + error
    } else if (lang === 'en') {
        delayTime = 5500; //english animation is 4000ms (+ 1500ms delay))
    }
    var selector = '#home-intro__hello-' + lang;
    return $(selector).css('visibility', 'unset').fadeIn(400).delay(delayTime).fadeOut(400).promise();
    //append lang to the selector
}

async function runAnimations() {
    //all except for english to be hidden at the beginning
    $('#home-intro__hello-tc').css('visibility', 'hidden').hide();
    $('#home-intro__hello-cn').css('visibility', 'hidden').hide();
    $('#home-intro__hello-jp').css('visibility', 'hidden').hide();

    await enFadeOut();

    while(true){
        await fadeInOut('tc');
        await fadeInOut('cn');
        await fadeInOut('jp');
        await fadeInOut('en');
    }
}

runAnimations();

//GSAP

$("#home-intro__slime").on("mouseenter", function() {
    var duration = 1;
    gsap.to("#home-intro__slime", {y:-50, ease:Power2.easeOut});
    gsap.to("#home-intro__slime", {y:0, ease:Bounce.easeOut, delay:duration / 4});
});