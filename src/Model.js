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
