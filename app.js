jQuery('.botones .inmobiliaria').on( "click", function() {
    jQuery('.empleados').removeClass('active');
    jQuery('.empleados.inmobiliaria').addClass('active');
  });

  jQuery('.botones .categoria2').on( "click", function() {
    jQuery('.empleados').hide();
    jQuery('.empleados.categoria2').show();
  });

  jQuery('.botones .categoria3').on( "click", function() {
    jQuery('.empleados').hide();
    jQuery('.empleados.categoria3').show();
  });