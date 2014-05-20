SirTrevor.BlockBackground = (function(){

  var template = [
    "<div class='st-block-background__inner'>",
    "<p>Background Color: <input type='text' class='st-block-background__color'></p>",
    "</div>"
  ].join("\n");

  var BlockBackground = function(block_element, instance_id) {
    this.$block = block_element;
    this.instanceID = instance_id;
    this.total_blocks = 0;

    this._ensureElement();
    this._bindFunctions();

    this.initialize();
  };

  _.extend(BlockBackground.prototype, FunctionBind, Renderable, {

    bound: ['onSelectChange', 'toggle', 'show', 'hide'],

    className: 'st-block-background',
    visibleClass: 'st-block-background--is-visible',

    initialize: function(){
      this.$el.append(template);
      // this.$select = this.$('.st-block-positioner__select');

      // this.$select.on('change', this.onSelectChange);

      SirTrevor.EventBus.on(this.instanceID + ":blocks:count_update", this.onBlockCountChange);
    },

    onSelectChange: function() {
      var val = this.$select.val();
      if (val !== 0) {
        SirTrevor.EventBus.trigger(this.instanceID + ":blocks:change_position",
                                   this.$block, val, (val == 1 ? 'before' : 'after'));
        this.toggle();
      }
    },

    toggle: function() {
      this.$select.val(0);
      this.$el.toggleClass(this.visibleClass);
    },

    show: function(){
      this.$el.addClass(this.visibleClass);
    },

    hide: function(){
      this.$el.removeClass(this.visibleClass);
    }

  });

  return BlockBackground;

})();