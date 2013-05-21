var GroceryList = {
  totalPrice: 0,
  addItem: function(item) {
    this.totalPrice = this.totalPrice + item
  }
}


function updateTotalPrice(total) {
  $('#total_cost').html('$' + total);
}


$(document).ready(function() {

  $('.item').draggable({ helper: 'clone' });


  $('#grocery_list').droppable({
    drop: function(event, foo) {
      $('#grocery_list').find('tbody').append($(foo.draggable).clone());

      GroceryList.addItem(parseFloat(foo.draggable.find('.item_price').text()));

      updateTotalPrice(GroceryList.totalPrice.toFixed(2))
    }
  });
});
