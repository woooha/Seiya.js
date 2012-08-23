var assert = require("assert")
var Seiya = require("../dist/Seiya")

describe("Seiya", function(){
  describe("Model", function(){
    it("should create a Model inplement the CRUD opertation", function(){
      var Asset = Seiya.Class( Seiya.Model )

      var asset = new Asset
      asset.id = 1
      assert.equal(asset.newRecord, true)

      asset.save()

      assert.equal(false, asset.newRecord)
    
      var asset2 = new Asset
      asset.id = 2
      asset.name = "sanme, same"
      asset.save()
      
      assert.equal("sanme, same", Asset.find(2).name)
    })  
  })

  it("should duplicate another object, modify this object would not impress the original data", function(){
      var Asset = Seiya.Class( Seiya.Model )

      var asset = new Asset
      asset.name = "woooha"
      asset.save()
      var id = asset.id

      var asset2 = Asset.find( id )
      asset2.name = "bushanshan"
      var asset3 = Asset.find( id )
      assert.equal( "woooha", asset3.name)

      asset2.save()
      var asset4 = Asset.find( id )
      assert.equal( "bushanshan", asset4.name)
  })
})
