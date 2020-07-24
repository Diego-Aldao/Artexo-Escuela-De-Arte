$(document).ready(() => {
  //CARRETE PROYECTOS PRESENCIALES / ONLINE
  $(".contenedor-carrete").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //CARRETE TESTIMONIALES
  $(".slick-vertical").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 1,
    vertical: true,
  });

  //EVENT LISTENERS MENU DESPLEGABLE
  $(".btn-cerrar").click(() => {
    $(".menu-desplegable").css({
      right: "-100%",
    });
  });

  $(".hamburguesa").click(() => {
    $(".menu-desplegable").css({
      right: "0px",
    });
  });

  $(".categorias").click(() => {
    $(".menu-desplegable").css({
      right: "-100%",
    });
  });
});
