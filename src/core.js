(function() {

  var selector = 'span.renderable-component-text-box-content';
    selector += ', span.renderable-component-text';

  if (window.location.href === 'https://www.google.com/maps')
    window.location.href = 'https://www.google.com.br/maps';

  $(document).arrive(selector, function () {
    var code = $(this);
    code.each(getRoute);
  });

  function getRoute(index) {
    for (var i = 0, len = linhasGrandeRecife.length; i < len; i++) {
      if (linhasGrandeRecife[i].codigo !== $(this).text())
        continue;
      $(this).text(linhasGrandeRecife[i].linha);
        break;
    }
  }

})();
