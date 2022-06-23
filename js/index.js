
function pasteDate(num,value){
    document.getElementById(`taken${num}`).lastElementChild.innerHTML=`Taken on<br>${value}`
    document.getElementById(`taken${num}`).classList.remove('opacity-0')
    // document.getElementById(`taken${num}`).classList.add('')
}


function handleTabChange(tab,tabDiv){
    console.log("ecec")
    const tabs=document.getElementsByClassName('slider-items')

    for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove('selected')
    }

    tab.classList.add('selected')

    const divs=document.getElementsByClassName('tabDescDiv')

    for(let s=0;s<divs.length;s++){
        divs[s].classList.remove('show')
    }

    document.getElementById(tabDiv).classList.add('show')
    
    
}

function handleListView(val){
    document.getElementById('homeList').classList.toggle('displayList')
    if(val.innerHTML=="Show More"){

        val.innerHTML="Show Less"
    }else{
        val.innerHTML="Show More"
    }
}


$("[data-media]").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");
    
    $popupIframe.attr("src", videoUrl);
    
    $this.closest(".page").addClass("show-popup");
});

$(".popup").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    $(".page").removeClass("show-popup");
});

$(".popup > iframe").on("click", function(e) {
    e.stopPropagation();
});







