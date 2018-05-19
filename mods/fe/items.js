'use strict';

exports.BattleItems = {
    "swampamarite": {
        id: "swampamarite",
        name: "swampamarite",
        spritenum: 612,

        megaStone: "Swampamar-Mega",
        megaEvolves: "Swampamar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swampamar, this item allows it to Mega Evolve in battle.",
    },
    "gyaroticite": {
        id: "gyaroticite",
        name: "gyaroticite",
        spritenum: 589,

        megaStone: "Gyarotic-Mega",
        megaEvolves: "Gyarotic",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyarotic, this item allows it to Mega Evolve in battle.",
    },
    "pangleyeite": {
        id: "pangleyeite",
        name: "pangleyeite",
        spritenum: 614,

        megaStone: "Pangleye-Mega",
        megaEvolves: "Pangleye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pangleye, this item allows it to Mega Evolve in battle.",
    },
    "garchadosyite": {
        id: "garchadosyite",
        name: "garchadosyite",
        spritenum: 589,

        megaStone: "Garchados-Mega-Y",
        megaEvolves: "Garchados",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garchadosy, this item allows it to Mega Evolve in battle.",
    },
    "garchadoscite": {
        id: "garchadoscite",
        name: "garchadoscite",
        spritenum: 589,

        megaStone: "Garchados-Mega-C",
        megaEvolves: "Garchados",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garchadosc, this item allows it to Mega Evolve in battle.",
    },
    "gargatrite": {
        id: "gargatrite",
        name: "gargatrite",
        spritenum: 589,

        megaStone: "Gargatr-Mega",
        megaEvolves: "Gargatr",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gargatr, this item allows it to Mega Evolve in battle.",
    },
    "cofagreelixite": {
        id: "cofagreelixite",
        name: "cofagreelixite",
        spritenum: 621,
		 
        megaStone: "Cofagreelix-Mega",
        megaEvolves: "Cofagreelix",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a cofagreelix, this item allows it to Mega Evolve in battle.",
    },
    "archedactylite": {
        id: "archedactylite",
        name: "archedactylite",
        spritenum: 577,
		 
        megaStone: "Archedactyl-Mega",
        megaEvolves: "Archedactyl",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a archedactyl, this item allows it to Mega Evolve in battle.",
    },
    "weasolite": {
        id: "weasolite",
        name: "weasolite",
        spritenum: 576,
		 
        megaStone: "Weasol-Mega",
        megaEvolves: "Weasol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a weasol, this item allows it to Mega Evolve in battle.",
    },
    "tyranichomptite": {
        id: "tyranichomptite",
        name: "tyranichomptite",
        spritenum: 607,

        megaStone: "Tyranichomp-Mega-T",
        megaEvolves: "Tyranichomp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranichompt, this item allows it to Mega Evolve in battle.",
    },
    "tyranichompgite": {
        id: "tyranichompgite",
        name: "tyranichompgite",
        spritenum: 589,

        megaStone: "Tyranichomp-Mega-G",
        megaEvolves: "Tyranichomp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranichompg, this item allows it to Mega Evolve in battle.",
    },
    "railieite": {
        id: "railieite",
        name: "railieite",
        spritenum: 623,

        megaStone: "Railie-Mega",
        megaEvolves: "Railie",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a railie, this item allows it to Mega Evolve in battle.",
    },
    "charatosyite": {
        id: "charatosyite",
        name: "charatosyite",
        spritenum: 586,

        megaStone: "Charatos-Mega-Y",
        megaEvolves: "Charatos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosy, this item allows it to Mega Evolve in battle.",
    },
    "charatosxite": {
        id: "charatosxite",
        name: "charatosxite",
        spritenum: 585,

        megaStone: "Charatos-Mega-X",
        megaEvolves: "Charatos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosx, this item allows it to Mega Evolve in battle.",
    },
    "charatosgite": {
        id: "charatosgite",
        name: "charatosgite",
        spritenum: 589,

        megaStone: "Charatos-Mega-G",
        megaEvolves: "Charatos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a charatosg, this item allows it to Mega Evolve in battle.",
    },
    "aggrosaurvite": {
        id: "aggrosaurvite",
        name: "aggrosaurvite",
        spritenum: 608,

        megaStone: "Aggrosaur-Mega-V",
        megaEvolves: "Aggrosaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aggrosaurv, this item allows it to Mega Evolve in battle.",
    },
    "aggrosauraite": {
        id: "aggrosauraite",
        name: "aggrosauraite",
        spritenum: 578,

        megaStone: "Aggrosaur-Mega-A",
        megaEvolves: "Aggrosaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aggrosaura, this item allows it to Mega Evolve in battle.",
    },
    "blastinjaite": {
        id: "blastinjaite",
        name: "blastinjaite",
        spritenum: 583,

        megaStone: "Blastinja-Mega",
        megaEvolves: "Blastinja",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blastinja, this item allows it to Mega Evolve in battle.",
    },
    "skariaite": {
        id: "skariaite",
        name: "skariaite",
        spritenum: 615,

        megaStone: "Skaria-Mega",
        megaEvolves: "Skaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a skaria, this item allows it to Mega Evolve in battle.",
    },
    "magmozamite": {
        id: "magmozamite",
        name: "magmozamite",
        spritenum: 579,

        megaStone: "Magmozam-Mega",
        megaEvolves: "Magmozam",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a magmozam, this item allows it to Mega Evolve in battle.",
    },
    "glakissite": {
        id: "glakissite",
        name: "glakissite",
        spritenum: 623,

        megaStone: "Glakiss-Mega",
        megaEvolves: "Glakiss",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a glakiss, this item allows it to Mega Evolve in battle.",
    },
    "sharpedossite": {
        id: "sharpedossite",
        name: "sharpedossite",
        spritenum: 619,

        megaStone: "Sharpedos-Mega-S",
        megaEvolves: "Sharpedos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sharpedoss, this item allows it to Mega Evolve in battle.",
    },
    "sharpedosgite": {
        id: "sharpedosgite",
        name: "sharpedosgite",
        spritenum: 589,

        megaStone: "Sharpedos-Mega-G",
        megaEvolves: "Sharpedos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sharpedosg, this item allows it to Mega Evolve in battle.",
    },
    "pidgetotite": {
        id: "pidgetotite",
        name: "pidgetotite",
        spritenum: 622,

        megaStone: "Pidgetot-Mega",
        megaEvolves: "Pidgetot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pidgetot, this item allows it to Mega Evolve in battle.",
    },
    "klazorite": {
        id: "klazorite",
        name: "klazorite",
        spritenum: 605,

        megaStone: "Klazor-Mega",
        megaEvolves: "Klazor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a klazor, this item allows it to Mega Evolve in battle.",
    },
    "pidgemieite": {
        id: "pidgemieite",
        name: "pidgemieite",
        spritenum: 622,

        megaStone: "Pidgemie-Mega",
        megaEvolves: "Pidgemie",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a pidgemie, this item allows it to Mega Evolve in battle.",
    },
    "shaymizardxite": {
        id: "shaymizardxite",
        name: "shaymizardxite",
        spritenum: 585,

        megaStone: "Shaymizard-Mega-X",
        megaEvolves: "Shaymizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shaymizardx, this item allows it to Mega Evolve in battle.",
    },
    "shaymizardyite": {
        id: "shaymizardyite",
        name: "shaymizardyite",
        spritenum: 586,

        megaStone: "Shaymizard-Mega-Y",
        megaEvolves: "Shaymizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shaymizardy, this item allows it to Mega Evolve in battle.",
    },
    "hazardxite": {
        id: "hazardxite",
        name: "hazardxite",
        spritenum: 585,

        megaStone: "Hazard-Mega-X",
        megaEvolves: "Hazard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hazardx, this item allows it to Mega Evolve in battle.",
    },
    "hazardyite": {
        id: "hazardyite",
        name: "hazardyite",
        spritenum: 586,

        megaStone: "Hazard-Mega-Y",
        megaEvolves: "Hazard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hazardy, this item allows it to Mega Evolve in battle.",
    },
    "jellivoirite": {
        id: "jellivoirite",
        name: "jellivoirite",
        spritenum: 587,

        megaStone: "Jellivoir-Mega",
        megaEvolves: "Jellivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a jellivoir, this item allows it to Mega Evolve in battle.",
    },
    "metabatite": {
        id: "metabatite",
        name: "metabatite",
        spritenum: 618,

        megaStone: "Metabat-Mega",
        megaEvolves: "Metabat",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metabat, this item allows it to Mega Evolve in battle.",
    },
    "dartiosite": {
        id: "dartiosite",
        name: "dartiosite",
        spritenum: 630,

        megaStone: "Dartios-Mega",
        megaEvolves: "Dartios",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dartios, this item allows it to Mega Evolve in battle.",
    },
    "banegrossxite": {
        id: "banegrossxite",
        name: "banegrossxite",
        spritenum: 618,

        megaStone: "Banegross-Mega-X",
        megaEvolves: "Banegross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banegrossx, this item allows it to Mega Evolve in battle.",
    },
    "banegrossyite": {
        id: "banegrossyite",
        name: "banegrossyite",
        spritenum: 582,

        megaStone: "Banegross-Mega-Y",
        megaEvolves: "Banegross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banegrossy, this item allows it to Mega Evolve in battle.",
    },
    "herasirhite": {
        id: "herasirhite",
        name: "herasirhite",
        spritenum: 590,

        megaStone: "Herasir-Mega-H",
        megaEvolves: "Herasir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a herasirh, this item allows it to Mega Evolve in battle.",
    },
    "herasirpite": {
        id: "herasirpite",
        name: "herasirpite",
        spritenum: 602,

        megaStone: "Herasir-Mega-P",
        megaEvolves: "Herasir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a herasirp, this item allows it to Mega Evolve in battle.",
    },
    "mismagivoirite": {
        id: "mismagivoirite",
        name: "mismagivoirite",
        spritenum: 587,

        megaStone: "Mismagivoir-Mega",
        megaEvolves: "Mismagivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mismagivoir, this item allows it to Mega Evolve in battle.",
    },
    "manaite": {
        id: "manaite",
        name: "manaite",
        spritenum: 596,

        megaStone: "Mana-Mega",
        megaEvolves: "Mana",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mana, this item allows it to Mega Evolve in battle.",
    },
    "swankite": {
        id: "swankite",
        name: "swankite",
        spritenum: 612,
		 
        megaStone: "Swank-Mega",
        megaEvolves: "Swank",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swank, this item allows it to Mega Evolve in battle.",
    },
    "sablemimezite": {
        id: "sablemimezite",
        name: "sablemimezite",
        spritenum: 614,

        megaStone: "Sablemimez-Mega",
        megaEvolves: "Sablemimez",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sablemimez, this item allows it to Mega Evolve in battle.",
    },
    "houndlionite": {
        id: "houndlionite",
        name: "houndlionite",
        spritenum: 591,

        megaStone: "Houndlion-Mega",
        megaEvolves: "Houndlion",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndlion, this item allows it to Mega Evolve in battle.",
    },
    "loppeyexite": {
        id: "loppeyexite",
        name: "loppeyexite",
        spritenum: 614,

        megaStone: "Loppeye-Mega-X",
        megaEvolves: "Loppeye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a loppeyex, this item allows it to Mega Evolve in battle.",
    },
    "loppeyeyite": {
        id: "loppeyeyite",
        name: "loppeyeyite",
        spritenum: 626,

        megaStone: "Loppeye-Mega-Y",
        megaEvolves: "Loppeye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a loppeyey, this item allows it to Mega Evolve in battle.",
    },
    "peatranite": {
        id: "peatranite",
        name: "peatranite",
        spritenum: 622,

        megaStone: "Peatran-Mega",
        megaEvolves: "Peatran",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a peatran, this item allows it to Mega Evolve in battle.",
    },
    "manatarite": {
        id: "manatarite",
        name: "manatarite",
        spritenum: 607,

        megaStone: "Manatar-Mega",
        megaEvolves: "Manatar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a manatar, this item allows it to Mega Evolve in battle.",
    },
    "aurotoiseite": {
        id: "aurotoiseite",
        name: "aurotoiseite",
        spritenum: 583,

        megaStone: "Aurotoise-Mega",
        megaEvolves: "Aurotoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aurotoise, this item allows it to Mega Evolve in battle.",
    },
    "metsirmite": {
        id: "metsirmite",
        name: "metsirmite",
        spritenum: 618,

        megaStone: "Metsir-Mega-M",
        megaEvolves: "Metsir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metsirm, this item allows it to Mega Evolve in battle.",
    },
    "metsirpite": {
        id: "metsirpite",
        name: "metsirpite",
        spritenum: 602,

        megaStone: "Metsir-Mega-P",
        megaEvolves: "metsir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metsirp, this item allows it to Mega Evolve in battle.",
    },
    "houdiniite": {
        id: "houdiniite",
        name: "houdiniite",
        spritenum: 617,

        megaStone: "Houdini-Mega",
        megaEvolves: "Houdini",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houdini, this item allows it to Mega Evolve in battle.",
    },
    "shotite": {
        id: "shotite",
        name: "shotite",
        spritenum: 622,
		 
        megaStone: "Shot-Mega",
        megaEvolves: "Shot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a shot, this item allows it to Mega Evolve in battle.",
    },
    "mampharosmite": {
        id: "mampharosmite",
        name: "mampharosmite",
        spritenum: 596,

        megaStone: "Mampharos-Mega-M",
        megaEvolves: "Mampharos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mampharosm, this item allows it to Mega Evolve in battle.",
    },
    "mampharosaite": {
        id: "mampharosaite",
        name: "mampharosaite",
        spritenum: 580,

        megaStone: "Mampharos-Mega-A",
        megaEvolves: "Mampharos",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mampharosa, this item allows it to Mega Evolve in battle.",
    },
    "entariaite": {
        id: "entariaite",
        name: "entariaite",
        spritenum: 615,
		 
        megaStone: "Entaria-Mega",
        megaEvolves: "Entaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a entaria, this item allows it to Mega Evolve in battle.",
    },
    "blasterainite": {
        id: "blasterainite",
        name: "blasterainite",
        spritenum: 583,

        megaStone: "Blasterain-Mega",
        megaEvolves: "Blasterain",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blasterain, this item allows it to Mega Evolve in battle.",
    },
    "dianbroite": {
        id: "dianbroite",
        name: "dianbroite",
        spritenum: 620,

        megaStone: "Dianbro-Mega",
        megaEvolves: "Dianbro",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dianbro, this item allows it to Mega Evolve in battle.",
    },
    "lagiite": {
        id: "lagiite",
        name: "lagiite",
        spritenum: 623,

        megaStone: "Lag-I-Mega",
        megaEvolves: "Lag-I",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lagi, this item allows it to Mega Evolve in battle.",
    },
    "lopunniniite": {
        id: "lopunniniite",
        name: "lopunniniite",
        spritenum: 626,
		 
        megaStone: "Lopunnini-Mega",
        megaEvolves: "Lopunnini",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lopunnini, this item allows it to Mega Evolve in battle.",
    },
    "aeroraptorite": {
        id: "aeroraptorite",
        name: "aeroraptorite",
        spritenum: 577,
		 
        megaStone: "Aeroraptor-Mega",
        megaEvolves: "Aeroraptor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aeroraptor, this item allows it to Mega Evolve in battle.",
    },
    "lucasollite": {
        id: "lucasollite",
        name: "lucasollite",
        spritenum: 594,
		 
        megaStone: "Lucasol-Mega-L",
        megaEvolves: "Lucasol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucasoll, this item allows it to Mega Evolve in battle.",
    },
    "lucasolaite": {
        id: "lucasolaite",
        name: "lucasolaite",
        spritenum: 576,

        megaStone: "Lucasol-Mega-A",
        megaEvolves: "Lucasol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucasola, this item allows it to Mega Evolve in battle.",
    },
    "sceptilusaurxite": {
        id: "sceptilusaurxite",
        name: "sceptilusaurxite",
        spritenum: 608,

        megaStone: "Sceptilusaur-Mega-X",
        megaEvolves: "Sceptilusaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptilusaurx, this item allows it to Mega Evolve in battle.",
    },
    "sceptilusauryite": {
        id: "sceptilusauryite",
        name: "sceptilusauryite",
        spritenum: 613,

        megaStone: "Sceptilusaur-Mega-Y",
        megaEvolves: "Sceptilusaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptilusaury, this item allows it to Mega Evolve in battle.",
    },
    "houndectricmite": {
        id: "houndectricmite",
        name: "houndectricmite",
        spritenum: 596,

        megaStone: "Houndectric-Mega-M",
        megaEvolves: "Houndectric",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndectricm, this item allows it to Mega Evolve in battle.",
    },
    "houndectrichite": {
        id: "houndectrichite",
        name: "houndectrichite",
        spritenum: 591,

        megaStone: "Houndectric-Mega-H",
        megaEvolves: "Houndectric",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a houndectrich, this item allows it to Mega Evolve in battle.",
    },
    "Exdoomite": {
        id: "exdoomite",
        name: "exdoomite",
        spritenum: 591,

        megaStone: "Exdoom-Mega",
        megaEvolves: "Exdoom",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a exdoom, this item allows it to Mega Evolve in battle.",
    },
    "gyaramencesite": {
        id: "gyaramencesite",
        name: "gyaramencesite",
        spritenum: 627,
		 
        megaStone: "Gyaramence-Mega-S",
        megaEvolves: "Gyaramence",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyaramences, this item allows it to Mega Evolve in battle.",
    },
    "gyaramencegite": {
        id: "gyaramencegite",
        name: "gyaramencegite",
        spritenum: 589,
		 
        megaStone: "Gyaramence-Mega-G",
        megaEvolves: "Gyaramence",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gyaramenceg, this item allows it to Mega Evolve in battle.",
    },
    "thunderblastite": {
        id: "thunderblastite",
        name: "thunderblastite",
        spritenum: 583,
		 
        megaStone: "Thunderblast-Mega",
        megaEvolves: "Thunderblast",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a thunderblast, this item allows it to Mega Evolve in battle.",
    },
    "zaggronite": {
        id: "zaggronite",
        name: "zaggronite",
        spritenum: 578,
		 
        megaStone: "Zaggron-Mega",
        megaEvolves: "Zaggron",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a zaggron, this item allows it to Mega Evolve in battle.",
    },
    "eruptionite": {
        id: "eruptionite",
        name: "eruptionite",
        spritenum: 625,
		 
        megaStone: "Eruption-Mega",
        megaEvolves: "Eruption",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a eruption, this item allows it to Mega Evolve in battle.",
    },
    "sickleite": {
        id: "sickleite",
        name: "sickleite",
        spritenum: 605,

        megaStone: "Sickle-Mega",
        megaEvolves: "Sickle",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sickle, this item allows it to Mega Evolve in battle.",
    },
    "darkchompite": {
        id: "darkchompite",
        name: "darkchompite",
        spritenum: 589,

        megaStone: "Darkchomp-Mega",
        megaEvolves: "Darkchomp",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a darkchomp, this item allows it to Mega Evolve in battle.",
    },
    "crustlecrossite": {
        id: "crustlecrossite",
        name: "crustlecrossite",
        spritenum: 590,

        megaStone: "Crustlecross-Mega",
        megaEvolves: "Crustlecross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crustlecross, this item allows it to Mega Evolve in battle.",
    },
    "avaizardxite": {
        id: "avaizardxite",
        name: "avaizardxite",
        spritenum: 585,
		 
        megaStone: "Avaizard-Mega-X",
        megaEvolves: "avaizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a avaizardx, this item allows it to Mega Evolve in battle.",
    },
    "avaizardyite": {
        id: "avaizardyite",
        name: "avaizardyite",
        spritenum: 586,
		 
        megaStone: "Avaizard-Mega-Y",
        megaEvolves: "Avaizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a avaizardy, this item allows it to Mega Evolve in battle.",
    },
    "alakariolite": {
        id: "alakariolite",
        name: "alakariolite",
        spritenum: 594,
		 
        megaStone: "Alakario-Mega-L",
        megaEvolves: "Alakario",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alakariol, this item allows it to Mega Evolve in battle.",
    },
    "alakarioaite": {
        id: "alakarioaite",
        name: "alakarioaite",
        spritenum: 579,
		 
        megaStone: "Alakario-Mega-A",
        megaEvolves: "Alakario",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alakarioa, this item allows it to Mega Evolve in battle.",
    },
    "cazantorite": {
        id: "cazantorite",
        name: "cazantorite",
        spritenum: 605,

        megaStone: "Cazantor-Mega",
        megaEvolves: "Cazantor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a cazantor, this item allows it to Mega Evolve in battle.",
    },
    "galletegite": {
        id: "galletegite",
        name: "galletegite",
        spritenum: 616,

        megaStone: "Gallete-Mega-G",
        megaEvolves: "Gallete",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a galleteg, this item allows it to Mega Evolve in battle.",
    },
    "galletebite": {
        id: "galletebite",
        name: "galletebite",
        spritenum: 582,

        megaStone: "Gallete-Mega-B",
        megaEvolves: "Gallete",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a galleteb, this item allows it to Mega Evolve in battle.",
    },
    "steelthornite": {
        id: "steelthornite",
        name: "steelthornite",
        spritenum: 621,
		 
        megaStone: "Steelthorn-Mega",
        megaEvolves: "Steelthorn",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a steelthorn, this item allows it to Mega Evolve in battle.",
    },
    "scraftiaite": {
        id: "scraftiaite",
        name: "scraftiaite",
        spritenum: 615,

        megaStone: "Scraftia-Mega",
        megaEvolves: "Scraftia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scraftia, this item allows it to Mega Evolve in battle.",
    },
    "thundersaurusite": {
        id: "thundersaurusite",
        name: "thundersaurusite",
        spritenum: 608,

        megaStone: "Thundersaurus-Mega",
        megaEvolves: "Thundersaurus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a thundersaurus, this item allows it to Mega Evolve in battle.",
    },
    "lopunneite": {
        id: "lopunneite",
        name: "lopunneite",
        spritenum: 626,

        megaStone: "Lopunne-Mega",
        megaEvolves: "Lopunne",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lopunne, this item allows it to Mega Evolve in battle.",
    },
    "hootoiseite": {
        id: "hootoiseite",
        name: "hootoiseite",
        spritenum: 583,
		 
        megaStone: "Hootoise-Mega",
        megaEvolves: "Hootoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a hootoise, this item allows it to Mega Evolve in battle.",
    },
    "metanleeite": {
        id: "metanleeite",
        name: "metanleeite",
        spritenum: 618,

        megaStone: "Metanlee-Mega",
        megaEvolves: "Metanlee",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a metanlee, this item allows it to Mega Evolve in battle.",
    },
    "heebleyeite": {
        id: "heebleyeite",
        name: "heebleyeite",
        spritenum: 614,
		 
        megaStone: "Heebleye-Mega",
        megaEvolves: "Heebleye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heebleye, this item allows it to Mega Evolve in battle.",
    },
    "draegaradosite": {
        id: "draegaradosite",
        name: "draegaradosite",
        spritenum: 589,

        megaStone: "Draegarados-Mega",
        megaEvolves: "Draegarados",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a draegarados, this item allows it to Mega Evolve in battle.",
    },
    "babuffeite": {
        id: "babuffeite",
        name: "babuffeite",
        spritenum: 582,

        megaStone: "Babuffe-Mega",
        megaEvolves: "Babuffe",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a babuffe, this item allows it to Mega Evolve in battle.",
    },
    "galionzite": {
        id: "galionzite",
        name: "galionzite",
        spritenum: 623,

        megaStone: "Galion-Z-Mega",
        megaEvolves: "Galion-Z",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a glalionz, this item allows it to Mega Evolve in battle.",
    },
    "gallatrossite": {
        id: "gallatrossite",
        name: "gallatrossite",
        spritenum: 616,

        megaStone: "Gallatross-Mega",
        megaEvolves: "Gallatross",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gallatross, this item allows it to Mega Evolve in battle.",
    },
    "landiaite": {
        id: "landiaite",
        name: "landiaite",
        spritenum: 615,

        megaStone: "Landia-Mega",
        megaEvolves: "Landia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a landia, this item allows it to Mega Evolve in battle.",
    },
    "sceptetteeternalite": {
        id: "sceptetteeternalite",
        name: "sceptetteeternalite",
        spritenum: 613,

        megaStone: "Sceptette-Eternal-Mega",
        megaEvolves: "Sceptette-Eternal",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sceptetteeternal, this item allows it to Mega Evolve in battle.",
    },
    "baelite": {
        id: "baelite",
        name: "baelite",
        spritenum: 582,

        megaStone: "Bael-Mega",
        megaEvolves: "Bael",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a bael, this item allows it to Mega Evolve in battle.",
    },
    "tyrankingite": {
        id: "tyrankingite",
        name: "tyrankingite",
        spritenum: 607,

        megaStone: "Tyranking-Mega",
        megaEvolves: "Tyranking",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyranking, this item allows it to Mega Evolve in battle.",
    },
    "mentorite": {
        id: "mentorite",
        name: "mentorite",
        spritenum: 618,

        megaStone: "Mentor-Mega",
        megaEvolves: "Mentor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a mentor, this item allows it to Mega Evolve in battle.",
    },
    "elektraite": {
        id: "elektraite",
        name: "elektraite",
        spritenum: 579,
		 
        megaStone: "Elektra-Mega",
        megaEvolves: "Elektra",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a elektra, this item allows it to Mega Evolve in battle.",
    },
    "probsite": {
        id: "probsite",
        name: "probsite",
        spritenum: 629,

        megaStone: "Probs-Mega",
        megaEvolves: "Probs",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a probs, this item allows it to Mega Evolve in battle.",
    },
    "lucashadowite": {
        id: "lucashadowite",
        name: "lucashadowite",
        spritenum: 594,
		 
        megaStone: "Lucashadow-Mega",
        megaEvolves: "Lucashadow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a lucashadow, this item allows it to Mega Evolve in battle.",
    },
    "kyrauremite": {
        id: "kyrauremite",
        name: "kyrauremite",
        spritenum: 607,

        megaStone: "Kyraurem-Mega",
        megaEvolves: "Kyraurem",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyraurem, this item allows it to Mega Evolve in battle.",
    },
    "xurkivoirite": {
        id: "xurkivoirite",
        name: "xurkivoirite",
        spritenum: 587,

        megaStone: "Xurkivoir-Mega",
        megaEvolves: "Xurkivoir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkivoir, this item allows it to Mega Evolve in battle.",
    },
    "scrapunnyite": {
        id: "scrapunnyite",
        name: "scrapunnyite",
        spritenum: 626,

        megaStone: "Scrapunny-Mega",
        megaEvolves: "Scrapunny",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scrapunny, this item allows it to Mega Evolve in battle.",
    },
    "crematoriaxite": {
        id: "crematoriaxite",
        name: "crematoriaxite",
        spritenum: 585,

        megaStone: "Crematoria-Mega-X",
        megaEvolves: "Crematoria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriax, this item allows it to Mega Evolve in battle.",
    },
    "crematoriayite": {
        id: "crematoriayite",
        name: "crematoriayite",
        spritenum: 586,

        megaStone: "Crematoria-Mega-Y",
        megaEvolves: "Crematoria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriay, this item allows it to Mega Evolve in battle.",
    },
    "crematoriasemataryxite": {
        id: "crematoriasemataryxite",
        name: "crematoriasemataryxite",
        spritenum: 585,

        megaStone: "Crematoria-Sematary-Mega-X",
        megaEvolves: "Crematoria-Sematary",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriasemataryx, this item allows it to Mega Evolve in battle.",
    },
    "crematoriasemataryyite": {
        id: "crematoriasemataryyite",
        name: "crematoriasemataryyite",
        spritenum: 586,

        megaStone: "Crematoria-Sematary-Mega-Y",
        megaEvolves: "Crematoria-Sematary",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a crematoriasemataryy, this item allows it to Mega Evolve in battle.",
    },
    "slampaite": {
        id: "slampaite",
        name: "slampaite",
		  spritenum: 620,
		
        megaStone: "Slampa-Mega",
        megaEvolves: "Slampa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a slampa, this item allows it to Mega Evolve in battle.",
    },
    "decedactylite": {
        id: "decedactylite",
        name: "decedactylite",
        spritenum: 577,
		 
        megaStone: "Decidactyl-Mega",
        megaEvolves: "Decidactyl",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a decedactyl, this item allows it to Mega Evolve in battle.",
    },
    "aerodakoite": {
        id: "aerodakoite",
        name: "aero dakoite",
        spritenum: 577,
		 
        megaStone: "Aero Dako-Mega",
        megaEvolves: "Aero Dako",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aero dako, this item allows it to Mega Evolve in battle.",
    },
    "venustoisegreenite": {
        id: "venustoisegreenite",
        name: "venustoisegreenite",
        spritenum: 608,

        megaStone: "Venustoise-Mega-Green",
        megaEvolves: "Venustoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a venustoisegreen, this item allows it to Mega Evolve in battle.",
    },
    "venustoiseblueite": {
        id: "venustoiseblueite",
        name: "venustoiseblueite",
        spritenum: 583,

        megaStone: "Venustoise-Mega-Blue",
        megaEvolves: "Venustoise",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a venustoiseblue, this item allows it to Mega Evolve in battle.",
    },
    "pheralieite": {
        id: "pheralieite",
        name: "pheralieite",
        megaStone: "Pheralie-Mega",
        megaEvolves: "Pheralie",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a Pheralie, this item allows it to Mega Evolve in battle.",
    },
	    "scipodite": {
        id: "scipodite",
        name: "scipodite",
        spritenum: 605,

        megaStone: "Scipod-Mega",
        megaEvolves: "Scipod",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a Scipod, this item allows it to Mega Evolve in battle.",
    },
    "necrozmeruptite": {
        id: "necrozmeruptite",
        name: "necrozmeruptite",
        spritenum: 625,
		 
        megaStone: "Necrozmerupt-Mega",
        megaEvolves: "Necrozmerupt",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a necrozmerupt, this item allows it to Mega Evolve in battle.",
    },
    "banekyuite": {
        id: "banekyuite",
        name: "banekyuite",
        spritenum: 582,

        megaStone: "Banekyu-Mega",
        megaEvolves: "Banekyu",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a banekyu, this item allows it to Mega Evolve in battle.",
    },
    "Heratanaite": {
        id: "heratanaite",
        name: "heratanaite",
        spritenum: 590,
		 
        megaStone: "Heratana-Mega",
        megaEvolves: "Heratana",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heratana, this item allows it to Mega Evolve in battle.",
    },
    "axatreeite": {
        id: "axatreeite",
        name: "axatreeite",
        spritenum: 579,
		 
        megaStone: "Axatree-Mega",
        megaEvolves: "Axatree",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a axatree, this item allows it to Mega Evolve in battle.",
    },
    "altellowite": {
        id: "altellowite",
        name: "altellowite",
        spritenum: 615,

        megaStone: "Altellow-Mega",
        megaEvolves: "Altellow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altellow, this item allows it to Mega Evolve in battle.",
    },
    "sablegigasite": {
        id: "sablegigasite",
        name: "sablegigasite",
        spritenum: 614,
		 
        megaStone: "Sablegigas-Mega",
        megaEvolves: "Sablegigas",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a Sablegigas, this item allows it to Mega Evolve in battle.",
    },
    "abomasorusite": {
        id: "abomasorusite",
        name: "abomasorusite",
        spritenum: 575,
		 
        megaStone: "Abomasorus-Mega",
        megaEvolves: "Abomasorus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a abomasorus, this item allows it to Mega Evolve in battle.",
    },
    "toxicarioite": {
        id: "toxicarioite",
        name: "toxicarioite",
        spritenum: 594,

        megaStone: "Toxicario-Mega",
        megaEvolves: "Toxicario",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a toxicario, this item allows it to Mega Evolve in battle.",
    },
    "blampaite": {
        id: "blampaite",
        name: "blampaite",
        spritenum: 583,

        megaStone: "Blampa-Mega",
        megaEvolves: "Blampa",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blampa, this item allows it to Mega Evolve in battle.",
    },
    "entirite": {
        id: "entirite",
        name: "entirite",
        spritenum: 602,

        megaStone: "Entir-Mega",
        megaEvolves: "Entir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a entir, this item allows it to Mega Evolve in battle.",
    },
    "gardelegoite": {
        id: "gardelegoite",
        name: "gardelegoite",
        spritenum: 587,

        megaStone: "Gardelego-Mega",
        megaEvolves: "Gardelego",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gardelego, this item allows it to Mega Evolve in battle.",
    },
    "maltarioneite": {
        id: "maltarioneite",
        name: "maltarioneite",
        spritenum: 615,

        megaStone: "Maltarione-Mega",
        megaEvolves: "Maltarione",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a maltarione, this item allows it to Mega Evolve in battle.",
    },
    "guzzbroite": {
        id: "guzzbroite",
        name: "guzzbroite",
		  spritenum: 620,
		
        megaStone: "Guzzbro-Mega",
        megaEvolves: "Guzzbro",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a guzzbro, this item allows it to Mega Evolve in battle.",
    },
    "peridotite": {
        id: "peridotite",
        name: "peridotite",
        spritenum: 622,
		 
        megaStone: "Peridot-Mega",
        megaEvolves: "Peridot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a peridot, this item allows it to Mega Evolve in battle.",
    },
    "alohaite": {
        id: "alohaite",
        name: "alohaite",
        spritenum: 619,
		 
        megaStone: "Aloha-Mega",
        megaEvolves: "Aloha",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a aloha, this item allows it to Mega Evolve in battle.",
    },
    "kyupedoite": {
        id: "kyupedoite",
        name: "kyupedoite",
        spritenum: 619,
		 
        megaStone: "Kyupedo-Mega",
        megaEvolves: "Kyupedo",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyupedo, this item allows it to Mega Evolve in battle.",
    },
    "luauite": {
        id: "luauite",
        name: "luauite",
        spritenum: 625,
		 
        megaStone: "Luau-Mega",
        megaEvolves: "Luau",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a luau, this item allows it to Mega Evolve in battle.",
    },
    "swampterraite": {
        id: "swampterraite",
        name: "swampterraite",
        spritenum: 612,

        megaStone: "Swampterra-Mega",
        megaEvolves: "Swampterra",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a swampterra, this item allows it to Mega Evolve in battle.",
    },
    "alteyerite": {
        id: "alteyerite",
        name: "alteyerite",
        spritenum: 615,

        megaStone: "Alteyer-Mega",
        megaEvolves: "Alteyer",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a alteyer, this item allows it to Mega Evolve in battle.",
    },
    "notite": {
        id: "notite",
        name: "notite",
        spritenum: 622,
		 
        megaStone: "Not-Mega",
        megaEvolves: "Not",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a not, this item allows it to Mega Evolve in battle.",
    },
    "joltsolite": {
        id: "joltsolite",
        name: "joltsolite",
        spritenum: 576,

        megaStone: "Joltsol-Mega",
        megaEvolves: "Joltsol",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a joltsol, this item allows it to Mega Evolve in battle.",
    },
    "altearniaite": {
        id: "altearniaite",
        name: "altearniaite",
        spritenum: 615,

        megaStone: "Altearnia-Mega",
        megaEvolves: "Altearnia",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altearnia, this item allows it to Mega Evolve in battle.",
    },
    "regigotite": {
        id: "regigotite",
        name: "regigotite",
        spritenum: 622,
		 
        megaStone: "Regigot-Mega",
        megaEvolves: "Regigot",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a regigot, this item allows it to Mega Evolve in battle.",
    },
    "sakamakiite": {
        id: "sakamakiite",
        name: "sakamakiite",
        spritenum: 627,
		 
        megaStone: "Sakamaki-Mega",
        megaEvolves: "Sakamaki",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sakamaki, this item allows it to Mega Evolve in battle.",
    },
    "sylviasite": {
        id: "sylviasite",
        name: "sylviasite",
        spritenum: 629,

        megaStone: "Sylvias-Mega",
        megaEvolves: "Sylvias",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a sylvias, this item allows it to Mega Evolve in battle.",
    },
    "celesirite": {
        id: "celesirite",
        name: "celesirite",
        spritenum: 602,

        megaStone: "Celesir-Mega",
        megaEvolves: "Celesir",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a celesir, this item allows it to Mega Evolve in battle.",
    },
    "absokoite": {
        id: "absokoite",
        name: "absokoite",
        spritenum: 576,

        megaStone: "Absoko-Mega",
        megaEvolves: "Absoko",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a absoko, this item allows it to Mega Evolve in battle.",
    },
    "giradinoite": {
        id: "giradinoite",
        name: "giradinoite",
		  spritenum: 617,
        
		  megaStone: "Giradino-Mega",
        megaEvolves: "Giradino",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a giradino, this item allows it to Mega Evolve in battle.",
    },
    "xurkizardxite": {
        id: "xurkizardxite",
        name: "xurkizardxite",
        spritenum: 585,
		 
        megaStone: "Xurkizard-Mega-X",
        megaEvolves: "Xurkizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkizardx, this item allows it to Mega Evolve in battle.",
    },
    "xurkizardyite": {
        id: "xurkizardyite",
        name: "xurkizardyite",
        spritenum: 586,
		 
        megaStone: "Xurkizard-Mega-Y",
        megaEvolves: "Xurkizard",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkizardy, this item allows it to Mega Evolve in battle.",
    },
    "dramasnowite": {
        id: "dramasnowite",
        name: "dramasnowite",
        spritenum: 575,
		 
        megaStone: "Dramasnow-Mega",
        megaEvolves: "Dramasnow",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a dramasnow, this item allows it to Mega Evolve in battle.",
    },
    "slowmarinaite": {
        id: "slowmarinaite",
        name: "slowmarinaite",
		  spritenum: 620,
		
        megaStone: "Slowmarina-Mega",
        megaEvolves: "Slowmarina",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a slowmarina, this item allows it to Mega Evolve in battle.",
    },
    "kartariaite": {
        id: "kartariaite",
        name: "kartariaite",
        spritenum: 615,

        megaStone: "Kartaria-Mega",
        megaEvolves: "Kartaria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kartaria, this item allows it to Mega Evolve in battle.",
    },
    "altarbatite": {
        id: "altarbatite",
        name: "altarbatite",
        spritenum: 615,

        megaStone: "Altarbat-Mega",
        megaEvolves: "Altarbat",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altarbat, this item allows it to Mega Evolve in battle.",
    },
    "heatariaite": {
        id: "heatariaite",
        name: "heatariaite",
        spritenum: 615,

        megaStone: "Heataria-Mega",
        megaEvolves: "Heataria",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a heataria, this item allows it to Mega Evolve in battle.",
    },
    "gardecunoite": {
        id: "gardecunoite",
        name: "gardecunoite",
        spritenum: 587,

        megaStone: "Gardecuno-Mega",
        megaEvolves: "Gardecuno",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gardecuno, this item allows it to Mega Evolve in battle.",
    },
    "audalaite": {
        id: "audalaite",
        name: "audalaite",
		  spritenum: 617,
        
		  megaStone: "Audala-Mega",
        megaEvolves: "Audala",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a audala, this item allows it to Mega Evolve in battle.",
    },
    "triagonalite": {
        id: "triagonalite",
        name: "triagonalite",
        spritenum: 596,

        megaStone: "Triagonal-Mega",
        megaEvolves: "Triagonal",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a triagonal, this item allows it to Mega Evolve in battle.",
    },
    "tyrazmaite": {
        id: "tyrazmaite",
        name: "tyrazmaite",
        spritenum: 607,

        megaStone: "Tyrazma-Mega",
        megaEvolves: "Tyrazma",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrazma, this item allows it to Mega Evolve in battle.",
    },
    "nintwoxite": {
        id: "nintwoxite",
        name: "nintwoxite",
        spritenum: 600,

        megaStone: "Nintwo-Mega-X",
        megaEvolves: "Nintwo",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a nintwox, this item allows it to Mega Evolve in battle.",
    },
    "nintwoyite": {
        id: "nintwoyite",
        name: "nintwoyite",
        spritenum: 601,

        megaStone: "Nintwo-Mega-Y",
        megaEvolves: "Nintwo",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a nintwoy, this item allows it to Mega Evolve in battle.",
    },
    "kyzorite": {
        id: "kyzorite",
        name: "kyzorite",
        spritenum: 605,

        megaStone: "Kyzor-Mega",
        megaEvolves: "Kyzor",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a kyzor, this item allows it to Mega Evolve in battle.",
    },
    "xurkinoite": {
        id: "xurkinoite",
        name: "xurkinoite",
		  spritenum: 617,

        megaStone: "Xurkino-Mega",
        megaEvolves: "Xurkino",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a xurkino, this item allows it to Mega Evolve in battle.",
    },
    "altarigardeite": {
        id: "altarigardeite",
        name: "altarigardeite",
        spritenum: 615,

        megaStone: "Altarigarde-Mega",
        megaEvolves: "Altarigarde",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a altarigarde, this item allows it to Mega Evolve in battle.",
    },
    "garzoneite": {
        id: "garzoneite",
        name: "garzoneite",
        spritenum: 589,

        megaStone: "Garzone-Mega",
        megaEvolves: "Garzone",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a garzone, this item allows it to Mega Evolve in battle.",
    },
    "trampolineite": {
        id: "trampolineite",
        name: "trampolineite",
        spritenum: 580,

        megaStone: "Trampoline-Mega",
        megaEvolves: "Trampoline",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a trampoline, this item allows it to Mega Evolve in battle.",
    },
    "stakeyeite": {
        id: "stakeyeite",
        name: "stakeyeite",
        spritenum: 614,
		 
        megaStone: "Stakeye-Mega",
        megaEvolves: "Stakeye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a stakeye, this item allows it to Mega Evolve in battle.",
    },
    "auroritarite": {
        id: "auroritarite",
        name: "auroritarite",
        spritenum: 607,

        megaStone: "Auroritar-Mega",
        megaEvolves: "Auroritar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a auroritar, this item allows it to Mega Evolve in battle.",
    },
    "gameraxite": {
        id: "gameraxite",
        name: "gameraxite",
        spritenum: 607,

        megaStone: "Gamera-Mega-X",
        megaEvolves: "Gamera",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gamerax, this item allows it to Mega Evolve in battle.",
    },
    "gamerayite": {
        id: "gamerayite",
        name: "gamerayite",
        spritenum: 583,

        megaStone: "Gamera-Mega-Y",
        megaEvolves: "Gamera",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a gameray, this item allows it to Mega Evolve in battle.",
    },
    "tyrannosaurusxite": {
        id: "tyrannosaurusxite",
        name: "tyrannosaurusxite",
        spritenum: 608,

        megaStone: "Tyrannosaurus-Mega-X",
        megaEvolves: "Tyrannosaurus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrannosaurusx, this item allows it to Mega Evolve in battle.",
    },
    "tyrannosaurusyite": {
        id: "tyrannosaurusyite",
        name: "tyrannosaurusyite",
        spritenum: 607,

        megaStone: "Tyrannosaurus-Mega-Y",
        megaEvolves: "Tyrannosaurus",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a tyrannosaurusy, this item allows it to Mega Evolve in battle.",
    },
    "scizionite": {
        id: "scizionite",
        name: "scizionite",
        spritenum: 605,

        megaStone: "Scizion-Mega",
        megaEvolves: "Scizion",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a scizion, this item allows it to Mega Evolve in battle.",
    },
    "fluorineite": {
        id: "fluorineite",
        name: "fluorineite",
		  spritenum: 617,
		 
        megaStone: "Fluorine-Mega",
        megaEvolves: "Fluorine",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a fluorine, this item allows it to Mega Evolve in battle.",
    },
    "noivianite": {
        id: "noivianite",
        name: "noivianite",
        spritenum: 615,

        megaStone: "Noivian-Mega",
        megaEvolves: "Noivian",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a noivian, this item allows it to Mega Evolve in battle.",
    },
    "blazelite": {
        id: "blazelite",
        name: "blazelite",
        spritenum: 584,

        megaStone: "Blazel-Mega",
        megaEvolves: "Blazel",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a blazel, this item allows it to Mega Evolve in battle.",
    },
    "claytarite": {
        id: "claytarite",
        name: "claytarite",
        spritenum: 607,

        megaStone: "Claytar-Mega",
        megaEvolves: "Claytar",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a claytar, this item allows it to Mega Evolve in battle.",
    },
    "theyeite": {
        id: "theyeite",
        name: "theyeite",
        spritenum: 614,
		 
        megaStone: "Theye-Mega",
        megaEvolves: "Theye",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a theye, this item allows it to Mega Evolve in battle.",
    },
    "masterpieceite": {
        id: "masterpieceite",
        name: "masterpieceite",
        spritenum: 625,
		 
        megaStone: "Masterpiece-Mega",
        megaEvolves: "Masterpiece",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a masterpiece, this item allows it to Mega Evolve in battle.",
    },
    "celemenceite": {
        id: "celemenceite",
        name: "celemenceite",
        spritenum: 627,
		 
        megaStone: "Celemence-Mega",
        megaEvolves: "Celemence",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a celemence, this item allows it to Mega Evolve in battle.",
    },
    "saldreigonceite": {
        id: "saldreigonceite",
        name: "saldreigonceite",
        spritenum: 627,
		 
        megaStone: "Saldreigonce-Mega",
        megaEvolves: "Saldreigonce",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a saldreigonce, this item allows it to Mega Evolve in battle.",
    },
    "salasaurite": {
        id: "salasaurite",
        name: "salasaurite",
        spritenum: 608,

        megaStone: "Salasaur-Mega",
        megaEvolves: "Salasaur",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a salasaur, this item allows it to Mega Evolve in battle.",
    },
    "centenarianite": {
        id: "centenarianite",
        name: "centenarianite",
        spritenum: 596,

        megaStone: "Centenarian-Mega",
        megaEvolves: "Centenarian",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a centenarian, this item allows it to Mega Evolve in battle.",
    },
    "amdremayreite": {
        id: "amdremayreite",
        name: "amdremayreite",
        spritenum: 580,

        megaStone: "Amdre-Mayre-Mega",
        megaEvolves: "Amdre-Mayre",
        onTakeItem: function(item, source) {
            if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
            return true;
        },
        gen: 6,
        desc: "If holder is a amdremayre, this item allows it to Mega Evolve in battle.",
    },
};
