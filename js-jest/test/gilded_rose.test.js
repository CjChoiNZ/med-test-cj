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

  it("conjured with zero quality condition", function() {
    const gildedRose = new Shop([new Item("Conjured", 1, 1)]);
    const days = 4;
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(0);
  });

  it("conjured with degrading in quality twice as fast as a normal item when sellIn is negative", function() {
    const gildedRose = new Shop([new Item("Conjured", 1, 20)]);
    const days = 4;
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(6);
  });
});
