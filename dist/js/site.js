function TrocaCentro() {
    var eu = $('body');

    var centro = $(eu).find('#contentCentro').children();
//        $(centro).children().eq(0).remove();
//        treeview menu-open
    $(document).ready(function () {
        var botao = $(eu).find('.sidebar-menu.tree').children().filter('li');
//        var botao = $(eu).find('.sidebar-menu.tree').children().filter('li.active.treeview.menu-open');
        if (botao)
            console.log(botao.find);

        if ($(botao).hasClass("active.treeview.menu-open'")) {
            $(".menu-active").css('color', 'red');
        }

        console.log(botao);
    });

}

$(window).on('load', function () {

    new TrocaCentro();
});