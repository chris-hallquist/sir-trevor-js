SirTrevor.BlockPalette = (function(){

  var BlockPalette = function(block_element) {
    this.$block = block_element;
    this.blockID = this.$block.attr('id');

    this._ensureElement();
    this._bindFunctions();

    this.initialize();
  };

  _.extend(BlockPalette.prototype, FunctionBind, Renderable, {

    bound: ['onMouseDown', 'onClick'],

    className: 'st-block-ui-btn st-block-ui-btn--reorder st-icon',
    tagName: 'a',

    attributes: function() {
      return {
        'html': 'reorder',
        'draggable': 'true',
        'data-icon': 'move'
      };
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

  return BlockPalette;

})();