$(document).on('click',".megamenu .dropdown-menu",function (e){
  console.log('dropdown-menu');
  $(this).parent().addClass("open");
  $(this).parent().find(".dropdown-toggle").attr("aria-expanded","true");
  e.stopPropagation();
});

$(document).on('click',".megamenu .megamenu-fw",function (e){
  console.log('site megamenu-fw');
  $(this).toggle();
  e.stopPropagation();
  //e.preventDefault();
})
