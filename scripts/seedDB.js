const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/clotheslist"
);

const clothingSeed = [
  {
    type: "hat",
    name: "heattech knitted cap",
    link: "https://www.uniqlo.com/us/en/heattech-knitted-cap-409342.html?dwvar_409342_color=COL15&cgid=#q=hat&lang=default&start=1",
    date: new Date(Date.now())
  },
  {
    type: "hat",
    name: "cotton twill cap",
    link: "https://www.uniqlo.com/us/en/cotton-twill-cap-410806.html?dwvar_410806_color=COL08&cgid=#q=hat&lang=default&start=6",
    date: new Date(Date.now())
  },
  {
    type: "hat",
    name: "cosmic beret",
    link: "https://valfre.com/collections/hats/products/cosmic-beret?variant=37379785793",
    date: new Date(Date.now())
  },
  {
    type: "hat",
    name: "cable knit fur pompom beanie",
    link: "https://www.urbanoutfitters.com/shop/cable-knit-fur-pompom-beanie?category=hats-for-women&color=001",
    date: new Date(Date.now())
  },
  {
    type: "hat",
    name: "anna felt panama hat",
    link: "https://www.urbanoutfitters.com/shop/anna-felt-panama-hat?category=hats-for-women&color=001",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "ruffled chiffon dress",
    link: "https://www2.hm.com/en_us/productpage.0659549002.html",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "overall jumpsuit",
    link: "https://www.levi.com/US/en_US/clothing/women/overalls-jumpsuits/overalls/skinny-overalls/p/588150003",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "last letter burnout velvet minidress",
    link: "https://www.freepeople.com/shop/last-letter-burnout-velvet-mini-dress/?category=dresses&color=040",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "eyes on me dress",
    link: "https://www.freepeople.com/shop/eyes-on-me-dress/?category=party-dresses&color=001",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "tilda plaid jumpsuit",
    link: "https://www.urbanoutfitters.com/shop/uo-tilda-plaid-jumpsuit?category=rompers-jumpsuits&color=072",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "corina dress",
    link: "https://valfre.com/collections/apparel/products/corina-dress?variant=7631644557342",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "two tone tunic dress",
    link: "https://www.bcbg.com/en/two-tone-tunic-dress/GZD61P12-0F9.html?dwvar_GZD61P12-0F9_color=0F9&cgid=dresses#start=59&dwvar_GZD61P12-0F9_color=0F9&cgid=dresses",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "solace london soraya sleeveless crepe asymmetric ruffle jumpsuit",
    link: "https://www.neimanmarcus.com/p/solace-london-soraya-sleeveless-crepe-asymmetric-ruffle-jumpsuit-prod212880842?childItemId=NMTXBHP_&navpath=cat000000_cat000001_cat58290731_cat47050742",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "elliatt sorremto stretch crisscross jumpsuit",
    link: "https://www.neimanmarcus.com/p/elliatt-sorremto-stretch-crisscross-jumpsuit-prod215320504?childItemId=NMTXS3G_&navpath=cat000000_cat000001_cat58290731_cat47050742",
    date: new Date(Date.now())
  },
  {
    type: "full body",
    name: "love of life midi dress",
    link: "https://www.freepeople.com/shop/love-of-life-midi-dress/?category=midi-dresses&color=001&quantity=1&type=REGULAR",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "long sleeve plaid flannel shirt",
    link: "https://www.uniqlo.com/us/en/men-supima-cotton-crew-neck-short-sleeve-t-shirt-404136.html?dwvar_404136_color=COL64&cgid=men-t-shirts#start=6&cgid=men-t-shirts",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "heattech stretch fleece crew neck long sleeve t-shirt",
    link: "https://www.uniqlo.com/us/en/men-heattech-stretch-fleece-crew-neck-long-sleeve-t-shirt-411325.html?dwvar_411325_color=COL09#start=19&cgid=men-t-shirts",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "premium mlambswool crewneck long sleeve sweater",
    link: "https://www.uniqlo.com/us/en/men-premium-lambswool-crewneck-long-sleeve-sweater-409179.html?dwvar_409179_color=COL08&cgid=men-sweaters#start=20&cgid=men-sweaters",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "extra fine merino knitted shirt",
    link: "https://www.uniqlo.com/us/en/women-u-3d-extra-fine-merino-knitted-shirt-412838.html?dwvar_412838_color=COL65&cgid=women-sweaters#start=12&cgid=women-sweaters",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "cybil top",
    link: "https://valfre.com/collections/apparel/products/cybil-top-black?variant=7948050006046",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "bright lights cable knit cropped sweater",
    link: "https://www.urbanoutfitters.com/shop/uo-bright-lights-cable-knit-cropped-sweater?category=sweaters-cardigans-for-women&color=066&quantity=1&type=REGULAR",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "vintage stripe collar v-neck pullover sweatshirt",
    link: "https://www.urbanoutfitters.com/shop/vintage-stripe-collar-v-neck-pullover-sweatshirt?category=hoodies-sweatshirts-for-men&color=004",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "ruffle sleeve cotton shirt",
    link: "https://www.bcbg.com/en/ruffle-sleeve-cotton-shirt/NPB16A21-100.html?dwvar_NPB16A21-100_color=100&cgid=clothing-by-category-tops#start=1&dwvar_NPB16A21-100_color=100&cgid=clothing-by-category-tops",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "crisscross jacquard wrap tie",
    link: "https://www.bcbg.com/en/crisscross-jacquard-wrap-tie-top/CJH14A74-001.html?dwvar_CJH14A74-001_color=001&cgid=clothing-by-category-tops#start=30&dwvar_CJH14A74-001_color=001&cgid=clothing-by-category-tops",
    date: new Date(Date.now())
  },
  {
    type: "top",
    name: "sweater with bead-embroidered floral motif",
    link: "https://www.gucci.com/us/en/pr/men/mens-ready-to-wear/mens-sweaters-cardigans/mens-crewneck/sweater-with-bead-embroidered-floral-motif-p-545744XKADX1082?position=27&listName=ProductGrid&categoryPath=Men/Mens-Ready-To-Wear",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "511 slim fit stretch jeans",
    link: "https://www.levi.com/US/en_US/clothing/unisex/jeans/511-slim-fit-stretch-jeans/p/045110408",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "517 boot cut jeans",
    link: "https://www.levi.com/US/en_US/clothing/men/jeans/517-boot-cut-jeans/p/005170216",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "the janis printed bells",
    link: "https://www.freepeople.com/shop/the-janis-printed-bells/?category=pants&color=011"
  },
  {
    type: "bottom",
    name: "lykke wulf ranch pants",
    link: "https://www.freepeople.com/shop/lykke-wullf-ranch-pants/?category=pants&color=008",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "pleated skirt with metallic thread",
    link: "https://www.zara.com/us/en/pleated-skirt-with-metallic-thread-p08247735.html?v1=7491598&v2=1074619",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "skirt with matching buttons",
    link: "https://www.zara.com/us/en/skirt-with-matching-buttons-p08242834.html?v1=7409634&v2=1074619",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "heattech stretch slim fit pants",
    link: "https://www.uniqlo.com/us/en/men-heattech-stretch-slim-fit-pants-413248.html?dwvar_413248_color=COL04&cgid=men-pants-and-chinos#start=14&cgid=men-pants-and-chinos",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "men stretch selvedge slim fit jeans",
    link: "https://www.uniqlo.com/us/en/men-stretch-selvedge-slim-fit-jeans-409656.html?dwvar_409656_length=032&cgid=men-jeans#start=13&cgid=men-jeans",
    date: new Date(Date.now())
  },
  {
    type: "bottom",
    name: "windproof warm lined pants",
    link: "https://www.uniqlo.com/us/en/men-windproof-warm-lined-pants-408510.html?dwvar_408510_color=COL32&cgid=men-warm-lined-pants#start=4&cgid=men-warm-lined-pants",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "suede canvas sk8 hi black and white",
    link: "https://www.vans.com/shop/mens-shoes-classics/suede-canvas-sk8-hi-black-white#hero=0",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "canvas authentic black",
    link: "https://www.vans.com/shop/canvas-authentic-black-black#hero=0",
    date: new Date(Date.now())
  },  
  {
    type: "shoes",
    name: "solid colors slip on true white",
    link: "https://www.vans.com/shop/mens-shoes-classics/solid-colors-slip-on-true-white#hero=0",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "camdale 6 inch boots black",
    link: "https://www.timberland.com/shop/womens-ankle-boots/womens-camdale-6-inch-boots-black-a1sef001#hero=0",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "6 inhc premium waterproof boots wheat",
    link: "https://www.timberland.com/shop/mens-6-inch-premium-waterproof-boots-wheat-10061024#hero=0",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "1460 pascal darcy floral",
    link: "https://www.drmartens.com/us/en/p/23876417",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "remi platform",
    link: "https://www.freepeople.com/shop/remi-platform/?category=heels-wedges&color=001",
    date: new Date(Date.now())
  },
  {
    type: "shoes",
    name: "lilith 2",
    link: "https://jeffreycampbellshoes.com/collections/shop-all/products/lilith-2?variant=2103992221720",
    date: new Date(Date.now())
  },
  
  
  

];

db.Clothes
  .remove({})
  .then(() => db.Clothes.collection.insertMany(clothingSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
