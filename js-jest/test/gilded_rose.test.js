const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  const days = 4;
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("+5 Dexterity Vest test", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(16);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(6);
  });

  it("Elixir of the Mongoose test", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Elixir of the Mongoose");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(3);
  });

  it("Sulfuras, Hand of Ragnaros test", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });

  it("Sulfuras, Hand of Ragnaros test 2", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  it("Backstage passes to a TAFKAL80ETC concert test", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(11);
    expect(items[0].quality).toBe(24);
  });

  it("Backstage passes to a TAFKAL80ETC concert test 2", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(6);
    expect(items[0].quality).toBe(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert test 3", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(50);
  });

  it("conjured with normal condition", function() {
    const gildedRose = new Shop([new Item("Conjured", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });

  it("The quality of conjured item is never negative", function() {
    const gildedRose = new Shop([new Item("Conjured", 1, 1)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(0);
  });

  it("conjured with degrading in quality twice as fast as a normal item when sellIn is negative", function() {
    const gildedRose = new Shop([new Item("Conjured", 1, 20)]);
    let items;
    for (let day = 0; day < days; day++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toBe(-3);
    expect(items[0].quality).toBe(6);
  });
});
