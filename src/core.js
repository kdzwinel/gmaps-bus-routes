(function () {

  if (window.location.href === 'https://www.google.com/maps') {
    window.location.href = 'https://www.google.com.br/maps';
    return;
  }

  var selector = 'span.renderable-component-text-box-content' +
    ', span.renderable-component-text';

  $(document).arrive(selector, function () {
    $(this).each(getRoute);
  });

  function getRoute() {
    var codigo = $(this).text();

    for (var i = 0, len = linhasGrandeRecife.length; i < len; i++) {
      if (linhasGrandeRecife[i].codigo === codigo) {
        $(this).text(linhasGrandeRecife[i].linha);
        return;
      }
    }
  }

})();
