'use strict';

exports.BattlePokedex = {
	/* For pokemon with two abilities use
	   abilities: {0: "Ability1Name", H: "Ability2Name"},
	   For a pokemon with three abilities use
	   abilities: {0: "Ability1Name", 1: "Ability2Name", H: "Ability3Name"}, */
	tubi: {
		num: 8001,
		species: "Tubi",
		types: ["Grass"],
		baseStats: {hp: 43, atk: 70, def: 31, spa: 55, spd: 55, spe: 64},
		abilities: {0: "Overgrow", H: "Moxie"},
	},
	shruber: {
		num: 8002,
		species: "Shrubber",
		types: ["Grass", "Ground"],
		baseStats: {hp: 55, atk: 85, def: 45, spa: 79, spd: 65, spe: 86},
		abilities: {0: "Overgrow", H: "Moxie"},
	},
	fungarai: {
		num: 8003,
		species: "Fungarai",
		types: ["Grass", "Ground"],
		baseStats: {hp: 70, atk: 125, def: 55, spa: 100, spd: 70, spe: 110},
		abilities: {0: "Overgrow", H: "Moxie"},
	},
	shelidillo: {
		num: 8004,
		species: "Shelidillo",
		types: ["Fire"],
		baseStats: {hp: 50, atk: 48, def: 72, spa: 52, spd: 52, spe: 44},
		abilities: {0: "Blaze", H: "Filter"},
	},
	metadillo: {
		num: 8005,
		species: "Metadillo",
		types: ["Fire", "Steel"],
		baseStats: {hp: 70, atk: 65, def: 95, spa: 75, spd: 60, spe: 50},
		abilities: {0: "Blaze", H: "Filter"},
	},
	steelicillo: {
		num: 8006,
		species: "Steelicillo",
		types: ["Fire", "Steel"],
		baseStats: {hp: 92, atk: 75, def: 110, spa: 110, spd: 75, spe: 68},
		abilities: {0: "Blaze", H: "Filter"},
	},
	linnual: {
		num: 8007,
		species: "Linnual",
		types: ["Water"],
		baseStats: {hp: 66, atk: 56, def: 56, spa: 48, spd: 56, spe: 36},
		abilities: {0: "Torrent", H: "Rain Dish"},
	},
	dontidahl: {
		num: 8008,
		species: "Donitidahl",
		types: ["Water", "Ice"],
		baseStats: {hp: 95, atk: 75, def: 70, spa: 65, spd: 70, spe: 40},
		abilities: {0: "Torrent", H: "Rain Dish"},
	},
	dorshellical: {
		num: 8009,
		species: "Dorshellical",
		types: ["Water", "Ice"],
		baseStats: {hp: 124, atk: 105, def: 90, spa: 80, spd: 85, spe: 46},
		abilities: {0: "Torrent", H: "Rain Dish"},
	},
	mantiprey: {
		num: 8010,
		species: "Mantiprey",
		types: ["Bug"],
		baseStats: {hp: 40, atk: 60, def: 30, spa: 20, spd: 30, spe: 60},
		abilities: {0: "Swarm", 1: "Hidden", H: "Unnerve"},
	},
	mantislash: {
		num: 8011,
		species: "Mantislash",
		types: ["Bug", "Dark"],
		baseStats: {hp: 45, atk: 95, def: 30, spa: 20, spd: 30, spe: 95},
		abilities: {0: "Swarm", 1: "Hidden", H: "Unnerve"},
	},
	mantisassin: {
		num: 8012,
		species: "Mantisassin",
		types: ["Bug", "Dark"],
		baseStats: {hp: 50, atk: 143, def: 35, spa: 25, spd: 35, spe: 132},
		abilities: {0: "Swarm", 1: "Hidden", H: "Unnerve"},
	},
	pixinga: {
		num: 8013,
		species: "Pixinga",
		types: ["Flying"],
		baseStats: {hp: 45, atk: 40, def: 40, spa: 55, spd: 46, spe: 60},
		abilities: {0: "Misty Surge", 1: "Tangled Feet", H: "Unaware"},
	},
	pixingillo: {
		num: 8014,
		species: "Pixingillo",
		types: ["Flying", "Fairy"],
		baseStats: {hp: 80, atk: 45, def: 50, spa: 80, spd: 65, spe: 70},
		abilities: {0: "Misty Surge", 1: "Tangled Feet", H: "Unaware"},
	},
	flamingairy: {
		num: 8015,
		species: "Flamingairy",
		types: ["Flying", "Fairy"],
		baseStats: {hp: 104, atk: 49, def: 78, spa: 90, spd: 100, spe: 79},
		abilities: {0: "Misty Surge", 1: "Tangled Feet", H: "Unaware"},
	},
	chipmorgue: {
		num: 8016,
		species: "Chipmorgue",
		types: ["Normal","Dark"],
		baseStats: {hp: 42, atk: 35, def: 54, spa: 25, spd: 62, spe: 53},
		abilities: {0: "Fur Coat", 1:"Justified", H: "Cheek Pouch"},
		heightm: 0.4,
		weightkg: 6.8,
		color: "Black",
		evos: "sciuridark",
		eggGroups: ["Field"],
	},
	sciuridark: {
		num: 8017,
		species: "Sciuridark",
		types: ["Normal"],
		baseStats: {hp: 85, atk: 70, def: 75, spa: 40, spd: 90, spe: 65},
		abilities: {0: "Fur Coat", 1:"Justified", H: "Cheek Pouch"},
		heightm: 0.6,
		weightkg: 8.8,
		color: "Black",
		prevo: "chipmorgue",
		evoLevel: 22,
		eggGroups: ["Field"],
	},
	denkikku: {
		num: 8018,
		species: "Denkikku",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 60, atk: 120, def: 60, spa: 40, spd: 55, spe: 90},
		abilities: {0: "Motor Drive", 1:"Reckless", H: "Quick Feet"},
		heightm: 0.5,
		weightkg: 6.7,
		color: "Yellow",
		eggGroups: ["Field"],
	},
	amphireeze: {
		num: 8019,
		species: "Amphireeze",
		types: ["Ice"],
		baseStats: {hp: 57, atk: 48, def: 65, spa: 75, spd: 75, spe: 70},
		abilities: {0: "Snow Warning", 1:"Refirgerate", H: "Adaptability"},
		heightm: 0.7,
		weightkg: 10.3,
		color: "Blue",
		evos: "froxic",
		eggGroups: ["Field", "Water 1"],
	},
	froxic: {
		num: 8020,
		species: "Froxic",
		types: ["Ice", "Poison"],
		baseStats: {hp: 78, atk: 58, def: 77, spa: 105, spd: 90, spe: 101},
		abilities: {0: "Snow Warning", 1:"Refirgerate", H: "Adaptability"},
		heightm: 1.1,
		weightkg: 21.6,
		color: "Blue",
		prevo: "amphireeze",
		evoLevel: 32,
		eggGroups: ["Field", "Water 1"],
	},
	speikhog: {
		num: 8021,
		species: "Spiekhog",
		types: ["Normal", "Steel"],
		baseStats: {hp: 45, atk: 70, def: 50, spa: 36, spd: 30, spe: 25},
		abilities: {0: "Iron Barbs", 1:"Prey Stinging", H: "Bullet Proof"},
		heightm: 0.5,
		weightkg: 28.3,
		color: "Gray",
		evos: "corupine",
		eggGroups: ["Field", "Mineral"],
	},
	corupine: {
		num: 8022,
		species: "Corupine",
		types: ["Normal", "Steel"],
		baseStats: {hp: 95, atk: 100, def: 137, spa: 40, spd: 67, spe: 51},
		abilities: {0: "Iron Barbs", 1:"Prey Stinging", H: "Bullet Proof"},
		heightm: 0.8,
		weightkg: 54.6,
		color: "Gray",
		prevo: "spiekhog",
		evoLevel: 28,
		eggGroups: ["Field", "Mineral"],
	},
	sparkideer: {
		num: 8023,
		species: "Sparkideer",
		types: ["Fire"],
		baseStats: {hp: 60, atk: 80, def: 60, spa: 50, spd: 50, spe: 90},
		abilities: {0: "Sheer Force", 1:"Anger Point", H: "Serene Grace"},
		heightm: 1.3,
		weightkg: 38.5,
		color: "Red",
		evos: "Pyromoose",
		eggGroups: ["Field"],
	},
	pyromoose: {
		num: 8024,
		species: "Pyromoose",
		types: ["Fire"],
		baseStats: {hp: 74, atk: 116, def: 60, spa: 90, spd: 60, spe: 127},
		abilities: {0: "Sheer Force", 1:"Anger Point", H: "Serene Grace"},
		heightm: 2.1,
		weightkg: 47.9,
		color: "Red",
		prevos: "Sparkideer",
		evoLevel: 38,
		eggGroups: ["Field"],
	},
	peasilk: {
		num: 8025,
		species: "Peasilk",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 20, def: 30, spa: 35, spd: 30, spe: 30},
		abilities: {0: "Gluttony", H: "Shield Dust"},
		heightm: 0.4,
		weightkg: 1.9,
		color: "Green",
		evos: "silprince",
		eggGroups: ["Bug"],
	},
	siprince: {
		num: 8026,
		species: "Silprince",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 15, def: 55, spa: 35, spd: 60, spe: 20},
		abilities: {0: "Shed Skin", H: "Flame Body"},
		heightm: 0.6,
		weightkg: 3.9,
		color: "Green",
		prevo: "peasilk",
		evos: "marikaiser",
		evoLevel: 8,
		eggGroups: ["Bug"],
	},
	marikaiser: {
		num: 8027,
		species: "Marikaiser",
		types: ["Bug", "Fire"],
		baseStats: {hp: 64, atk: 30, def: 59, spa: 91, spd: 59, spe: 110},
		abilities: {0: "Blaze", H: "Flash Fire"},
		 heightm: 0.8,
		weightkg: 8.8,
		color: "Red",
		prevo: "peasilk",
		evoLevel: 12,
		eggGroups: ["Bug"],
	},
	scroot: {
		num: 8028,
		species: "Scroot",
		types: ["Grass"],
		baseStats: {hp: 60, atk: 66, def: 60, spa: 34, spd: 40, spe: 40},
		abilities: {0: "Hyper Cutter", 1: "Immunity", H: "Tough Claws"},
		heightm: 0.5,
		weightkg: 9.8,
		color: "Green",
		evos: "marikaiser",
		eggGroups: ["Bug"],
	},
	graspion: {
		num: 8029,
		species: "Graspion",
		types: ["Grass", "Rock"],
		baseStats: {hp: 80, atk: 86, def: 80, spa: 54, spd: 50, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Immunity", H: "Tough Claws"},
		heightm: 1.1,
		weightkg: 35.6,
		color: "Green",
		prevo: "scroot",
		evos: "goliathorn",
		evoLevel: 16,
		eggGroups: ["Bug", "Mineral"],
	 },
	 goliathorn: {
		 num: 8030,
		 species: "Goliathorn",
		 types: ["Grass", "Rock"],
		 baseStats: {hp: 105, atk: 116, def: 100, spa: 72, spd: 78, spe: 60},
		 abilities: {0: "Hyper Cutter", 1: "Immunity", H: "Tough Claws"},
		 heightm: 2.4,
		 weightkg: 139.2,
		 color: "Brown",
		 prevo: "graspion",
		 evoLevel: 32,
		 eggGroups: ["Bug", "Mineral"],
	 },
	aquailaby: {
		num: 8031,
		species: "Aquailaby",
		types: ["Water", "Flying"],
		baseStats: {hp: 42, atk: 60, def: 40, spa: 60, spd: 48, spe: 70},
		abilities: {0: "Big Pecks", 1: "Anticipation", H: "Cloud Nine"},
		heightm: 0.4,
		weightkg: 3.8,
		color: "Blue",
		evos: "flytide",
		eggGroups: ["Flying"],
	},
	flytide: {
		num: 8032,
		species: "Flytide",
		types: ["Water", "Flying"],
		baseStats: {hp: 57, atk: 80, def: 50, spa: 80, spd: 58, spe: 95},
		abilities: {0: "Big Pecks", 1: "Hydration", H: "Cloud Nine"},
		heightm: 0.9,
		weightkg: 23.8,
		color: "Blue",
		prevo: "aquailaby",
		evos: "hydraptor",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	hydraptor: {
		num: 8033,
		species: "Hydraptor",
		types: ["Water", "Flying"],
		baseStats: {hp: 71, atk: 90, def: 77, spa: 90, spd: 82, spe: 116},
		abilities: {0: "Drizzle", 1: "Skill Link", H: "Cloud Nine"},
		heightm: 1.8,
		weightkg: 41.4,
		color: "Blue",
		prevo: "flytide",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	volpup: {
		num: 8034,
		species: "Volpup",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 70, def: 60, spa: 75, spd: 60, spe: 75},
		abilities: {0: "Pickup", 1: "Run Away", H: "Volt Absorb"},
		heightm: 0.8,
		weightkg: 20.2,
		color: "Yellow",
		evos: "Dracolyte",
		eggGroups: ["Field"],
	},
	dracolyte: {
		num: 8035,
		species: "Dracolyte",
		types: ["Electric", "Dragon"],
		baseStats: {hp: 90, atk: 105, def: 80, spa: 115, spd: 90, spe: 75},
		abilities: {0: "Unburden", 1: "Levitate", H: "Volt Absorb"},
		heightm: 2.1,
		weightkg: 122.6,
		color: "Yellow",
		prevo: "Volpup",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	zaperal: {
		num: 8036,
		species: "Zaperal",
		types: ["Rock", "Electric"],
		baseStats: {hp: 55, atk: 60, def: 80, spa: 125, spd: 60, spe: 100},
		abilities: {0: "Speed Boost", 1: "Shell Armor", H: "Regenerator"},
		heightm: 0.8,
		weightkg: 55.7,
		color: "Brown",
		eggGroups: ["Mineral"],
	},
	crystibi: {
		num: 8037,
		species: "Crystibi",
		types: ["Psychic", "Rock"],
		baseStats: {hp: 55, atk: 10, def: 100, spa: 40, spd: 100, spe: 10},
		abilities: {0: "Forewarn", 1: "Trace", H: "Illusion"},
		heightm: 0.3,
		weightkg: 15.7,
		color: "Purple",
		evos: "Crystibal",
		eggGroups: ["Mineral", "Amorphous"],
	},
	crystibal: {
		num: 8038,
		species: "Crystibal",
		types: ["Psychic", "Rock"],
		baseStats: {hp: 95, atk: 20, def: 120, spa: 50, spd: 120, spe: 20},
		abilities: {0: "Forewarn", 1: "Trace", H: "Illusion"},
		heightm: 0.4,
		weightkg: 35.7,
		color: "Purple",
		prevo: "Crystibi",
		evoLevel: 38,
		eggGroups: ["Mineral", "Amorphous"],
	},
	deserunner: {
		num: 8039,
		species: "Deserunner",
		types: ["Ground"],
		baseStats: {hp: 50, atk: 55, def: 45, spa: 35, spd: 45, spe: 85},
		abilities: {0: "Speed Boost", 1: "Big Pecks", H: "Sand Rush"},
		heightm: 0.4,
		weightkg: 5.7,
		color: "Brown",
		evos: "Dashoo",
		eggGroups: ["Flying", "Field"],
	},
	dashoo: {
		num: 8040,
		species: "Dashoo",
		types: ["Ground"],
		baseStats: {hp: 65, atk: 75, def: 55, spa: 55, spd: 65, spe: 100},
		abilities: {0: "Speed Boost", 1: "Big Pecks", H: "Sand Rush"},
		heightm: 0.8,
		weightkg: 11.7,
		color: "Brown",
		evos: "Nemorathon",
		prevo: "Deserunner",
		evoLevel: 24,
		eggGroups: ["Flying", "Field"],
	},
	nemoarthon: {
		num: 8041,
		species: "Nemorathon",
		types: ["Ground"],
		baseStats: {hp: 75, atk: 90, def: 65, spa: 60, spd: 75, spe: 130},
		abilities: {0: "Speed Boost", 1: "Sniper", H: "Sand Rush"},
		heightm: 1.1,
		weightkg: 14.3,
		color: "Brown",
		evo: "Dashoo",
		evoLevel: 41,
		eggGroups: ["Flying", "Field"],
	},
	seedocyte: {
		num: 8042,
		species: "Seedocyte",
		types: ["Poison"],
		baseStats: {hp: 110, atk: 45, def: 25, spa: 55, spd: 35, spe: 85},
		abilities: {0: "Regenerator", 1: "Prey Stinging", H: "Adaptability"},
		heightm: 1.1,
		weightkg: 19.6,
		color: "Green",
		evos: ["Stingulyp", "Medusting", "Stingoral", "Sthyndra"],
		eggGroups: ["Mineral", "Water 3"],
	},
	stingulyp: {
		num: 8043,
		species: "Stingulyp",
		types: ["Poison", "Electric"],
		baseStats: {hp: 130, atk: 135, def: 70, spa: 65, spd: 50, spe: 85},
		abilities: {0: "Regenerator", 1: "Prey Stinging", H: "Sticky Hold"},
		heightm: 1.4,
		weightkg: 20.3,
		color: "Yellow",
		prevo: "Seedocyte",
		eggGroups: ["Mineral", "Water 3"],
	},
	medusting: {
		num: 8044,
		species: "Medusting",
		types: ["Poison", "Water"],
		baseStats: {hp: 130, atk: 65, def: 50, spa: 135, spd: 85, spe: 70},
		abilities: {0: "Regenerator", 1: "Prey Stinging", H: "Storm Drain"},
		heightm: 0.7,
		weightkg: 20.3,
		color: "Blue",
		prevo: "Seedocyte",
		eggGroups: ["Mineral", "Water 3"],
	},
	stingoral: {
		num: 8045,
		species: "Stingoral",
		types: ["Poison", "Rock"],
		baseStats: {hp: 130, atk: 85, def: 135, spa: 65, spd: 70, spe: 50},
		abilities: {0: "Solid Rock", 1: "Prey Stinging", H: "Water Absorb"},
		heightm: 3.8,
		weightkg: 130.3,
		color: "Brown",
		prevo: "Seedocyte",
		eggGroups: ["Mineral", "Water 3"],
	},
	sthyndra: {
		num: 8046,
		species: "Sthyndra",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 130, atk: 65, def: 70, spa: 85, spd: 135, spe: 50},
		abilities: {0: "Regenerator", 1: "Prey Stinging", H: "Suction Cups"},
		heightm: 1.0,
		weightkg: 30.3,
		color: "Purple",
		prevo: "Seedocyte",
		eggGroups: ["Mineral", "Water 3"],
	},
	/* Mega Snorlax */
	snorlax: {
		inherit: true,
		abilities: {0: "Immunity", 1: "Thick Fat", H: "Gluttony"},
		otherFormes: ["snorlaxmega"],
	},
	snorlaxmega: {
		num: 143,
		species: "Snorlax-Mega",
		baseSpecies: "Snorlax",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal"],
		baseStats: {hp: 160, atk: 135, def: 135, spa: 65, spd: 135, spe: 10},
		abilities: {0: "Comatose"},
		heightm: 2.1,
		weightkg: 460,
		color: "Black",
		prevo: "munchlax",
		evoLevel: 1,
		eggGroups: ["Monster"],
	},
	scyther: {
		num: 123,
		species: "Scyther",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105},
		abilities: {0: "Swarm", 1: "Technician", H: "Steadfast"},
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["scizor","knyffe"],
		eggGroups: ["Bug"],
	},
	knyffe: {
		num: 8047,
		species: "Knyffe",
		types: ["Bug", "Dark"],
		baseStats: {hp: 70, atk: 130, def: 70, spa: 65, spd: 60, spe: 125},
		abilities: {0: "Quick Claws", H: "Rusty Edges"},
		eggGroups: ["Bug"],
	},
	knyffemega: {
		num: 8047,
		species: "Knyffe-Mega",
		baseSpecies: "Knyffe",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug","Dark"],
		baseStats: {hp: 70, atk: 170, def: 90, spa: 75, spd: 80, spe: 175},
		abilities: {0: "Bladed Defences"},
		prevo: "Scyther",
		evoLevel: 36,
		eggGroups: ["Bug"],
	},
	revenya: {
		num: 8128,
		species: "Revenya",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 50, atk: 60, def: 70, spa: 30, spd: 60, spe: 90},
		abilities: {0: "Unstable Molecules", 1: "Cute Charm", H: "Poison Heal"},
		evos: "nyantum"
	},
	nyantum: {
		num: 8129,
		species: "Nyantum",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 70, atk: 85, def: 115, spa: 60, spd: 105, spe: 110},
		abilities: {0: "Unstable Molecules", 1: "Cute Charm", H: "Poison Heal"},
		prevo: "revenya"
	},
	nimbice: {
		num: 8128,
		species: "Nimbice",
		types: ["Ice", "Water"],
		baseStats: {hp: 100, atk: 50, def: 70, spa: 60, spd: 80, spe: 30},
		abilities: {0: "Snow Warning", H: "Filter"},
		evos: "icicloud"
	},
	icicloud: {
		num: 8128,
		species: "Icicloud",
		types: ["Ice", "Water"],
		baseStats: {hp: 135, atk: 70, def: 95, spa: 85, spd: 110, spe: 45},
		abilities: {0: "Snow Warning", H: "Filter"},
		prevo: "nimbice"
	},
	armymph: {
		num: 8127,
		species: "Armymph",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 40, atk: 64, def: 84, spa: 30, spd: 55, spe: 77},
		abilities: {0: "Sand Rush", 1: "Burrow", H: "Quick Claws"},
		heightm: 0.2,
		weightkg: 15.8,
		color: "Pink",
		evos: "burrowxie",
		eggGroups: ["field", "fairy"],
	},
	burrowxie: {
		num: 8126,
		species: "Burrowxie",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 50, atk: 84, def: 141, spa: 40, spd: 95, spe: 117},
		abilities: {0: "Sand Rush", 1: "Burrow", H: "Quick Claws"},
		heightm: 0.3,
		weightkg: 31.8,
		color: "Pink",
		prevo: "armymph",
		eggGroups: ["field", "fairy"],
	},
	pixflakeeast: {
		num: 8125,
		species: "Pixflake-East",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 60, atk: 65, def: 40, spa: 120, spd: 40, spe: 130},
		abilities: {0: "Levitate", 1: "Snow Cloak", H: "Snow Warning"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Blue",
		eggGroups: ["fairy"],
	},
	pixflakwest: {
		num: 8124,
		species: "Pixflake-West",
		types: ["Ice", "Fairy"],
		baseStats: {hp: 90, atk: 85, def: 110, spa: 30, spd: 110, spe: 30},
		abilities: {0: "Levitate", 1: "Ice Body", H: "Snow Warning"},
		heightm: 0.2,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["fairy"],
	},
	scarit: {
		num: 8123,
		species: "Scarit",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 110, atk: 40, def: 80, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Scarecrow"},
		heightm: 0.9,
		weightkg: 11.3,
		color: "Brown",
		eggGroups: ["Amourphous"],
};
