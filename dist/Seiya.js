var Seiya = function(){}

Seiya.version = "0.0.1"


module.exports = Seiya
;(function( Seiya ){
  if( typeof Object.create !== "function" ){
    Object.create = function( proto ){
      var F = function(){}
      F.prototype = proto
      return new F
    }
  }
  
  if( typeof Math.guid !== "function"){
    Math.guid = function(){
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c){
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
        return v.toString(16)
      }).toUpperCase()
    }
  }

  Seiya.extend = function( target, source ){
    for( var p in source ){
      target[p] = source[p]
    }
    return target
  }
})( Seiya )
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
;(function(Seiya){
  var Model = Seiya.Class()
  Model.include({
    newRecord: true,
    create: function(){
      this.newRecord = false
      this.id = Math.guid()
      this.parent.records[this.id] = this.dup()
    },
    destroy: function(){
      delete this.parent.records[this.id]
    },
    save: function(){
      this.newRecord ? this.create() : this.update()
    },
    update: function(){
      this.parent.records[this.id] = this.dup()
    },
    dup: function(){
      var ret = Seiya.extend({}, this)
      return ret
    }
  })
  
  Model.extend({
    records : [],
    find: function(id){
      return this.records[id].dup()
    }
  })

  Seiya.Model = Model
})(Seiya)
