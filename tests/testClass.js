var Seiya = require('../dist/Seiya')
var assert = require('assert')

describe('Class', function(){
  describe('Create Class', function(){
    it('should create a User named woooha', function(){
      var User = Seiya.Class()

      User.include({
        name:"",
        init:function(name){
          this.name = name
        }})

      var user = new User
      assert.equal(user.name, undefined)
      user = new User("woooha")
      assert.equal(user.name, "woooha")
    })  
  })

  it('should create a Administrator inherit from User', function(){
    var User = Seiya.Class()

    User.include({
      name:"anonymous user",
      init:function(name){
        if( name ){
          this.name = name
        }
      }
    })

    var Administrator = Seiya.Class(User)
    Administrator.include({
      name:"anonymous administrator"
    })
    var admin = new Administrator
    assert.equal(admin.name, "anonymous administrator")

    var admin = new Administrator("woooha")
    assert.equal(admin.name, "woooha")
  })
})
