//---
var NEXTBUILDAMOUNT = { 1:10, 10:25, 25:100, 100:'MAX', MAX:'NXT', NXT:'MXT', MXT:1 }
//---
var BUILDINGS = [
    { // gen #0
        prod: 2,
        nexts: [],
        cost: 4, costCoeff: 1.13,
        levelCoeffs: [1, 81, 2916, 39366, 765450, 8.1e7, 4.41e8, 2.205e10, 1.1025e11, 1.1025e13, 3.3075e13, 8.26875e14, 8.26875e15, 8.26875e16, 4.134375e17],
    }, { // gen #1
        prod: 24,
        nexts: [],
        cost: 70, costCoeff: 1.125,
        levels: [0, 25, 350, 850, 1450, 1451], levelCoeffs: [1, 5, 450, 5e4, 25e5, 25e8],
        reqB0: 5, reqs: [{ type:'building', key:0, value:5 },{ type:'evolution', value:0 }],
    }, { // gen #2
        prod: 54,
        nexts: [],
        cost: 620, costCoeff: 1.12,
        levels: [0, 50, 450, 950, 1550, 1551], levelCoeffs: [1, 5, 400, 4e4, 1e6, 6e8],
        reqB0: 25, reqs: [{ type:'building', key:0, value:25 },{ type:'evolution', value:0 }],
    }, { // gen #3
        prod: 108,
        nexts: [],
        cost: 14e3, costCoeff: 1.115,
        levels: [0, 100, 550, 1050, 1650, 1651], levelCoeffs: [1 ,5, 350, 35e3, 75e4, 15e7],
        reqB0: 50, reqs: [{ type:'building', key:0, value:50 },{ type:'evolution', value:0 }],
    }, { // gen #4
        prod: 810,
        nexts: [],
        cost: 625e4, costCoeff: 1.11,
        levels: [0, 150, 650, 1150, 1750, 1751], levelCoeffs: [1, 5, 300, 2e4, 5e5, 25e6],
        reqB0: 100, reqs: [{ type:'building', key:0, value:100 },{ type:'evolution', value:0 }],
    }, { // gen #5
        prod: 2430,
        nexts: [],
        cost: 2.75e8, costCoeff: 1.105,
        levels: [0, 200, 750, 1250, 1850, 1851], levelCoeffs: [1, 5, 250, 1e4, 25e4, 625e4],
        reqB0: 150, reqs: [{ type:'building', key:0, value:150 },{ type:'evolution', value:1 }],
    }, { // gen #6
        prod: 9720,
        nexts: [],
        cost: 1.25e11, costCoeff: 1.10,
        levels: [0, 250, 850, 1350, 1950, 1951], levelCoeffs: [1, 5, 200, 5e3, 75e3, 375e3],
        reqB0: 200, reqs: [{ type:'building', key:0, value:200 },{ type:'evolution', value:1 }],
    }, { // gen #7
        prod: 38880,
        nexts: [],
        cost: 5.75e13, costCoeff: 1.095,
        levels: [0, 300, 950, 1450, 2050], levelCoeffs: [1, 5, 150, 1500, 18e3],
        reqB0: 250, reqs: [{ type:'building', key:0, value:250 },{ type:'evolution', value:1 }],
    }, { // gen #8
        prod: 116640,
        nexts: [],
        cost: 2.5e16, costCoeff: 1.09,
        levels: [0, 350, 1050, 1550, 2150], levelCoeffs: [1, 5, 100, 400, 4e3],
        reqB0: 300, reqs: [{ type:'building', key:0, value:300 },{ type:'evolution', value:2 }],
    }, { // gen #9
        prod: 466560,
        nexts: [],
        cost: 5.25e21, costCoeff: 1.085,
        levels: [0, 400, 1150, 1650, 2250], levelCoeffs: [1, 5, 50, 250, 1500],
        reqB0: 400, reqs: [{ type:'building', key:0, value:400 },{ type:'evolution', value:2 }],
    }, { // gen #10
        prod: 1399680,
        nexts: [],
        cost: 1e27, costCoeff: 1.08,
        levels: [0, 450, 1250, 1750, 2350], levelCoeffs: [1, 5, 40, 160, 600],
        reqB0: 500, reqs: [{ type:'building', key:0, value:500 },{ type:'evolution', value:3 }],
    }, { // gen #11
        prod: 5248800,
        nexts: [],
        cost: 2e32, costCoeff: 1.075,
        levels: [0, 500, 1350, 1850, 2450], levelCoeffs: [1, 5, 30, 60, 150],
        reqB0: 600, reqs: [{ type:'building', key:0, value:600 },{ type:'evolution', value:3 }],
    }
]
//---
var TECHS = {}
//---
for (let i = 1; i < BUILDINGS.length; ++i) {
    //---
    let amount = BUILDINGS[i].reqB0 + 3 + i / 3
    let cost = (BUILDINGS[0].cost * (Math.pow(BUILDINGS[0].costCoeff, 0) - Math.pow(BUILDINGS[0].costCoeff, amount)) / (1 - BUILDINGS[0].costCoeff))
    //---
    TECHS['building' + i + 'lvl0'] = {
        cost: cost,
        reqs: BUILDINGS[i].reqs,
        rewards: [{ type:'level', key:i, value:0 }],
    }
    //---
    for (let level = 1; level < BUILDINGS[i].levels.length; ++level) {
        //---
        let amount = BUILDINGS[i].levels[level] + level * 2 + level / 2
        let cost = (BUILDINGS[i].cost * (Math.pow(BUILDINGS[i].costCoeff, 0) - Math.pow(BUILDINGS[i].costCoeff, amount)) / (1 - BUILDINGS[i].costCoeff))
        //---
        TECHS['building' + i + 'lvl' + level] = {
            cost: cost,
            reqs: [{ type:'building', key:i, value:BUILDINGS[i].levels[level] },{ type:'tech', value:'building' + i + 'lvl' + (level - 1) }],
            rewards: [{ type:'level', key:i, value:level }],
        }
    }
    //---
    let reqCounts = [1, 25, 50]
    for (let upgrade = 1; upgrade < 143; ++upgrade) {
        //---
        let reqCount = upgrade < reqCounts.length ? reqCounts[upgrade] : (upgrade - 2) * 100
        //---
        let amount = reqCount + 4 + upgrade / 2
        let cost = (BUILDINGS[i].cost * (Math.pow(BUILDINGS[i].costCoeff, 0) - Math.pow(BUILDINGS[i].costCoeff, amount)) / (1 - BUILDINGS[i].costCoeff))
        //---
        TECHS['building' + i + 'upgrade' + upgrade] = {
            cost: cost,
            reqs: [{ type:'building', key:i, value:reqCount }],
            rewards: [{ type:'upgrade', key:i, value:upgrade }],
        }
    }
}
//---
var disc = [50, 100, 150, 200, 250, 300, 350, 400, 450, 550]
for (let i = 0; i < disc.length; ++i) {
    //---
    let amount = disc[i] + 3 + i / 4
    let cost = (BUILDINGS[0].cost * (Math.pow(BUILDINGS[0].costCoeff, 0) - Math.pow(BUILDINGS[0].costCoeff, amount)) / (1 - BUILDINGS[0].costCoeff))
    //---
    TECHS['globalCoeff2x' + i] = {
        cost: cost,
        reqs: [{ type:'building', key:0, value:disc[i] }],
        rewards: [{ type:'bonus', key:'globalCoeff', value:2 }],
    }
}
//---
for (let i = 0; i < 143; ++i) {
    //---
    let amount = 10
    if (i == 2) amount = 25
    else if (i == 3) amount = 50
    else if (i > 3) amount = (i - 3) * 100
    //---
    let costAmount = amount + 5 + i / 4
    let cost1 = (BUILDINGS[0].cost * (Math.pow(BUILDINGS[0].costCoeff, 0) - Math.pow(BUILDINGS[0].costCoeff, costAmount)) / (1 - BUILDINGS[0].costCoeff))
    let cost2 = (BUILDINGS[11].cost * (Math.pow(BUILDINGS[11].costCoeff, 0) - Math.pow(BUILDINGS[11].costCoeff, costAmount)) / (1 - BUILDINGS[11].costCoeff))
    let cost = Math.max(cost1, cost2)
    //---
    TECHS['globalCoeff3x' + i] = {
        cost: cost,
        reqs: [{ type:'allbuildings', value:amount }],
        rewards: [{ type:'bonus', key:'globalCoeff', value:3 }],
    }
}
//---
var prevName = undefined
for (let i = 0; i < 280; ++i) {
    //---
    let level = 10
    if (i > 0) level = 25 + 50 * (i - 1)
    //---
    let cost = (BUILDINGS[0].cost * (Math.pow(BUILDINGS[0].costCoeff, 0) - Math.pow(BUILDINGS[0].costCoeff, level + 5 + i / 4)) / (1 - BUILDINGS[0].costCoeff))
    //---
    if (level < 50) {
        //---
        TECHS['clickCoeff' + i] = {
            cost: cost,
            reqs: [{ type:'building', key:0, value:level },(prevName ? { type:'tech', value:prevName } : { type:'evolution', value:0 })],
            rewards: [{ type:'bonus', key:'clickCoeff', value:5 }],
        }
    }
    else {
        //---
        var value = 250
        if (level == 75) value = 100
        //---
        TECHS['clickCoeff' + i] = {
            cost: cost,
            reqs: [{ type:'building', key:0, value:level },(prevName ? { type:'tech', value:prevName } : { type:'evolution', value:0 })],
            rewards: [{ type:'bonus', key:'clickCoeff', value:value }],
        }
    }
    //---
    prevName = 'clickCoeff' + i
}
//---
for (let techId in TECHS) {
    for (let i = 0; i < TECHS[techId].reqs.length; ++i) {
        //---
        if (TECHS[techId].reqs[i].type == "building") {
            //---
            let buildingId = TECHS[techId].reqs[i].key
            let count = TECHS[techId].reqs[i].value
            if (BUILDINGS[buildingId].nexts.indexOf(count) == -1) BUILDINGS[buildingId].nexts.push(count)
        }
    }
}
//---
for (let i = 0; i < BUILDINGS.length; ++i) BUILDINGS[i].nexts.sort(function(a, b) { return a - b; })
//---
var EVOLUTIONS = [
    //---
    { rewards: [{ type:'level', key:0, value:0 }], cost:0 },
    { rewards: [{ type:'level', key:0, value:1 }], cost:1e8 },
    { rewards: [{ type:'level', key:0, value:2 }], cost:1e16 },
    { rewards: [{ type:'level', key:0, value:3 }], cost:1e26 },
    { rewards: [{ type:'level', key:0, value:4 }], cost:1e36 },
    { rewards: [{ type:'level', key:0, value:5 }], cost:1e46 },
    { rewards: [{ type:'level', key:0, value:6 }], cost:1e56 },
    { rewards: [{ type:'level', key:0, value:7 }], cost:1e66 },
    { rewards: [{ type:'level', key:0, value:8 }], cost:1e76 },
    { rewards: [{ type:'level', key:0, value:9 }], cost:1e86 },
    { rewards: [{ type:'level', key:0, value:10 }], cost:1e96 },
    { rewards: [{ type:'level', key:0, value:11 }], cost:1e106 },
    { rewards: [{ type:'level', key:0, value:12 }], cost:1e116 },
    { rewards: [{ type:'level', key:0, value:13 }], cost:1e126 },
    { rewards: [{ type:'level', key:0, value:14 }], cost:1e136 },
]
//---
class ACHIEVEMENT_BUILDING {
    //---
    constructor(buildingId) {
        //---
        this.key = buildingId
        this.type = 'buildingCount'
        this.steps = [25, 50, 100, 250, 500, 1000, 1500, 2000, 2500]
    }
    //---
    getLevel(game) {
        //---
        let value = game.stats.allTime.maxBuildings[this.key]
        //---
        let level = 0
        while (level < this.steps.length && value >= this.steps[level]) ++level
        //---
        return level
    }
}
//---
class ACHIEVEMENT_MAXBUILDING {
    //---
    constructor(buildingId) {
        //---
        this.key = buildingId
        this.type = 'buildingMax'
        this.steps = [1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000]
    }
    //---
    getLevel(game) {
        //---
        let value = game.stats.allTime.buildings[this.key]
        //---
        let level = 0
        while (level < this.steps.length && value >= this.steps[level]) ++level
        //---
        return level
    }
}
//---
class ACHIEVEMENT_ALLBUILDING {
    //---
    constructor() {
        //---
        this.type = 'allBuildings'
        this.steps = [3333, 6666, 9999, 13333, 16666, 19999, 23333, 26666, 29999]
    }
    //---
    getLevel(game) {
        //---
        let value = 0
        for (let i = 0; i < BUILDINGS.length; ++i) value += game.stats.allTime.buildings[i]
        //---
        let level = 0
        while (level < this.steps.length && value >= this.steps[level]) ++level
        //---
        return level
    }
}
//---
class ACHIEVEMENT_STAT {
    //---
    constructor(statId, steps) {
        //---
        this.key = statId
        this.steps = steps
    }
    //---
    getLevel(game) {
        //---
        let value = game.stats.allTime[this.key]
        //---
        let level = 0
        while (level < this.steps.length && value >= this.steps[level]) ++level
        //---
        return level
    }
}
//---
var TLEN = 575
//---
var ACHIEVEMENTS = [
    //---
    new ACHIEVEMENT_BUILDING(0), new ACHIEVEMENT_BUILDING(1), new ACHIEVEMENT_BUILDING(2), new ACHIEVEMENT_BUILDING(3), new ACHIEVEMENT_BUILDING(4),
    new ACHIEVEMENT_BUILDING(5), new ACHIEVEMENT_BUILDING(6), new ACHIEVEMENT_BUILDING(7), new ACHIEVEMENT_BUILDING(8), new ACHIEVEMENT_BUILDING(9),
    new ACHIEVEMENT_BUILDING(10),
    //---
    new ACHIEVEMENT_MAXBUILDING(0), new ACHIEVEMENT_MAXBUILDING(1), new ACHIEVEMENT_MAXBUILDING(2), new ACHIEVEMENT_MAXBUILDING(3), new ACHIEVEMENT_MAXBUILDING(4),
    new ACHIEVEMENT_MAXBUILDING(5), new ACHIEVEMENT_MAXBUILDING(6), new ACHIEVEMENT_MAXBUILDING(7), new ACHIEVEMENT_MAXBUILDING(8), new ACHIEVEMENT_MAXBUILDING(9),
    new ACHIEVEMENT_MAXBUILDING(10),
    //---
    new ACHIEVEMENT_ALLBUILDING(),
    //---
    new ACHIEVEMENT_STAT('clickCount', [100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000]),
    new ACHIEVEMENT_STAT('evolutionCount', [10, 25, 50, 100, 250, 500, 1000, 2500, 5000]),
    new ACHIEVEMENT_STAT('ascensionCount', [1, 5, 10, 25, 50, 100, 250, 500, 1000]),
    new ACHIEVEMENT_STAT('techResearched', [Math.floor(TLEN * (1 / 9)), Math.floor(TLEN * (2 / 9)), Math.floor(TLEN * (3 / 9)), Math.floor(TLEN * (4 / 9)), Math.floor(TLEN * (5 / 9)), Math.floor(TLEN * (6 / 9)), Math.floor(TLEN * (7 / 9)), Math.floor(TLEN * (8 / 9)), TLEN]),
    new ACHIEVEMENT_STAT('techTime', [24*60*60*1000, 24*60*60*1000*2, 24*60*60*1000*3, 24*60*60*1000*4, 24*60*60*1000*5, 24*60*60*1000*6, 24*60*60*1000*7, 24*60*60*1000*10]),
]
//---
var FIBONACCI = [0,1]
function fib(n) {
    while (n >= FIBONACCI.length) FIBONACCI[FIBONACCI.length] = FIBONACCI[FIBONACCI.length - 1] + FIBONACCI[FIBONACCI.length - 2]
    return FIBONACCI[n]
}
//---
function fact(n) {
    if (n == 0) return 1
    return n * fact(n - 1)
}
//---
var BOOSTERS = [
    //---
    { cost: function(count) { return Math.pow(10, count) } },
    { cost: function(count) { return fib(count + 2) } },
    { cost: function(count) { return fact(count + 2) } },
    { cost: function(count) { return fact(count + 2) } },
]
//---
class Game {
    //---
    constructor() {
        //---
        this.name = 'Energy Idle'
        //---
        this.reset()
    }
    //---
    reset() {
        //---
        this.victory = false
        //---
        this.energy = { count:0, prod:0 }
        //---
        this.omega = 0
        //---
        this.buildAmount = 1
        //---
        this.buildings = []
        for (let i = 0; i < BUILDINGS.length; ++i) {
            this.buildings.push({ count:0, level:-1, upgrade:0, prod:0 })
        }
        //---
        this.techIdsToResearch = []
        this.techIdsToUnlock = []
        this.techIdsDone = []
        //---
        this.techsInProgress = {}
        this.currentTechId = undefined
        //---
        this.autoResearch = false
        //---
        this.currentEvolution = 0
        //---
        this.currentAchLevels = []
        this.currentBoosterCount = [0, 0, 0, 0]
        //---
        this.bonus = { clickProd:1, clickCoeff:1, globalCoeff:1 }
        //---
        this.stats = {
            //---
            currentRun: this.generateStatsObject(),
            allTime: this.generateStatsObject(),
        }
        //---
        this.init()
    }
    //---
    generateStatsObject() {
        return {
            //---
            energyProduced:0,
            energyClick:0,
            energyResearch:0,
            energyCountMax:0,
            energyProdMax:0,
            //---
            clickCount:0,
            //---
            omegaGained:0,
            omegaSpent:0,
            evolutionCount:0,
            ascensionCount:0,
            //---
            buildings: Array.apply(null, Array(BUILDINGS.length)).map(function() { return 0 }),
            maxBuildings: Array.apply(null, Array(BUILDINGS.length)).map(function() { return 0 }),
            //---
            timePlayed:0,
            timeOffline:0,
            //---
            techResearched:0,
            techTime:0,
        }
    }
    //---
    load(data) {
        //---
        if (data.victory) this.victory = data.victory
        //---
        if (data.energy) this.energy.count = data.energy
        //---
        if (data.omega) this.omega = data.omega
        //---
        if (data.buildAmount) this.buildAmount = data.buildAmount
        //---
        if (data.buildings)
            for (let i = 0; i < data.buildings.length; ++i) {
                //---
                if (data.buildings[i].count) this.buildings[i].count = data.buildings[i].count
                if (data.buildings[i].level != -1) this.buildings[i].level = data.buildings[i].level
                if (data.buildings[i].upgrade) this.buildings[i].upgrade = data.buildings[i].upgrade
            }
        //---
        if (data.techIdsDone) this.techIdsDone = data.techIdsDone
        //---
        if (data.techsInProgress) this.techsInProgress = data.techsInProgress
        if (data.currentTechId) this.currentTechId = data.currentTechId
        //---
        if (data.autoResearch) this.autoResearch = data.autoResearch
        //---
        if (data.currentEvolution) this.currentEvolution = data.currentEvolution
        //---
        if (data.currentBoosterCount) this.currentBoosterCount = data.currentBoosterCount
        //---
        if (data.bonus) this.bonus = data.bonus
        if (data.stats) this.stats = data.stats
    }
    //---
    init() {
        //---
        if (this.buildings[0].level < 0) this.buildings[0].level = 0
        //---
        this.refreshEnergyProd()
        this.refreshTechs()
        //---
        this.currentAchLevels = []
        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
            this.currentAchLevels[i] = ACHIEVEMENTS[i].getLevel(this)
        }
        //---
        this.notiftAch = []
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.victory = this.victory
        //---
        savedData.energy = this.energy.count
        //---
        savedData.omega = this.omega
        //---
        savedData.buildAmount = this.buildAmount
        //---
        savedData.buildings = []
        for (let i = 0; i < this.buildings.length; ++i) {
            savedData.buildings.push({ count:this.buildings[i].count, level:this.buildings[i].level, upgrade:this.buildings[i].upgrade })
        }
        //---
        savedData.techIdsDone = this.techIdsDone
        //---
        savedData.techsInProgress = this.techsInProgress
        savedData.currentTechId = this.currentTechId
        //---
        savedData.autoResearch = this.autoResearch
        //---
        savedData.currentEvolution = this.currentEvolution
        //---
        savedData.currentBoosterCount = this.currentBoosterCount
        //---
        savedData.bonus = this.bonus
        savedData.stats = this.stats
        //---
        return savedData
    }
    //---
    update(deltaMs) {
        //---
        this.stats.allTime.timePlayed += deltaMs / 1000
        this.stats.currentRun.timePlayed += deltaMs / 1000
        //---
        let prod = this.energy.prod * (deltaMs / 1000)
        this.energy.count += prod
        //---
        this.stats.allTime.energyProduced += prod
        this.stats.currentRun.energyProduced += prod
        //---
        if (this.energy.count > this.stats.allTime.energyCountMax) this.stats.allTime.energyCountMax = this.energy.count
        if (this.energy.count > this.stats.currentRun.energyCountMax) this.stats.currentRun.energyCountMax = this.energy.count
        //---
        if (prod > this.stats.allTime.energyProdMax) this.stats.allTime.energyProdMax = prod
        if (prod > this.stats.currentRun.energyProdMax) this.stats.currentRun.energyProdMax = prod
        //---
        if (this.currentTechId) {
            //---
            let boosterCoeff = Math.pow(1.1, this.currentBoosterCount[2])
            //---
            this.techsInProgress[this.currentTechId].done += prod * boosterCoeff
            //---
            this.stats.allTime.techTime += deltaMs / boosterCoeff / 1000
            this.stats.currentRun.techTime += deltaMs / boosterCoeff / 1000
            //---
            if (this.techsInProgress[this.currentTechId].done >= TECHS[this.currentTechId].cost) {
                //---
                this.techIdsDone.push(this.currentTechId)
                delete this.techsInProgress[this.currentTechId]
                this.evalRewards(TECHS[this.currentTechId].rewards)
                this.currentTechId = undefined
                //---
                this.stats.allTime.techResearched += 1
                this.stats.currentRun.techResearched += 1
                //---
                this.refreshTechs()
                this.refreshEnergyProd()
            }
            //---
            this.stats.allTime.energyResearch += prod * boosterCoeff
            this.stats.currentRun.energyResearch += prod * boosterCoeff
        }
        //---
        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
            let level = ACHIEVEMENTS[i].getLevel(this)
            if (level != this.currentAchLevels[i]) {
                this.currentAchLevels[i] = level
                this.notiftAch.push(i)
            }
        }
        //---
        return prod
    }
    //---
    isVictoryReached() {
        //---
        if (this.victory) return false
        //---
        return this.currentEvolution >= 11 ? true : false
    }
    //---
    refreshEnergyProd() {
        //---
        this.energy.prod = 0
        //---
        let achievementCoeff = 1 + 0.02 * this.getAchievementCount()
        //---
        let boosterCoeff = Math.pow(2, this.currentBoosterCount[0])
        //---
        for (let i = 0; i < this.buildings.length; ++i) {
            //---
            let building = this.buildings[i]
            building.prod = 0
            //---
            if (building.level >= 0) {
                //---
                let base = building.count * BUILDINGS[i].prod
                let levelCoeff = BUILDINGS[i].levelCoeffs[building.level]
                let upgradeCoeff = Math.pow(2, building.upgrade)
                let omegaCoeff = this.getOmegaCoeff()
                //---
                building.prod = base * levelCoeff * upgradeCoeff * achievementCoeff * omegaCoeff * boosterCoeff * this.bonus.globalCoeff
                //---
                this.energy.prod += building.prod
            }
        }
    }
    //---
    refreshTechs() {
        //---
        this.techIdsToResearch = []
        for (let techId in TECHS) {
            if (this.techIdsDone.indexOf(techId) == -1) {
                if (this.evalReqs(TECHS[techId].reqs)) this.techIdsToResearch.push(techId)
                if (this.techIdsToResearch.length >= 9) break
            }
        }
        //---
        this.techIdsToResearch.sort(function(a, b) { return TECHS[a].cost - TECHS[b].cost })
        //---
        if (this.currentTechId == undefined && this.techIdsToResearch.length > 0 && this.autoResearch) {
            //---
            let boosterCoeff = Math.pow(1.1, this.currentBoosterCount[2])
            let todo = TECHS[this.techIdsToResearch[0]].cost / (this.energy.prod * boosterCoeff)
            if (todo <= 0.001) this.doResearch(0)
        }
        //---
        this.techIdsToUnlock = []
        while (this.techIdsToResearch.length + this.techIdsToUnlock.length < 9) {
            let best = undefined
            for (let techId in TECHS) {
                if (this.techIdsDone.indexOf(techId) == -1 && this.techIdsToResearch.indexOf(techId) == -1 && this.techIdsToUnlock.indexOf(techId) == -1) {
                    if (best == undefined || TECHS[techId].cost < TECHS[best].cost) {
                        best = techId
                    }
                }
            }
            if (best == undefined) break
            this.techIdsToUnlock.push(best)
        }
    }
    //---
    doClick() {
        //---
        let prod = this.getClickProd()
        this.energy.count += prod
        //---
        this.stats.allTime.clickCount += 1
        this.stats.currentRun.clickCount += 1
        //---
        this.stats.allTime.energyClick += prod
        this.stats.currentRun.energyClick += prod
    }
    //---
    doBuildAmount() {
        //---
        this.buildAmount = NEXTBUILDAMOUNT[this.buildAmount]
    }
    //---
    doBuild(buildingId) {
        //---
        let building = this.buildings[buildingId]
        if (building.level >= 0) {
            //---
            let amount = this.buildAmount == 'MAX' ? this.getBuildingMax(buildingId) : (this.buildAmount == 'NXT' || this.buildAmount == 'MXT' ? this.getBuildingNext(buildingId, this.buildAmount == 'NXT') : this.buildAmount)
            let cost = this.getBuildingCost(buildingId, amount)
            if (cost <= this.energy.count) {
                //---
                this.energy.count -= cost
                building.count += amount
                //---
                this.stats.allTime.buildings[buildingId] += amount
                this.stats.currentRun.buildings[buildingId] += amount
                //---
                if (building.count > this.stats.allTime.maxBuildings[buildingId]) this.stats.allTime.maxBuildings[buildingId] = building.count
                if (building.count > this.stats.currentRun.maxBuildings[buildingId]) this.stats.currentRun.maxBuildings[buildingId] = building.count
                //---
                this.refreshEnergyProd()
                this.refreshTechs()
            }
        }
    }
    //---
    doAutoResearch() {
        //---
        this.autoResearch = !this.autoResearch
        //---
        this.refreshTechs()
    }
    //---
    doResearch(id) {
        //---
        let techId = this.techIdsToResearch[id]
        if (this.currentTechId == techId) this.currentTechId = undefined
        else {
            this.currentTechId = techId
            if (this.techsInProgress[techId] == undefined) {
                this.techsInProgress[techId] = { done:0, time:0 }
            }
        }
    }
    //---
    doEvolve() {
        //---
        if (this.currentEvolution + 1 < EVOLUTIONS.length && this.stats.currentRun.energyProduced >= EVOLUTIONS[this.currentEvolution + 1].cost) {
            //---
            this.currentEvolution += 1
            //---
            this.stats.allTime.evolutionCount += 1
            this.stats.currentRun.evolutionCount += 1
            //---
            this.evalRewards(EVOLUTIONS[this.currentEvolution].rewards)
            //---
            this.refreshEnergyProd()
            this.refreshTechs()
        }
    }
    //---
    doAscend() {
        //---
        let omegaGained = this.getAscendOmega()
        if (this.currentEvolution > 0 && omegaGained > 0) {
            //---
            this.energy = { count:0, prod:0 }
            //---
            this.omega += omegaGained
            //---
            this.stats.allTime.omegaGained += omegaGained
            this.stats.currentRun.omegaGained += omegaGained
            //---
            this.stats.allTime.ascensionCount += 1
            this.stats.currentRun.ascensionCount += 1
            //---
            this.buildAmount = 1
            //---
            for (let i = 0; i < BUILDINGS.length; ++i) {
                //---
                this.buildings[i].count = 0
                this.buildings[i].level = -1
                this.buildings[i].upgrade = 0
                this.buildings[i].prod = 0
            }
            //---
            this.techIdsToResearch = []
            this.techIdsToUnlock = []
            this.techIdsDone = []
            //---
            this.techsInProgress = {}
            this.currentTechId = undefined
            //---
            this.currentEvolution = 0
            //---
            this.bonus = { clickProd:1, clickCoeff:1, globalCoeff:1 }
            //---
            this.stats.currentRun = this.generateStatsObject()
            //---
            this.stats.allTime.omegaGained += omegaGained
            //---
            this.init()            
        }
    }
    //---
    doBooster(boosterId) {
        //---
        let cost = BOOSTERS[boosterId].cost(this.currentBoosterCount[boosterId])
        if (this.omega >= cost) {
            //---
            this.omega -= cost
            this.currentBoosterCount[boosterId] += 1
            //---
            this.stats.allTime.omegaSpent += cost
            this.stats.currentRun.omegaSpent += cost
            //---
            this.refreshEnergyProd()
            this.refreshTechs()
        }
    }
    //---
    evalReqs(reqs) {
        //---
        for (let i = 0; i < reqs.length; ++i) {
            //---
            if (reqs[i].type == 'tech' && this.techIdsDone.indexOf(reqs[i].value) == -1) return false
            else if (reqs[i].type == 'building' && this.buildings[reqs[i].key].count < reqs[i].value) return false
            else if (reqs[i].type == 'evolution' && this.currentEvolution < reqs[i].value) return false
            else if (reqs[i].type == 'allbuildings') {
                for (let j = 0; j < BUILDINGS.length; ++j) {                    
                    if (this.buildings[j].count < reqs[i].value)
                        return false
                }
            }
        }
        //---
        return true
    }
    //---
    evalRewards(rewards) {
        //---
        for (let i = 0; i < rewards.length; ++i) {
            //---
            if (rewards[i].type == 'level') this.buildings[rewards[i].key].level = rewards[i].value
            if (rewards[i].type == 'upgrade') this.buildings[rewards[i].key].upgrade = rewards[i].value
            else if (rewards[i].type == 'bonus') {
                //---
                if (rewards[i].key.indexOf('Coeff') != -1) this.bonus[rewards[i].key] *= rewards[i].value
                else this.bonus[rewards[i].key] += rewards[i].value
            }
        }
    }
    //---
    getClickProd() {
        //---
        let boosterProd = 0
        for (let i = 1; i <= this.currentBoosterCount[3]; ++i) {
            boosterProd += Math.pow(10, Math.floor(i / 10))
        }
        //---
        let ret = (this.bonus.clickProd + boosterProd) * this.bonus.clickCoeff
        return ret
    }
    //---
    getBuildingCost(buildingId, count) {
        //---
        let building = this.buildings[buildingId]
        //---
        let boosterCoeff = (100 + (this.currentBoosterCount[1] / 2)) / (100 + this.currentBoosterCount[1])
        //---
        let ret = (BUILDINGS[buildingId].cost * (Math.pow(BUILDINGS[buildingId].costCoeff, building.count) - Math.pow(BUILDINGS[buildingId].costCoeff, building.count + count)) / (1 - BUILDINGS[buildingId].costCoeff)) * boosterCoeff
        return ret
    }
    //---
    getBuildingMax(buildingId) {
        //---
        let energy = this.energy.count
        let building = this.buildings[buildingId]
        //---
        let boosterCoeff = (100 + (this.currentBoosterCount[1] / 2)) / (100 + this.currentBoosterCount[1])
        //---
        let ret = Math.floor(Math.log((-1 * (energy - BUILDINGS[buildingId].costCoeff * energy - (BUILDINGS[buildingId].cost * boosterCoeff * Math.pow(BUILDINGS[buildingId].costCoeff, building.count)))) / BUILDINGS[buildingId].cost) / Math.log(BUILDINGS[buildingId].costCoeff) - building.count)
        return ret > 1 ? ret : 1
    }
    //---
    getBuildingNext(buildingId, one) {
        //---
        if (!one) {
            //---
            let max = this.getBuildingMax(buildingId)
            let currentCount = this.buildings[buildingId].count
            for (let i = BUILDINGS[buildingId].nexts.length - 1; i > 0; --i) {
                if (BUILDINGS[buildingId].nexts[i] > currentCount && BUILDINGS[buildingId].nexts[i] <= currentCount + max)
                    return BUILDINGS[buildingId].nexts[i] - currentCount
            }
        }
        //---
        let currentCount = this.buildings[buildingId].count
        for (let i = 0; i < BUILDINGS[buildingId].nexts.length; ++i) {
            if (BUILDINGS[buildingId].nexts[i] > currentCount)
                return BUILDINGS[buildingId].nexts[i] - currentCount
        }
        //---
        return 0
    }
    //---
    getAchievementCount() {
        //---
        let ret = 0
        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
            ret += ACHIEVEMENTS[i].getLevel(this)
        }
        //---
        return ret
    }
    //---
    getAscendOmega() {
        //---
        let ret = Math.floor(Math.max(0, Math.sqrt(this.stats.allTime.energyProduced / 85e4) - 1)) - this.stats.allTime.omegaGained
        return ret
    }
    //---
    getOmegaCoeff(count) {
        //---
        count = count || this.stats.allTime.omegaGained
        if (count == 0) return 1
        //---
        let ret = 1 + (count / 200)
        return ret
    }
}
