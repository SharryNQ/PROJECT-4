$('.hero-slider').slick({
    infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: false,
      fadeSpeed: 1000
  });


  $('#cln-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    dots:true,
    autoplaySpeed: 1000,
    
  });


  $('#responsive-slider').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    arrows:true,
    autoplay:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.poster').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false,
    fadeSpeed: 1000
  });


  $('.pro-small-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    dots:true,
    autoplaySpeed: 1000,
    
  });

  $('.product').slick({
    infinite: true,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: false,
      fadeSpeed: 1000
  });


  $('.small-cln-slider').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    arrows:true,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.side-info-slider').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    arrows:true,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.last-pro-cln-slide').slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 1000,
    arrows:true,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  