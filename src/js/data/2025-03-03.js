dataSetVersion = "2025-03-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Saga",
    key: "saga",
    tooltip: "Check this to restrict to characters prominent to each saga.",
    checked: false,
    sub: [
      { name: "East Blue", tooltip: "Contains following arcs: Romance Dawn, Orange Town, Syrup Village, Baratie, Arlong Park, Loguetown", key: "EBS" },
	  { name: "Arabasta", tooltip: "Contains following arcs: Reverse Mountain, Whisky Peak, Little Garden, Drum Island, Arabasta", key: "AS" },
	  { name: "Sky Island", tooltip: "Contains following arcs: Jaya, Skypiea", key: "SIS" },
	  { name: "Water 7", tooltip: "Contains following arcs: Long Ring Long Land, Water 7, Enies Lobby, Post-Enies Lobby", key: "W7S" },
	  { name: "Thriller Bark", tooltip: "Contains following arcs: Thriller Bark", key: "TBS" },
	  { name: "Summit War", tooltip: "Contains following arcs: Sabaody Archipelago, Amazon Lily, Impel Down, Marineford, Post-War", key: "SWS" },
	  { name: "Fish-Man Island", tooltip: "Contains following arcs: Return to Sabaody, Fish-Man Island", key: "FIS" },
	  { name: "Dressrosa", tooltip: "Contains following arcs: Punk Hazard, Dressrosa", key: "DRS" },
	  { name: "Whole Cake Island", tooltip: "Contains following arcs: Zou, Whole Cake Island, Reverie", key: "WCIS" },
	  { name: "Wano Country", tooltip: "Contains following arcs: Wano Country", key: "WCS" },
	  { name: "Final", tooltip: "Contains following arcs: Egghead", key: "FS" },
    ]
  },
  {
	name: "Remove Movie Characters",
	key: "movie",
	tooltip: "Check this to remove all characters who only appear in the One Piece films.",
	checked: false
  },
  {
    name: "Remove Minor Characters",
    key: "minor",
    tooltip: "Check this to remove characters deemed minor to the overall story.",
	checked: false
  },
  {
    name: "Remove Animals",
    key: "animal",
    tooltip: "Check this to remove all animal characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Abdullah",
    img: "https://i.imgur.com/JZpdGcd.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Absalom",
    img: "https://i.imgur.com/B8ZqksK.png",
    opts: {
      saga: [ "TBS", "WCS"]
    }
  },
  {
    name: "Ain",
    img: "https://i.imgur.com/WAReKJ1.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Aisa",
    img: "https://i.imgur.com/CWxQvfC.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Aladine",
    img: "https://i.imgur.com/xQUa6je.png",
    opts: {
      saga: [ "FIS", "WCIS"],
	  minor: true
    }
  },
  {
    name: "Alvida",
    img: "https://i.imgur.com/Ujce8Ol.png",
    opts: {
      saga: [ "EBS", "SWS"]
    }
  },
  {
    name: "Aphelandra",
    img: "https://i.imgur.com/KALT2d8.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Aramaki (Ryokugyu)",
    img: "https://i.imgur.com/dFl6g27.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Arlong",
    img: "https://i.imgur.com/cwQPYqs.png",
    opts: {
      saga: [ "EBS", "FIS"]
    }
  },
  {
    name: "Ashura Doji",
    img: "https://i.imgur.com/Ax6HmfW.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Atlas",
    img: "https://i.imgur.com/484WT23.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Avalo Pizarro",
    img: "https://i.imgur.com/eX9Kirg.png",
    opts: {
      saga: [ "SWS", "FS"],
	  minor: true
    }
  },
  {
    name: "Babanuki",
    img: "https://i.imgur.com/S2Wu3O9.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },{
    name: "Baby 5",
    img: "https://i.imgur.com/6e4oOTT.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Baccarat",
    img: "https://i.imgur.com/VCC3RBn.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Bartholomew Kuma",
    img: "https://i.imgur.com/mLzu1o6.png",
    opts: {
      saga: [ "TBS", "SWS", "FS"]
    }
  },
  {
    name: "Bartolomeo",
    img: "https://i.imgur.com/53MSwHI.png",
    opts: {
      saga: [ "DRS", "WCIS"]
    }
  },
  {
    name: "Basil Hawkins",
    img: "https://i.imgur.com/tNCFJPZ.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Baskerville",
    img: "https://i.imgur.com/oETCa2t.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Bastille",
    img: "https://i.imgur.com/ZvcRYzf.png",
    opts: {
      saga: [ "SWS", "DRS"],
	  minor: true
    }
  },
  {
    name: "Bell-mère",
    img: "https://i.imgur.com/Mn30Al9.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Bellamy",
    img: "https://i.imgur.com/BHoMKWb.png",
    opts: {
      saga: [ "SIS", "DRS"]
    }
  },
  {
    name: "Belo Betty",
    img: "https://i.imgur.com/9wtcGvE.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    },
	
  },
  {
    name: "Benn Beckman",
    img: "https://i.imgur.com/QHCD7DP.png",
    opts: {
      saga: [ "EBS", "SWS", "FS"]
    }
	
  },
  {
    name: "Bepo",
    img: "https://i.imgur.com/rC7h80Y.png",
    opts: {
      saga: [ "SWS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Bian",
    img: "https://i.imgur.com/XPcQBlb.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Big Pan",
    img: "https://i.imgur.com/BQKQniU.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Binz",
    img: "https://i.imgur.com/MDw1c7F.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Biri",
    img: "https://i.imgur.com/ISRZTgM.png",
    opts: {
      saga: [ ""],
	  movie: true,
	  animal: true
    }
  },
  {
    name: "Black Maria",
    img: "https://i.imgur.com/OOUJGbi.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Blue Gilly",
    img: "https://i.imgur.com/0pUFCQj.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Bluejam",
    img: "https://i.imgur.com/1bFr0HB.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Blueno",
    img: "https://i.imgur.com/zfl3Al0.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Boa Hancock",
    img: "https://i.imgur.com/GfxTSpQ.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Boa Marigold",
    img: "https://i.imgur.com/eJyflcp.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Boa Sandersonia",
    img: "https://i.imgur.com/9L86PYD.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Bobbin",
    img: "https://i.imgur.com/upCFAzH.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Bobby Funk",
    img: "https://i.imgur.com/HYPCh49.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Bogard",
    img: "https://i.imgur.com/x9iCPt4.png",
    opts: {
      saga: [ "AS", "W7S"],
	  minor: true
    }
  },
  {
    name: "Boo",
    img: "https://i.imgur.com/wEJLU69.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Boodle",
    img: "https://i.imgur.com/yTzyFUt.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Borsalino (Kizaru)",
    img: "https://i.imgur.com/9yx1I1f.png",
    opts: {
      saga: [ "SWS", "FS"]
    }
  },
  {
    name: "Braham",
    img: "https://i.imgur.com/SjEvl4Z.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Brannew",
    img: "https://i.imgur.com/taMLA9B.png",
    opts: {
      saga: [ "EBS", "SWS"],
	  minor: true
    }
  },
  {
    name: "Brogy",
    img: "https://i.imgur.com/1uTFSLj.png",
    opts: {
      saga: [ "AS", "FS"]
    }
  },
  {
    name: "Brook",
    img: "https://i.imgur.com/L6GqAHB.png",
    opts: {
      saga: [ "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Brownbeard",
    img: "https://i.imgur.com/rR1jzi5.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
   {
    name: "Buchi",
    img: "https://i.imgur.com/wsZYxiH.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
   {
    name: "Buena Festa",
    img: "https://i.imgur.com/QAdWPQP.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
   {
    name: "Buffalo",
    img: "https://i.imgur.com/QVADkjj.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
   {
    name: "Buggy",
    img: "https://i.imgur.com/SIwJORV.png",
    opts: {
      saga: [ "EBS", "SWS", "WCS", "FS"]
    }
  },
   {
    name: "Cabaji",
    img: "https://i.imgur.com/e6QATDo.png",
    opts: {
      saga: [ "EBS", "SWS"]
    }
  },
   {
    name: "Caesar Clown",
    img: "https://i.imgur.com/AsH9owS.png",
    opts: {
      saga: [ "DRS", "WCIS"]
    }
  },
  {
    name: "Camie",
    img: "https://i.imgur.com/fNzIC9x.png",
    opts: {
      saga: [ "SWS", "FIS"]
    }
  },
  {
    name: "Capone Bege",
    img: "https://i.imgur.com/CtweX9J.png",
    opts: {
      saga: [ "SWS", "WCIS"]
    }
  },
  {
    name: "Caribou",
    img: "https://i.imgur.com/uIrWPdN.png",
    opts: {
      saga: [ "FIS", "WCS", "FS"]
    }
  },
  {
    name: "Carina",
    img: "https://i.imgur.com/1NmRpzn.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Carmel",
    img: "https://i.imgur.com/o9aeecC.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Carne",
    img: "https://i.imgur.com/08zkdD8.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Carrot",
    img: "https://i.imgur.com/p8cEyBT.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Catarina Devon",
    img: "https://i.imgur.com/LcFqNV1.png",
    opts: {
      saga: [ "SWS", "WCS", "FS"],
	  minor: true
    }
  },
  {
    name: "Cavendish",
    img: "https://i.imgur.com/iyh8G9O.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Chaka",
    img: "https://i.imgur.com/WMBFXct.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Charlotte Amande",
    img: "https://i.imgur.com/KvbASmM.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Charlotte Brûlée",
    img: "https://i.imgur.com/WPGNXX6.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Chiffon",
    img: "https://i.imgur.com/WNXT0ks.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Cracker",
    img: "https://i.imgur.com/zyUNVfP.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Daifuku",
    img: "https://i.imgur.com/cvk6kKd.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Charlotte Flampe",
    img: "https://i.imgur.com/tNGUU82.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Charlotte Galette",
    img: "https://i.imgur.com/aaCXAjx.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Charlotte Katakuri",
    img: "https://i.imgur.com/EXWBrK2.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Linlin (Big Mom)",
    img: "https://i.imgur.com/lq70zTl.png",
    opts: {
      saga: [ "FIS", "WCIS", "WCS"]
    }
  },
  {
    name: "Charlotte Mont-d'Or",
    img: "https://i.imgur.com/hTy4DUX.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Opera",
    img: "https://i.imgur.com/QBgagHx.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Charlotte Oven",
    img: "https://i.imgur.com/CgGpUmi.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Perospero",
    img: "https://i.imgur.com/WME8bje.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Charlotte Pudding",
    img: "https://i.imgur.com/MYXw9u8.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Charlotte Smoothie",
    img: "https://i.imgur.com/J6kHL7y.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Chess",
    img: "https://i.imgur.com/1kvX2hd.png",
    opts: {
      saga: [ "AS"],
	  minor: true
    }
  },
  {
    name: "Chew",
    img: "https://i.imgur.com/NCJzUUR.png",
    opts: {
      saga: [ "EBS", "FIS"]
    }
  },
  {
    name: "Chimney",
    img: "https://i.imgur.com/5RzFSFO.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Chinjao",
    img: "https://i.imgur.com/zvTJLXb.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Chouchou",
    img: "https://i.imgur.com/EGSr78S.png",
    opts: {
      saga: [ "EBS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Clou D. Clover",
    img: "https://i.imgur.com/MESyv0r.jpeg",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Conis",
    img: "https://i.imgur.com/oVdQmSo.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Coribou",
    img: "https://i.imgur.com/oDD0Hli.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Crocodile",
    img: "https://i.imgur.com/cpvDLfz.png",
    opts: {
      saga: [ "AS", "SWS", "FS"]
    }
  },
  {
    name: "Crocus",
    img: "https://i.imgur.com/qAG0Oh5.png",
    opts: {
      saga: [ "AS"],
	  minor: true
    }
  },
  {
    name: "Curly Dadan",
    img: "https://i.imgur.com/mWJmgwS.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Dagama",
    img: "https://i.imgur.com/qMMymxd.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Daifugo",
    img: "https://i.imgur.com/Nd5xPrK.jpeg",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Dalton",
    img: "https://i.imgur.com/MPKybpV.png",
    opts: {
      saga: [ "AS", "WCIS"]
    }
  },
  {
    name: "Daruma",
    img: "https://i.imgur.com/6FD4781.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Dellinger",
    img: "https://i.imgur.com/wupdXGd.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Demalo Black",
    img: "https://i.imgur.com/lVum0BF.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Denjiro (Kyoshiro)",
    img: "https://i.imgur.com/SEC52O0.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Diamante",
    img: "https://i.imgur.com/Biu2ahM.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Dice",
    img: "https://i.imgur.com/xTsDtRI.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Diesel",
    img: "https://i.imgur.com/3utWHod.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Doc Q",
    img: "https://i.imgur.com/1InNJKJ.png",
    opts: {
      saga: [ "SIS", "SWS", "FS"],
	  minor: true
    }
  },
  {
    name: "Donquixote Doflamingo",
    img: "https://i.imgur.com/Wve27U0.png",
    opts: {
      saga: [ "SIS", "SWS", "DRS"]
    }
  },
  {
    name: "Donquixote Homing",
    img: "https://i.imgur.com/ax3NZ7V.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Donquixote Mjosgard",
    img: "https://i.imgur.com/Pgpi5kL.png",
    opts: {
      saga: [ "FIS", "WCIS", "WCS"],
	  minor: true
    }
  },
  {
    name: "Donquixote Rosinante",
    img: "https://i.imgur.com/V0yQdg0.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Dorry",
    img: "https://i.imgur.com/rnEWpB7.png",
    opts: {
      saga: [ "AS", "FS"]
    }
  },
  {
    name: "Dosun",
    img: "https://i.imgur.com/ViLFB6Z.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Douglas Bullet",
    img: "https://i.imgur.com/o8GHoZI.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Dr. Hiriluk",
    img: "https://i.imgur.com/cil6Uep.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Dr. Indigo",
    img: "https://i.imgur.com/ij1zxkR.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Dr. Kureha",
    img: "https://i.imgur.com/3oAV0ay.png",
    opts: {
      saga: [ "AS", "WCIS"]
    }
  },
  {
    name: "Dr. Vegapunk",
    img: "https://i.imgur.com/8na60Oi.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Dracule Mihawk",
    img: "https://i.imgur.com/m7Xposd.png",
    opts: {
      saga: [ "EBS", "SWS", "WCS", "FS"]
    }
  },
  {
    name: "Drophy (Miss Merry Christmas)",
    img: "https://i.imgur.com/3UPXGdw.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Duval",
    img: "https://i.imgur.com/Hp1L8ix.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Edison",
    img: "https://i.imgur.com/TydeSYE.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Edward Newgate",
    img: "https://i.imgur.com/o52gjCc.png",
    opts: {
      saga: [ "W7S", "SWS", "WCS"]
    }
  },
  {
    name: "Elizabello II",
    img: "https://i.imgur.com/36tfIxt.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Emporio Ivankov",
    img: "https://i.imgur.com/0hRiv7E.png",
    opts: {
      saga: [ "SWS", "FS"]
    }
  },
  {
    name: "Enel",
    img: "https://i.imgur.com/RM2dklg.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Eustass Kid",
    img: "https://i.imgur.com/V1ichrU.png",
    opts: {
      saga: [ "SWS", "WCS", "FS"]
    }
  },
  {
    name: "Fisher Tiger",
    img: "https://i.imgur.com/7oSM0e7.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Foxy",
    img: "https://i.imgur.com/mdQ7Apu.png",
    opts: {
      saga: [ "W7S", "TBS"]
    }
  },
  {
    name: "Franky",
    img: "https://i.imgur.com/V0696Ek.png",
    opts: {
      saga: [ "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Fukaboshi",
    img: "https://i.imgur.com/2m8S0XZ.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Fukurokuju",
    img: "https://i.imgur.com/bJ8rhiP.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Fukurou",
    img: "https://i.imgur.com/yZdmPCl.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Fullbody",
    img: "https://i.imgur.com/TLvdzxm.png",
    opts: {
      saga: [ "EBS", "AS"],
	  minor: true
    }
  },
  {
    name: "Gaimon",
    img: "https://i.imgur.com/Dc3qS30.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Gan Fall",
    img: "https://i.imgur.com/12pFdau.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Gancho",
    img: "https://i.imgur.com/9c0GL8z.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Gecko Moria",
    img: "https://i.imgur.com/XKREuXj.png",
    opts: {
      saga: [ "TBS", "SWS", "WCS"]
    }
  },
  {
    name: "Gedatsu",
    img: "https://i.imgur.com/uAKfF8r.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Genzo",
    img: "https://i.imgur.com/t3nSDwG.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Gild Tesoro",
    img: "https://i.imgur.com/dDxy0Cm.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Gin",
    img: "https://i.imgur.com/FkJMfDI.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Giolla",
    img: "https://i.imgur.com/TWHm7TW.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Gladius",
    img: "https://i.imgur.com/0e3MGph.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Gloriosa (Elder Nyon)",
    img: "https://i.imgur.com/eEtp8GW.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Going Merry",
    img: "https://i.imgur.com/uATnvJh.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S"]
    }
  },
  {
    name: "Gol D. Roger",
    img: "https://i.imgur.com/qQ5sBcE.png",
    opts: {
      saga: [ "EBS", "SWS", "FIS", "WCS"]
    }
  },
  {
    name: "Gordon",
    img: "https://i.imgur.com/XuxllBI.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Gotti",
    img: "https://i.imgur.com/PMDqOnJ.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Guernika",
    img: "https://i.imgur.com/uRdaGt4.jpeg",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Gyatz",
    img: "https://i.imgur.com/GLUREAR.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Hack",
    img: "https://i.imgur.com/LJpLpBm.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Hajrudin",
    img: "https://i.imgur.com/kBvqby6.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Hamburg",
    img: "https://i.imgur.com/9xKW9G3.png",
    opts: {
      saga: [ "W7S", "TBS"]
    }
  },
  {
    name: "Hannyabal",
    img: "https://i.imgur.com/wKAuYzu.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Haredas",
    img: "https://i.imgur.com/MfwnUEC.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Hatchan",
    img: "https://i.imgur.com/wjO6M6d.png",
    opts: {
      saga: [ "EBS", "SWS", "FIS"]
    }
  },
  {
    name: "Hattori",
    img: "https://i.imgur.com/3xnQ9fI.png",
    opts: {
      saga: [ "W7S"],
	  minor: true,
	  animal: true
    }
  },
  {
    name: "Heat",
    img: "https://i.imgur.com/W7LVdqn.png",
    opts: {
      saga: [ "SWS", "WCS"],
	  minor: true
    }
  },
  {
    name: "Helmeppo",
    img: "https://i.imgur.com/aIkaauB.png",
    opts: {
      saga: [ "EBS", "AS", "W7S", "SWS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Hera",
    img: "https://i.imgur.com/wZqnqJF.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Heracles",
    img: "https://i.imgur.com/WqbtuCm.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Higuma",
    img: "https://i.imgur.com/5iefo1P.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Hihimaru",
    img: "https://i.imgur.com/a47lYDX.png",
    opts: {
      saga: [ "WCS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Hildon",
    img: "https://i.imgur.com/VZZZP1t.png",
    opts: {
      saga: [ "TBS"],
	  minor: true
    }
  },
  {
    name: "Hina",
    img: "https://i.imgur.com/voQpYzq.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Hody Jones",
    img: "https://i.imgur.com/RbE35LI.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Hogback",
    img: "https://i.imgur.com/Q4SPMvw.png",
    opts: {
      saga: [ "TBS"]
    }
  },
  {
    name: "Holed'em",
    img: "https://i.imgur.com/HVpJdff.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Holy",
    img: "https://i.imgur.com/3b5rMCo.png",
    opts: {
      saga: [ "SIS"],
	  animal: true
    }
  },
  {
    name: "Hyougoro",
    img: "https://i.imgur.com/F7EGIY5.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Hyouzou",
    img: "https://i.imgur.com/6SPcO8v.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Iceburg",
    img: "https://i.imgur.com/2s6HNcZ.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Ideo",
    img: "https://i.imgur.com/wAcQ8vw.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Igaram",
    img: "https://i.imgur.com/z2U0RRq.png",
    opts: {
      saga: [ "AS", "WCIS"]
    }
  },
  {
    name: "Ikaros Much",
    img: "https://i.imgur.com/Bz6U4XA.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Inazuma",
    img: "https://i.imgur.com/YgH0t82.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Inuarashi",
    img: "https://i.imgur.com/nqRqodf.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Ipponmatsu",
    img: "https://i.imgur.com/6CDHvoo.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Issho (Fujitora)",
    img: "https://i.imgur.com/qD2MWQs.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Izou",
    img: "https://i.imgur.com/cIZzJRH.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Jabra",
    img: "https://i.imgur.com/YsmwqMl.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Jack",
    img: "https://i.imgur.com/XnQfCSv.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Jaguar D. Saul",
    img: "https://i.imgur.com/2sLqZiK.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Jango",
    img: "https://i.imgur.com/plIdfUm.png",
    opts: {
      saga: [ "EBS", "AS"]
    }
  },
  {
    name: "Jeet",
    img: "https://i.imgur.com/Grfzx0N.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Jesus Burgess",
    img: "https://i.imgur.com/PUkxRXm.png",
    opts: {
      saga: [ "DRS", "FS"]
    }
  },
  {
    name: "Jewelry Bonney",
    img: "https://i.imgur.com/55e1C7r.png",
    opts: {
      saga: [ "SWS", "FS"]
    }
  },
  {
    name: "Jinbe",
    img: "https://i.imgur.com/UWDUUOe.png",
    opts: {
      saga: [ "SWS", "FIS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Johnny",
    img: "https://i.imgur.com/3C7w9lo.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Kabu",
    img: "https://i.imgur.com/gBKjvvH.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Kaido",
    img: "https://i.imgur.com/bpTYP4T.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kaku",
    img: "https://i.imgur.com/R1Dkruk.png",
    opts: {
      saga: [ "W7S", "FS"]
    }
  },
  {
    name: "Kalgara",
    img: "https://i.imgur.com/ZJW6IBL.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Kalifa",
    img: "https://i.imgur.com/qfaFh8D.png",
    opts: {
      saga: [ "W7S", "FS"]
    }
  },
  {
    name: "Kamakiri",
    img: "https://i.imgur.com/jwRSlUu.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Karasu",
    img: "https://i.imgur.com/NfiGK97.png",
    opts: {
      saga: [ "WCIS", "WCS"],
	  minor: true
    }
  },
  {
    name: "Karoo",
    img: "https://i.imgur.com/JQ0nWQh.png",
    opts: {
      saga: [ "AS", "WCIS"],
	  animal: true
    }
  },
  {
    name: "Kashii",
    img: "https://i.imgur.com/cTKTZC7.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Kawamatsu",
    img: "https://i.imgur.com/OtYQkRL.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kaya",
    img: "https://i.imgur.com/Fcy1flo.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Kelly Funk",
    img: "https://i.imgur.com/fwG0TRl.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Kikunojo",
    img: "https://i.imgur.com/bHKllo7.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kikyo",
    img: "https://i.imgur.com/fXcofKr.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Killer",
    img: "https://i.imgur.com/aekSzDe.png",
    opts: {
      saga: [ "SWS", "WCS", "FS"]
    }
  },
  {
    name: "Kin'emon",
    img: "https://i.imgur.com/aSnd92f.png",
    opts: {
      saga: [ "DRS", "WCIS", "WCS"]
    }
  },
  {
    name: "King",
    img: "https://i.imgur.com/WD4vmuU.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kingbaum",
    img: "https://i.imgur.com/RLJ3otC.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Kiwi",
    img: "https://i.imgur.com/4qe6w2g.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Koala",
    img: "https://i.imgur.com/Nd9LIxm.png",
    opts: {
      saga: [ "DRS", "FS"]
    }
  },
  {
    name: "Koby",
    img: "https://i.imgur.com/oTdaVPq.png",
    opts: {
      saga: [ "EBS", "W7S", "SWS", "WCS", "FS"]
    }
  },
  {
    name: "Kokoro",
    img: "https://i.imgur.com/KZaEHG7.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Komachiyo",
    img: "https://i.imgur.com/SPOJcGt.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kouzuki Hiyori",
    img: "https://i.imgur.com/gvPQBtp.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kouzuki Momonosuke",
    img: "https://i.imgur.com/v3bzcxB.png",
    opts: {
      saga: [ "DRS", "WCIS", "WCS"]
    }
  },
  {
    name: "Kouzuki Oden",
    img: "https://i.imgur.com/LAmEoVT.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kouzuki Sukiyaki (Tenguyama Hitetsu)",
    img: "https://i.imgur.com/cRDWsIG.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kouzuki Toki",
    img: "https://i.imgur.com/myruKTO.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Koza",
    img: "https://i.imgur.com/DfW5IPZ.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Krieg",
    img: "https://i.imgur.com/6KMF6Lm.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Kumadori",
    img: "https://i.imgur.com/HuzBDoZ.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Kumashi",
    img: "https://i.imgur.com/TNiFRI6.png",
    opts: {
      saga: [ "TBS"],
	  animal: true
    }
  },
  {
    name: "Kuro",
    img: "https://i.imgur.com/gUL3HBf.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Kuromarimo",
    img: "https://i.imgur.com/h9yrMFq.png",
    opts: {
      saga: [ "AS"],
	  minor: true
    }
  },
  {
    name: "Kuroobi",
    img: "https://i.imgur.com/V1zXet6.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Kurozumi Higurashi",
    img: "https://i.imgur.com/acrcpok.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Kurozumi Kanjuro",
    img: "https://i.imgur.com/BY9sZ4W.png",
    opts: {
      saga: [ "DRS", "WCIS", "WCS"]
    }
  },
  {
    name: "Kurozumi Orochi",
    img: "https://i.imgur.com/usNXefU.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Kuzan (Aokiji)",
    img: "https://i.imgur.com/BQyTetQ.png",
    opts: {
      saga: [ "W7S", "SWS", "FS"]
    }
  },
  {
    name: "Kyros",
    img: "https://i.imgur.com/6hHDVnE.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Laboon",
    img: "https://i.imgur.com/WTbWatn.png",
    opts: {
      saga: [ "AS", "TBS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Laffitte",
    img: "https://i.imgur.com/xbD8Fmc.png",
    opts: {
      saga: [ "SIS", "FS"]
    }
  },
  {
    name: "Lao G",
    img: "https://i.imgur.com/qy5phz1.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Leo",
    img: "https://i.imgur.com/5bFq81E.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Lilith",
    img: "https://i.imgur.com/H1uG7M9.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Lindbergh",
    img: "https://i.imgur.com/VyllWgo.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Little Oars Jr.",
    img: "https://i.imgur.com/g0bsZ2y.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Lola",
    img: "https://i.imgur.com/lJZ4n5x.png",
    opts: {
      saga: [ "TBS"]
    }
  },
  {
    name: "Lucky Roux",
    img: "https://i.imgur.com/X5rtVZO.png",
    opts: {
      saga: [ "EBS", "FS"]
    }
  },
  {
    name: "Machvise",
    img: "https://i.imgur.com/VhFK2eD.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Magellan",
    img: "https://i.imgur.com/PRsx9yo.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Makino",
    img: "https://i.imgur.com/medXlGt.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Manboshi",
    img: "https://i.imgur.com/NRQhHOu.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Mansherry",
    img: "https://i.imgur.com/NO0Bqv9.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Marco",
    img: "https://i.imgur.com/KKcC5AO.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Marguerite",
    img: "https://i.imgur.com/c3zXABw.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Marianne (Miss Goldenweek)",
    img: "https://i.imgur.com/zuYfEad.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Marshall D. Teach",
    img: "https://i.imgur.com/4r9hptA.png",
    opts: {
      saga: [ "SIS", "W7S", "SWS", "WCS", "FS"]
    }
  },
  {
    name: "Masira",
    img: "https://i.imgur.com/6ozpQVj.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Matsuge (Eyelashes)",
    img: "https://i.imgur.com/g3ZvBuR.png",
    opts: {
      saga: [ "AS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "McKinley",
    img: "https://i.imgur.com/BHcdsm7.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Medaka Mermaid Quintuplets",
    img: "https://i.imgur.com/AD8ch7B.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Megalo",
    img: "https://i.imgur.com/cH7hABh.png",
    opts: {
      saga: [ "FIS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Merry",
    img: "https://i.imgur.com/9lsP12c.jpeg",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Mikita (Miss Valentine)",
    img: "https://i.imgur.com/PZBVHT4.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Miss Monday",
    img: "https://i.imgur.com/3inMmhO.png",
    opts: {
      saga: [ "AS"],
	  minor: true
    }
  },
  {
    name: "Miyagi",
    img: "https://i.imgur.com/PDH9Ius.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Mocha",
    img: "https://i.imgur.com/P4GhUkC.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Mohji",
    img: "https://i.imgur.com/K9VTjhW.png",
    opts: {
      saga: [ "EBS", "SWS"]
    }
  },
  {
    name: "Momonga",
    img: "https://i.imgur.com/4Pq5HzR.png",
    opts: {
      saga: [ "SWS", "DRS"],
	  minor: true
    }
  },
  {
    name: "Momoo",
    img: "https://i.imgur.com/aH8z0VA.png",
    opts: {
      saga: [ "EBS", "FIS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Monet",
    img: "https://i.imgur.com/IBxgaOT.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Monkey D. Dragon",
    img: "https://i.imgur.com/xTSssOK.jpeg",
    opts: {
      saga: [ "EBS", "FS"]
    }
  },
  {
    name: "Monkey D. Garp",
    img: "https://i.imgur.com/cuc7hT2.png",
    opts: {
      saga: [ "AS", "W7S", "SWS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Monkey D. Luffy",
    img: "https://i.imgur.com/jS3iMC1.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Mont Blanc Cricket",
    img: "https://i.imgur.com/wJxSYfH.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Mont Blanc Noland",
    img: "https://i.imgur.com/gcJlkY4.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Morgan",
    img: "https://i.imgur.com/2IqVZui.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Morgans",
    img: "https://i.imgur.com/DfoDghi.png",
    opts: {
      saga: [ "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Morley",
    img: "https://i.imgur.com/9OCtLLy.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Mozu",
    img: "https://i.imgur.com/nPHw0WA.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Mr. 1 Daz Bonez",
    img: "https://i.imgur.com/L8pcCnc.png",
    opts: {
      saga: [ "AS", "SWS"]
    }
  },
  {
    name: "Mr. 2 Bon Clay",
    img: "https://i.imgur.com/c9Hkbod.png",
    opts: {
      saga: [ "AS", "SWS"]
    }
  },
  {
    name: "Mr. 3 Galdino",
    img: "https://i.imgur.com/vg29eEX.png",
    opts: {
      saga: [ "AS", "SWS"]
    }
  },
  {
    name: "Mr. 4 Babe",
    img: "https://i.imgur.com/c6MCoM7.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Mr. 5 Gem",
    img: "https://i.imgur.com/q2QFuNs.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Mr. 9",
    img: "https://i.imgur.com/NJ8VAod.png",
    opts: {
      saga: [ "AS"],
	  minor: true
    }
  },
  {
    name: "Nako",
    img: "https://i.imgur.com/FyC6Fr6.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Nami",
    img: "https://i.imgur.com/mSKDMNz.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Napoleon",
    img: "https://i.imgur.com/AL0u0mY.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Nefertari Cobra",
    img: "https://i.imgur.com/0sCZYlb.png",
    opts: {
      saga: [ "AS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Nefertari Vivi",
    img: "https://i.imgur.com/EPScQF4.png",
    opts: {
      saga: [ "AS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Nekomamushi",
    img: "https://i.imgur.com/ti2xU4J.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Neptune",
    img: "https://i.imgur.com/DVYCnVF.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Nero",
    img: "https://i.imgur.com/Q6TQFPe.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Nezumi",
    img: "https://i.imgur.com/TrNorPD.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
   {
    name: "Nico Olva",
    img: "https://i.imgur.com/Y99PZFA.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Nico Robin",
    img: "https://i.imgur.com/njZblVA.png",
    opts: {
      saga: [ "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Ninjin",
    img: "https://i.imgur.com/ejkb1hh.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Nojiko",
    img: "https://i.imgur.com/dqLyFs1.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Nola",
    img: "https://i.imgur.com/wso8Pbq.png",
    opts: {
      saga: [ "SIS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Ohm",
    img: "https://i.imgur.com/pMD4WFD.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Oimo",
    img: "https://i.imgur.com/F2D9RaB.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Orlumbus",
    img: "https://i.imgur.com/4haTv0B.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Otohime",
    img: "https://i.imgur.com/rVWHR9e.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Pagaya",
    img: "https://i.imgur.com/U7DCgDt.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Page One",
    img: "https://i.imgur.com/qiRHSdA.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Pappag",
    img: "https://i.imgur.com/K5CCjiC.png",
    opts: {
      saga: [ "SWS", "FIS"]
    }
  },
  {
    name: "Patty",
    img: "https://i.imgur.com/oo0KzEl.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Paulie",
    img: "https://i.imgur.com/TAdsqxk.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Pearl",
    img: "https://i.imgur.com/xdsQnnV.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Pedro",
    img: "https://i.imgur.com/53zoGiQ.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Peepley Lulu",
    img: "https://i.imgur.com/WEciiZE.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Pekoms",
    img: "https://i.imgur.com/G4opvfR.png",
    opts: {
      saga: [ "FIS", "WCIS"]
    }
  },
  {
    name: "Pell",
    img: "https://i.imgur.com/VFql8tf.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Penguin",
    img: "https://i.imgur.com/wbbAOVE.png",
    opts: {
      saga: [ "SWS", "WCS"],
	  minor: true
    }
  },
  {
    name: "Perona",
    img: "https://i.imgur.com/EA8IJNd.png",
    opts: {
      saga: [ "TBS", "SWS"]
    }
  },
  {
    name: "Pica",
    img: "https://i.imgur.com/DgWUB3D.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Pickles",
    img: "https://i.imgur.com/mXDx0Zf.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Pierre",
    img: "https://i.imgur.com/n1SFud5.png",
    opts: {
      saga: [ "SIS"],
	  animal: true
    }
  },
  {
    name: "Piiman",
    img: "https://i.imgur.com/kAqPSaW.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Porche",
    img: "https://i.imgur.com/9m9qt9c.png",
    opts: {
      saga: [ "W7S", "TBS"]
    }
  },
  {
    name: "Portgas D. Ace",
    img: "https://i.imgur.com/A0rxTxz.png",
    opts: {
      saga: [ "AS", "W7S", "SWS", "WCS"]
    }
  },
  {
    name: "Pound",
    img: "https://i.imgur.com/PGrcy6m.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Prometheus",
    img: "https://i.imgur.com/y2abHps.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Pythagoras",
    img: "https://i.imgur.com/m8iwQX9.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Queen",
    img: "https://i.imgur.com/g67zogu.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Raise Max",
    img: "https://i.imgur.com/yZgLq6K.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Raizo",
    img: "https://i.imgur.com/aDmdzfE.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Raki",
    img: "https://i.imgur.com/0GGPO4Q.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Randolph",
    img: "https://i.imgur.com/uNskNDQ.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Rebecca",
    img: "https://i.imgur.com/QyFo3eS.png",
    opts: {
      saga: [ "DRS", "WCIS"]
    }
  },
  {
    name: "Richie",
    img: "https://i.imgur.com/HOGguVi.png",
    opts: {
      saga: [ "EBS"],
	  animal: true
    }
  },
  {
    name: "Riku Doldo III",
    img: "https://i.imgur.com/2JPX5So.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Rob Lucci",
    img: "https://i.imgur.com/oX3AQfg.png",
    opts: {
      saga: [ "W7S", "FS"]
    }
  },
  {
    name: "Roronoa Zoro",
    img: "https://i.imgur.com/9TWt3vj.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Ryuboshi",
    img: "https://i.imgur.com/BezrQ9u.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Ryuma",
    img: "https://i.imgur.com/8xkrft7.png",
    opts: {
      saga: [ "TBS"]
    }
  },
  {
    name: "S-Bear",
    img: "https://i.imgur.com/Gy7FSzw.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "S-Hawk",
    img: "https://i.imgur.com/N1TC5D3.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "S-Shark",
    img: "https://i.imgur.com/B2qbeLU.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "S-Snake",
    img: "https://i.imgur.com/cQiWgUc.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Sabo",
    img: "https://i.imgur.com/qKMYS0h.png",
    opts: {
      saga: [ "SWS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Sadi",
    img: "https://i.imgur.com/p0Yy0s1.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Sai",
    img: "https://i.imgur.com/ACCmNjy.png",
    opts: {
      saga: [ "DRS", "WCIS", "WCS"]
    }
  },
  {
    name: "Saint Charlos",
    img: "https://i.imgur.com/rY6HdjY.png",
    opts: {
      saga: [ "SWS", "WCIS", "WCS"]
    }
  },
  {
    name: "Sakazuki (Akainu)",
    img: "https://i.imgur.com/npsckB3.png",
    opts: {
      saga: [ "SWS", "DRS", "WCS"]
    }
  },
  {
    name: "Saldeath",
    img: "https://i.imgur.com/ZcvWnF4.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Sanji",
    img: "https://i.imgur.com/xBFWmSN.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Sarquiss",
    img: "https://i.imgur.com/sNKKp5Z.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Sasaki",
    img: "https://i.imgur.com/I8i0Ju2.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Satori",
    img: "https://i.imgur.com/9TRO6d8.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Scarlett",
    img: "https://i.imgur.com/F64mtcC.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Scratchmen Apoo",
    img: "https://i.imgur.com/OSKQTqu.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Sengoku",
    img: "https://i.imgur.com/z3tVRIK.png",
    opts: {
      saga: [ "SIS", "SWS", "DRS"]
    }
  },
  {
    name: "Senor Pink",
    img: "https://i.imgur.com/mX47oCM.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Sentomaru",
    img: "https://i.imgur.com/7LBciZw.png",
    opts: {
      saga: [ "SWS", "FIS", "FS"]
    }
  },
  {
    name: "Shachi",
    img: "https://i.imgur.com/nREJ4Zv.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Shaka",
    img: "https://i.imgur.com/nA75VD2.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Shakuyaku (Shakky)",
    img: "https://i.imgur.com/KNeHNKY.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Sham",
    img: "https://i.imgur.com/rRUKgcd.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Shanks",
    img: "https://i.imgur.com/Ec25Z5r.png",
    opts: {
      saga: [ "EBS", "W7S", "SWS", "WCS", "FS"]
    }
  },
   {
    name: "Shiki",
    img: "https://i.imgur.com/DPXfxN6.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Shimotsuki Koushirou",
    img: "https://i.imgur.com/NMskyUz.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Shimotsuki Kuina",
    img: "https://i.imgur.com/zy7LfXF.png",
    opts: {
      saga: [ "EBS"]
    }
  },
   {
    name: "Shimotsuki Ushimaru",
    img: "https://i.imgur.com/kas9V5U.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Shimotsuki Yasuie",
    img: "https://i.imgur.com/xHjC7GE.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Shinobu",
    img: "https://i.imgur.com/P0ezduQ.png",
    opts: {
      saga: [ "WCS"]
    }
  },
   {
    name: "Shirahoshi",
    img: "https://i.imgur.com/7s3Jku1.png",
    opts: {
      saga: [ "FIS", "WCIS", "WCS"]
    }
  },
  {
    name: "Shiryu",
    img: "https://i.imgur.com/OPsqmRA.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Shishilian",
    img: "https://i.imgur.com/WP713s3.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
   {
    name: "Shoujou",
    img: "https://i.imgur.com/XjU0G1T.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Shura",
    img: "https://i.imgur.com/jlmJY1w.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "Shyarly",
    img: "https://i.imgur.com/iF7qpK0.png",
    opts: {
      saga: [ "FIS"]
    }
  },
   {
    name: "Silvers Rayleigh",
    img: "https://i.imgur.com/MTh2KKw.png",
    opts: {
      saga: [ "EBS", "SWS", "FIS", "WCS"]
    }
  },
  {
    name: "Smoker",
    img: "https://i.imgur.com/lBqAkHE.png",
    opts: {
      saga: [ "EBS", "AS", "SWS", "DRS"]
    }
  },
  {
    name: "Spandam",
    img: "https://i.imgur.com/aOTHgFg.png",
    opts: {
      saga: [ "W7S"]
    }
  },
   {
    name: "Spandine",
    img: "https://i.imgur.com/17vvhJW.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Speed",
    img: "https://i.imgur.com/jSv1BAr.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Squard",
    img: "https://i.imgur.com/zRlZ87g.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
   {
    name: "Sterry",
    img: "https://i.imgur.com/VPWa4O9.png",
    opts: {
      saga: [ "SWS", "WCIS"],
	  minor: true
    }
  },
  {
    name: "Streusen",
    img: "https://i.imgur.com/MjlRJU4.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Stussy",
    img: "https://i.imgur.com/n8c20lT.png",
    opts: {
      saga: [ "WCIS", "FS"]
    }
  },
   {
    name: "Sugar",
    img: "https://i.imgur.com/bAxjeIb.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Suleiman",
    img: "https://i.imgur.com/HgcWeZV.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Surume",
    img: "https://i.imgur.com/DSVaVyH.png",
    opts: {
      saga: [ "FIS"],
	  animal: true,
	  minor: true
    }
  },
   {
    name: "T Bone",
    img: "https://i.imgur.com/ry8GNUS.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Tama",
    img: "https://i.imgur.com/xGXuSFF.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Tamago",
    img: "https://i.imgur.com/mCUqH0I.png",
    opts: {
      saga: [ "FIS", "WCIS"]
    }
  },
   {
    name: "Tamanegi",
    img: "https://i.imgur.com/1RnrI1l.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Tanaka",
    img: "https://i.imgur.com/TnaptUz.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Tank Lepanto",
    img: "https://i.imgur.com/i7GUqxL.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
   {
    name: "Tashigi",
    img: "https://i.imgur.com/NqxXvIk.png",
    opts: {
      saga: [ "EBS", "AS", "SWS", "DRS"]
    }
  },
  {
    name: "The Unluckies",
    img: "https://i.imgur.com/tJZtc98.png",
    opts: {
      saga: [ "AS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Thousand Sunny",
    img: "https://i.imgur.com/HPV8beo.png",
    opts: {
      saga: [ "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
   {
    name: "Tilestone",
    img: "https://i.imgur.com/JdHf8hG.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Toko",
    img: "https://i.imgur.com/c9jZuEh.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Tom",
    img: "https://i.imgur.com/hqqokCq.png",
    opts: {
      saga: [ "W7S"],
	  minor: true
    }
  },
  {
    name: "Tony Tony Chopper",
    img: "https://i.imgur.com/HFau8Nx.png",
    opts: {
      saga: [ "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Toto",
    img: "https://i.imgur.com/NuN02wD.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Trafalgar D. Law",
    img: "https://i.imgur.com/hi3baLm.png",
    opts: {
      saga: [ "SWS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Trebol",
    img: "https://i.imgur.com/lQKL4KB.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Tristan",
    img: "https://i.imgur.com/yRAMEcY.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Tsuru",
    img: "https://i.imgur.com/cFmhdwr.png",
    opts: {
      saga: [ "SWS"],
	  minor: true
    }
  },
  {
    name: "Tsurujo",
    img: "https://i.imgur.com/77ejBmF.png",
    opts: {
      saga: [ "WCS"],
	  minor: true
    }
  },
  {
    name: "Ucy",
    img: "https://i.imgur.com/x9xsioQ.png",
    opts: {
      saga: [ "DRS"],
	  animal: true,
	  minor: true
    }
  },
  {
    name: "Ulti",
    img: "https://i.imgur.com/7ywTaV2.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Urouge",
    img: "https://i.imgur.com/WnoiE9t.png",
    opts: {
      saga: [ "SWS"]
    }
  },
  {
    name: "Usopp",
    img: "https://i.imgur.com/EL7u0PC.png",
    opts: {
      saga: [ "EBS", "AS", "SIS", "W7S", "TBS", "SWS", "FIS", "DRS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Uta",
    img: "https://i.imgur.com/C96cci1.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Vander Decken IX",
    img: "https://i.imgur.com/pwQgaT7.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Vergo",
    img: "https://i.imgur.com/mydGtSc.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Victoria Cindry",
    img: "https://i.imgur.com/ern65aK.png",
    opts: {
      saga: [ "TBS"],
	  minor: true
    }
  },
  {
    name: "Vinsmoke Ichiji",
    img: "https://i.imgur.com/0jhdhsp.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Vinsmoke Judge",
    img: "https://i.imgur.com/DfLk6WW.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Vinsmoke Niji",
    img: "https://i.imgur.com/sfeEm5f.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Vinsmoke Reiju",
    img: "https://i.imgur.com/E2ck7J8.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Vinsmoke Sora",
    img: "https://i.imgur.com/cCLW01I.png",
    opts: {
      saga: [ "WCIS"],
	  minor: true
    }
  },
  {
    name: "Vinsmoke Yonji",
    img: "https://i.imgur.com/WE7AZIR.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Viola",
    img: "https://i.imgur.com/RUFrPK2.png",
    opts: {
      saga: [ "DRS"]
    }
  },
  {
    name: "Vito",
    img: "https://i.imgur.com/Z4Snlk6.png",
    opts: {
      saga: [ "WCIS"]
    }
  },
  {
    name: "Wadatsumi",
    img: "https://i.imgur.com/J3OV2qa.png",
    opts: {
      saga: [ "FIS"],
	  minor: true
    }
  },
  {
    name: "Wanda",
    img: "https://i.imgur.com/8q3VC6S.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  },
  {
    name: "Wanze",
    img: "https://i.imgur.com/uL7l508.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Wapol",
    img: "https://i.imgur.com/Oc1b6JF.png",
    opts: {
      saga: [ "AS", "SIS", "WCIS", "WCS", "FS"]
    }
  },
  {
    name: "Who's-Who",
    img: "https://i.imgur.com/1Yc9aZo.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Wicca",
    img: "https://i.imgur.com/4lUw803.png",
    opts: {
      saga: [ "DRS"],
	  minor: true
    }
  },
  {
    name: "Woop Slap",
    img: "https://i.imgur.com/rRXkFNu.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Wyper",
    img: "https://i.imgur.com/IUcHC68.png",
    opts: {
      saga: [ "SIS"]
    }
  },
  {
    name: "X Drake",
    img: "https://i.imgur.com/Lg1dScX.png",
    opts: {
      saga: [ "SWS", "WCS"]
    }
  },
  {
    name: "Xiao",
    img: "https://i.imgur.com/n24Lv2S.jpeg",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Yama",
    img: "https://i.imgur.com/T38ZF0j.png",
    opts: {
      saga: [ "SIS"],
	  minor: true
    }
  },
  {
    name: "Yamato",
    img: "https://i.imgur.com/IFoRXxT.png",
    opts: {
      saga: [ "WCS"]
    }
  },
  {
    name: "Yasopp",
    img: "https://i.imgur.com/cxx68eu.png",
    opts: {
      saga: [ "EBS", "FS"]
    }
  },
  {
    name: "York",
    img: "https://i.imgur.com/2SGLXcl.png",
    opts: {
      saga: [ "FS"]
    }
  },
  {
    name: "Yosaku",
    img: "https://i.imgur.com/9jb9ZLZ.png",
    opts: {
      saga: [ "EBS"],
	  minor: true
    }
  },
  {
    name: "Z",
    img: "https://i.imgur.com/Yl0Yyx8.png",
    opts: {
      saga: [ ""],
	  movie: true
    }
  },
  {
    name: "Zala (Miss Doublefinger)",
    img: "https://i.imgur.com/Q2tKyTF.png",
    opts: {
      saga: [ "AS"]
    }
  },
  {
    name: "Zambai",
    img: "https://i.imgur.com/DJFwCJQ.png",
    opts: {
      saga: [ "W7S"]
    }
  },
  {
    name: "Zeff",
    img: "https://i.imgur.com/CLC8C5b.png",
    opts: {
      saga: [ "EBS"]
    }
  },
  {
    name: "Zeo",
    img: "https://i.imgur.com/FEa16z3.png",
    opts: {
      saga: [ "FIS"]
    }
  },
  {
    name: "Zeus",
    img: "https://i.imgur.com/TLjmcSt.png",
    opts: {
      saga: [ "WCIS", "WCS"]
    }
  }
];
