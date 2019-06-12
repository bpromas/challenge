$('document').ready(function(){
    $.getJSON( "https://raw.githubusercontent.com/rodrigoEplus/challenge/master/products.json", function( data ) {
        cart = data.cart
        totalCost = 0;
        $.each( cart, function( key, items ) {
            $.each(items, function(k, item){

                $('#cart-items').append("<div class='item-wrapper row'>"+
                "<div class='item-pic col-md-4'>"+
                    "<img src='"+item.image.substring(1)+"'>"+
                "</div>"+
                "<div class='col-md-8'>"+
                        "<br/>"+
                        "<div class='row'>"+
                            "<div class='col-md-12'>"+
                                "<span class='item-name'>"+truncate(item.name)+"</span>"+
                            "</div>"+
                        "</div>"+
                        "<br/>"+
                        "<div class='row'>"+
                            "<div class='col-md-5'>"+
                                "<span class='item-quantity'>Qtd.: "+item.quantity+"</span>"+
                            "</div>"+
                            "<div class='col-md-7'>"+
                                "<span class='item-price'>"+item.bestPriceFormated+"</span>"+
                            "</div>"+
                        "</div>"+
                "</div>"+
                "</div>")
                totalCost += (item.bestPrice / 100);
            })
        });
        $("#order-total").html("R$"+totalCost.toLocaleString('pt-BR'));
      });
      function truncate(input) {
        if (input.length > 28)
           return input.substring(0,28) + '...';
        else
           return input;
     };
})
