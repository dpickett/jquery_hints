(function($) {
  $.fn.hint = function(options) {
    this.each(function() {
			new FieldHint(this, options);
		});
  };
})(jQuery);

function FieldHint(field, options) {
  this.$input = $(field),
  this.title = this.$input.attr('title'),
  this.$form = $(field).parents("form"),
  this.$win = $(window);

  if (!this.blurClass) this.blurClass = 'blur';

  this.applyHint = function(){
    if (this.$input.val() == '') {
      this.$input.val(this.title).addClass(this.blurClass);
    }
  }

  this.remove = function(){
    if(this.$input.val() == this.title) {
      this.$input.val('').removeClass(this.blurClass);
    }
  }

  this.formSubmitHandler = function(){
      this.remove();
      return true;
  }

  this.blurHandler = function(){
    this.applyHint()
  }

  this.focusHandler = function(){
    this.remove();
  }


  var that = this;
  this.$input.blur(function(){that.blurHandler()});
  this.$input.focus(function(){that.focusHandler()});
  this.$form.submit(function(){that.formSubmitHandler()});
  this.applyHint();
}

