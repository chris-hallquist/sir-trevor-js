SirTrevor.CustomUIElement = (function(){

  var CustomUIElement = function(block_element, className) {
    this.className = "st-block-ui-btn " + className
    this.$block = block_element;
    this.blockID = this.$block.attr('id');

    this._ensureElement();
    this._bindFunctions();

    this.initialize();
  };

  _.extend(CustomUIElement.prototype, FunctionBind, Renderable, {

    bound: ['onMouseDown', 'onClick'],

    tagName: 'a',

    attributes: function() {
      return {};
    },

    initialize: function() {
      this.$el.bind('mousedown touchstart', this.onMouseDown)
              .bind('click', this.onClick)
    },

    onMouseDown: function() {
      SirTrevor.EventBus.trigger("block:reorder:down", this.blockID);
    },

    onClick: function() {
    },

    render: function() {
      return this;
    }

  });

  return CustomUIElement;

})();