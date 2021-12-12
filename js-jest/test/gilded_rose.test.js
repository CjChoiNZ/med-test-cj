const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("conjured with normal condition", function() {
    const gildedRose = new Shop([new Item("Conjured", 3, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(3);
  });
});
