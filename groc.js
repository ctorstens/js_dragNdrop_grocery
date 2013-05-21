var GroceryList = {
  totalPrice: 0,
  
  addItem: function(item) {
    this.totalPrice += item
  },

  updateTotalPrice: function() {
    $('#total_cost').html('$' + this.totalPrice.toFixed(2));
  },

  makeListDroppable: function() {
    $('#grocery_list').droppable({ drop: GroceryList.appendItem });
  },

  appendItem: function(event, foo) {
    $('#grocery_list').find('tbody').append($(foo.draggable).clone());
    GroceryList.addItem(parseFloat(foo.draggable.find('.item_price').text()));
    GroceryList.updateTotalPrice();
  }
};

var StoreList = {
  makeItemsDraggable: function() {
    $('.item').draggable({ helper: 'clone' });
  }
};

var App = {
  init: function() {
    StoreList.makeItemsDraggable();
    GroceryList.makeListDroppable();
  }
};

$(document).ready(function() {
  App.init();
});
