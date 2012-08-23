;(function(Seiya){
  var Class = function(parent){
    var klass = function(){
      this.init.apply(this, arguments)
      this.parent = klass
    }

    klass.fn = klass.prototype

    if( parent ){
      Seiya.extend(klass, parent)
      var subclass = function(){}
      subclass.prototype = parent.prototype
      klass.prototype = new subclass
    } else {
      klass.fn.init = function(){}
    }


    klass.extend = function(obj){
      var extended = obj.extended
      Seiya.extend(klass, obj)
      if( extended ){
        extended(klass)
      }
    }

    klass.include = function( obj ){
      var included = obj.included
      Seiya.extend(klass.prototype, obj)
      if( included ){
        included(klass)
      }
    }

    return klass
  }

  Seiya.Class = Class
})(Seiya)
