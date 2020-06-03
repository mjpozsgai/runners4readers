
function inView(elm) {

  const threshold = 0
  const rect = elm.getBoundingClientRect();
  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;

  const above = rect && rect.bottom - threshold <= 0;
  const below = rect && rect.top - vpHeight + threshold >= 0;
  const left = rect && rect.right - threshold <= 0;
  const right = rect && rect.left - vpWidth + threshold >= 0;
  const inside = !!rect && !above && !below && !left && !right;

  if (above || inside){
    return true;
  }
  else{
    return false;
  }

}



$(document).ready(function () {

  $(window).scroll(function () {
    var j = document.getElementsByClassName('slidein')
    for (item of j){

        if (inView(item)) {
          item.classList.add('slidein-visible');
    } else {
           item.classList.remove('slidein-visible');
        }

    }
  });
});
