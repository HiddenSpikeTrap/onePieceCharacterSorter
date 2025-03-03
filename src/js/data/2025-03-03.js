dataSetVersion = "2025-03-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Saga",
    key: "saga",
    tooltip: "Check this to restrict to certain sagas.",
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
    name: "CHARACTER HERE",
    img: "0ra00WG.png",
    opts: {
      saga: [ "EBS"],
    }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    opts: {
      saga: [ "EBS"],
      minor: true
    }
  },
];
