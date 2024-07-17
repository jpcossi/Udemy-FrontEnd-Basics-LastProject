(function(){
  var body = document.querySelector('body')
  body.classList.remove('no-js')
  body.classList.add('js')

  var menu = new Menu({
    container: '.header-nav',
    toggleBtn: '.btnMenu',
    widthEnabled: 1024
  })

  var carouselImgs = new Carousel({
    container: '.carousel .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

  var quotes = new Quotes({
    container: '.quotes-container .quotes',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next'
  })

})()