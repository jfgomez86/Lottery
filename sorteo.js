(function () {
  var timeout, interval;

  timeout = Math.floor(30 + Math.random() * 30);

  $(document).ready(function () {
    var slider, participantes;

    $('#timer').html(timeout);

    participantes = [
      "<li><p>Insert Name Here</p></li>",
      "<li><p>Insert Name Here</p></li>",
      "<li><p>Insert Name Here</p></li>"
    ].sort(function () { return 0.5 - Math.random(); });

    console.log(participantes);

    for (var i = 0; i < participantes.length; i++) {
      $('#participantes').append(participantes[i]);
    };

    slider = $("#participantes").bxSlider({
      mode: 'vertical',
      auto: true,
      pause: 100,
      speed: 100,
      controls: false
    });

    window.slider = slider;

    interval = setInterval(function () {
      $('#timer').html(timeout)
      timeout -= 1;
      if (timeout < 0) {
        clearInterval(interval);
        $("#timer").html("Ganador:");
        slider.stopShow();
        //slider.stopTicker();
        //slider.goToNextSlide();
        $("#participantes li").animate({
          fontSize: "70px"
        }, 400);
      }
    }, 1000);

  });

})();

