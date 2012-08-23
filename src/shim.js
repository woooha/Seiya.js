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
