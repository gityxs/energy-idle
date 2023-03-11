//---
var TplScreenGame = function(data) {
    //---
    let html = ''
    //---
    html += '<div id="screenGame" class="rounded p-2 bg-dark d-flex">'
        html += '<div class="flex-fill row g-2">'
            html += '<div class="col-3">'
                html += '<div class="h-100 rounded bg-body d-flex pt-2">'
                    html += '<div class="flex-fill row gy-2 gx-0 flex-column">'
                        html += '<div class="col-12 py-2">'
                            html += '<div class="row gx-2 align-items-center justify-content-center">'
                                html += '<div class="col-auto">'
                                    html += '<img src="logo.png" width="18px" height="18px" />'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<span class="h4 text-white">' + window.App.game.name + '</span>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<span class="badge bg-danger">Alpha Version</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="mt-4 flex-fill col-12">'
                            html += '<div class="row flex-column gy-1">'
                                html += '<div class="col-12">'
                                    html += '<div class="card card-header rounded mx-2 bg-gradient">'
                                        html += '<div class="row gx-2">'
                                            html += '<div class="col-auto">'
                                                html += '<img src="img/energy.png" width="18px" height="18px" />'
                                            html += '</div>'
                                            html += '<div class="col text-center">'
                                                html += '<span id="energy-count" class="h6 text-white"></span>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="col-12">'
                                    html += '<div class="card card-header rounded mx-2 bg-gradient">'
                                        html += '<div class="row gx-2">'
                                            html += '<div class="col-auto">'
                                                html += '<img src="img/prod.png" width="18px" height="18px" />'
                                            html += '</div>'
                                            html += '<div class="col text-center">'
                                                html += '<span id="energy-prod" class="h6 text-white"></span>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="col-12">'
                                    html += '<div class="card card-header rounded mx-2 bg-gradient">'
                                        html += '<div class="row gx-2">'
                                            html += '<div class="col-auto">'
                                                html += '<img src="img/omega.png" width="18px" height="18px" />'
                                            html += '</div>'
                                            html += '<div class="col text-center">'
                                                html += '<span id="omega-count" class="h6 text-white"></span>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div class="mt-4 px-2">'
                                html += '<button type="button" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doClick()">'
                                    html += '<img src="img/energy.png" width="12px" height="12px" />'
                                    html += '<span id="click-prod" class="ms-1"></span>'
                                html += '</button>'
                            html += '</div>'
                            html += '<div class="mt-4 px-2">'
                                html += '<div class="card card-header rounded bg-gradient">'
                                    html += '<div class="mb-2 text-center">'
                                        html += '<span id="evolution-name" class="h6 text-white"></span>'
                                    html += '</div>'
                                    html += '<div id="evolution-progress" class="progress position-relative">'
                                        html += '<div id="evolution-progressTitle" class="h-100 w-100 small text-white text-center position-absolute" style="padding-top:1px;"></div>'
                                        html += '<div id="evolution-progress-bar" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                    html += '</div>'
                                    html += '<div class="mt-2 text-center">'
                                        html += '<button type="button" id="evolution-btn" class="btn btn-sm btn-primary bg-gradient" onclick="window.App.game.doEvolve()">'
                                            html += 'Evolve'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div id="ascend-block" class="mt-4 px-2">'
                                html += '<div class="card card-header rounded bg-gradient">'
                                    html += '<div class="mb-1 text-center">'
                                        html += '<span class="h6 text-white">Ascension</span>'
                                    html += '</div>'
                                    html += '<div class="mb-2">'
                                        html += '<div class="row gx-2"><div class="col-6 text-end">Omega</div><div id="ascend-omega" class="col-6 text-white"></div></div>'
                                        html += '<div class="row gx-2"><div class="col-6 text-end">Production</div><div id="ascend-prod" class="col-6 text-white"></div></div>'
                                    html += '</div>'
                                    html += '<div class="text-center">'
                                        html += '<button type="button" id="ascend-btn" class="btn btn-sm btn-primary bg-gradient" onclick="window.App.showModal(\'modalAscend\')">'
                                            html += 'Ascend'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 py-2">'
                            html += '<div class="row gx-2 align-items-center justify-content-around">'
                                html += '<div class="col-auto">'
                                    html += '<a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" data-bs-toggle="tooltip" data-bs-title="Become a supporter">'
                                        html += '<img src="img/patreon.png" width="24px" height="24px" />'
                                    html += '</a>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<a href="https://ko-fi.com/freddecgames" target="_blank" data-bs-toggle="tooltip" data-bs-title="Buy me a Ko-fi">'
                                        html += '<img src="img/kofi.png" width="24px" height="24px" />'
                                    html += '</a>'
                                html += '</div>'
                                html += '<form class="col-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" data-bs-toggle="tooltip" data-bs-title="Make a donation">'
                                    html += '<input type="hidden" name="cmd" value="_s-xclick">'
                                    html += '<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">'
                                    html += '<button type="submit" class="btn p-0">'
                                        html += '<img src="img/paypal.png" width="24px" height="24px" />'
                                    html += '</button>'
                                html += '</form>'
                                html += '<div class="col-auto">'
                                    html += '<a href="https://discord.gg/3UkgeeT9CV" target="_blank" data-bs-toggle="tooltip" data-bs-title="Discord">'
                                        html += '<img src="img/discord.png" width="24px" height="24px" />'
                                    html += '</a>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="col-9 d-flex">'
                html += '<div class="flex-fill row g-2 flex-column">'
                    html += '<div class="col">'
                        html += '<div role="tablist" id="tab-game" class="nav nav-tabs">'
                            html += '<div role="presentation" class="nav-item">',
                                html += '<button type="button" role="tab" class="nav-link active" data-bs-toggle="tab" data-bs-target="#pane-buildings">'
                                    html += 'Generators'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item px-2 d-flex align-items-center">'
                                html += '<button class="btn btn-sm btn-primary bg-gradient" style="width:50px;" onclick="window.App.game.doBuildAmount()">'
                                    html += '<small id="build-amount"></small>'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="ms-auto nav-item">'
                                html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-tutorial">'
                                    html += 'Tutorial'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item">'
                                html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-settings">'
                                    html += 'Settings'
                                html += '</button>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="tab-content rounded-bottom bg-body scrollbar">'
                            html += '<div role="tabpanel" id="pane-buildings" class="tab-pane show active">'
                                html += '<div class="p-2">'
                                    html += '<div class="row gx-2 gy-2">'
                                        for (let i = 0; i < window.App.game.buildings.length; ++i) {
                                            html += '<div class="col-4">'
                                                html += '<button type="button" id="building-btn-' + i + '" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doBuild(' + i + ')">'
                                                    html += '<div class="row gx-2 justify-content-between mb-1">'
                                                        html += '<div class="col-auto">'
                                                            html += '<img src="img/gen' + i + '.png" width="14px" height="14px" />'
                                                            html += '<span class="ms-1">Generator #' + i + '</span>'
                                                        html += '</div>'
                                                        html += '<div class="col-auto">'
                                                            html += '<span id="building-count-' + i + '"></span>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    html += '<div class="row gx-2 justify-content-between">'
                                                        html += '<div class="col-auto">'                                                            
                                                            html += '<span id="building-cost-' + i + '"></span>'
                                                        html += '</div>'
                                                        html += '<div class="col-auto">'
                                                            html += '<span id="building-level-' + i + '"></span>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                html += '</button>'
                                            html += '</div>'
                                        }
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div role="tabpanel" id="pane-tutorial" class="tab-pane">'
                                html += '<div class="p-2">'
                                    html += '<div class="row gx-2 gy-2">'
                                        html += '<div class="col-6 px-2">'
                                            html += '<div class="mb-2"><span class="text-white">Getting started</span></div>'
                                            html += '<ol class="ps-3 mb-2">'
                                                html += '<li><span>Manually click to otain energy</span></li>'
                                                html += '<li><span>Buy generators more and more</span></li>'
                                                html += '<li><span>Research techs to improve generators</span></li>'
                                                html += '<li><span>Evolve to upgrade Generator #0</span></li>'
                                                html += '<li><span>Ascend to restart with Omega and boosters</span></li>'
                                                html += '<li><span>Beat the game by reaching Evolution #11</span></li>'
                                            html += '</ol>'
                                            html += '<div class="mb-2"><span class="text-white">Good luck!</span></div>'
                                        html += '</div>'
                                        html += '<div class="col-6 px-2">'
                                            html += '<div class="mb-2"><span class="text-white">About</span></div>'
                                            html += '<div class="mb-2"><span>This game has been designed and built with all the <i class="text-danger fas fa-heart"></i> love in the world by <span class="text-white">Freddec</span>!</span></div>'
                                            html += '<div class="mb-2"><span>This game is largely inspired by <a href="https://www.kongregate.com/games/GaiaByte/cosmos-quest" target="_blank">Cosmos Quest</a>, an older incremental game.</span></div>'
                                            html += '<div class="mb-2"><span>Icons are provided by <a href="https://www.flaticon.com/" target="_blank">Flaticon</a> and <a href="https://fontawesome.com/" target="_blank">Fontawesome</a>.</span></div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div role="tabpanel" id="pane-settings" class="tab-pane">'
                                html += '<div class="p-2">'
                                    html += '<div class="row gx-2 gy-2">'
                                        html += '<div class="col-6 px-2">'
                                            html += '<div class="mb-2"><span class="text-white">Local data</span></div>'
                                            html += '<textarea spellcheck="false" rows="5" class="form-control" style="max-width:512px;" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                                            html += '<div class="mt-0 row g-2">'
                                                html += '<div class="col-6">'
                                                    html += '<button type="button" class="w-100 btn btn-primary bg-gradient" onclick="window.App.exportSave()">'
                                                        html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                                        html += '<span class="ms-1">Copy to clipboard</span>'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div class="col-6">'
                                                    html += '<button type="button" class="w-100 btn btn-primary bg-gradient" onclick="window.App.downloadSave()">'
                                                        html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                                        html += '<span class="ms-1">Download TXT file</span>'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div class="col-6">'
                                                    html += '<button type="button" class="w-100 btn btn-danger bg-gradient" onclick="window.App.showModal(\'modalWipe\')">'
                                                        html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                                        html += '<span class="ms-1">Wipe Local Data</span>'
                                                    html += '</button>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                        html += '<div class="col-6 px-2">'
                                            html += '<div class="mb-2"><span class="text-white">Import save</span></div>'
                                            html += '<textarea id="importData" spellcheck="false" rows="5" class="form-control"></textarea>'
                                            html += '<div class="mt-2 text-end">'
                                                html += '<button type="button" class="w-50 btn btn-primary" onclick="window.App.importSave()">'
                                                    html += '<i class="fas fa-fw fa-file-import"></i>'
                                                    html += '<span class="ms-1">Import</span>'
                                                html += '</button>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    html += '<div class="col-auto" style="height:304px;">'
                        html += '<div role="tablist" id="tab-game" class="nav nav-tabs">'
                            html += '<div role="presentation" class="nav-item">'
                                html += '<button type="button" role="tab" class="nav-link active" data-bs-toggle="tab" data-bs-target="#pane-techs">'
                                    html += 'Techs'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item px-2 pt-2">'
                                 html += '<div class="form-check">'
                                    html += '<input class="form-check-input" type="checkbox" id="autoResearch" onclick="window.App.game.doAutoResearch()">'
                                    html += '<label class="form-check-label" for="autoResearch">Auto Research</label>'
                                 html += '</div>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item">'
                                html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-achievements">'
                                    html += 'Achievements'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item">'
                                html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-boosters">'
                                    html += 'Boosters'
                                html += '</button>'
                            html += '</div>'
                            html += '<div role="presentation" class="nav-item">'
                                html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-stats">'
                                    html += 'Stats'
                                html += '</button>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="tab-content rounded-bottom bg-body scrollbar">'
                            html += '<div role="tabpanel" id="pane-techs" class="tab-pane show active">'
                                html += '<div class="p-2">'
                                    html += '<div class="row gx-2 gy-2">'
                                        for (let i = 0; i < 9; ++i) {
                                            html += '<div class="col-4">'
                                                html += '<button type="button" id="tech-btn-' + i + '" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doResearch(' + i + ')">'
                                                    html += '<div class="text-start mb-1">'
                                                        html += '<span id="tech-name-' + i + '"></span>'
                                                    html += '</div>'
                                                    html += '<div id="tech-descLine-' + i + '" class="text-start mb-1">'
                                                        html += '<span id="tech-desc-' + i + '"></span>'
                                                    html += '</div>'
                                                    html += '<div id="tech-progress-' + i + '" class="progress position-relative">'
                                                        html += '<div id="tech-progressTitle-' + i + '" class="h-100 w-100 small text-white text-center position-absolute" style="padding-top:1px;"></div>'
                                                        html += '<div id="tech-progress-bar-' + i + '" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                                    html += '</div>'
                                                html += '</button>'
                                            html += '</div>'
                                        }
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div role="tabpanel" id="pane-achievements" class="tab-pane">'
                                html += '<div class="p-2">'
                                    html += '<div class="row gx-3 align-items-center mb-2">'
                                        html += '<div class="col-auto">'
                                            html += '<span id="achievement-current" class="text-white"></span>'
                                            html += ' <small id="achievement-total"></small>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<small>current bonus</small>'
                                            html += '<span id="achievement-bonus" class="text-white"></span>'
                                        html += '</div>'
                                    html += '</div>'
                                    html += '<div class="row g-2">'
                                        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
                                            html += '<div class="col-1">'
                                                html += '<div id="achievement-card-' + i + '" class="card card-header bg-gradient rounded px-2 text-center flex-row align-items-baseline justify-content-center" data-bs-toggle="tooltip" data-bs-title="Achievement">'
                                                    html += '<span id="achievement-text-' + i + '" class="text-white"></span>'
                                                html += '</div>'
                                            html += '</div>'
                                        }
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div role="tabpanel" id="pane-boosters" class="tab-pane">'
                                html += '<div class="p-2">'
                                    html += '<div class="row g-2 align-items-center justify-content-center">'
                                        html += '<div class="col-3">'
                                            html += '<button type="button" id="booster-btn-0" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doBooster(0)">'
                                                html += '<div class="mb-1"><span>Doubles production</span></div>'
                                                html += '<div class="mb-1"><span id="booster-count-0"></span></div>'
                                                html += '<div class="lh-1">'
                                                    html += '<img src="img/omega.png" width="14px" height="14px" />'
                                                    html += '<span id="booster-cost-0" class="ms-1"></span>'
                                                html += '</div>'
                                            html += '</button>'
                                        html += '</div>'
                                        html += '<div class="col-3">'
                                            html += '<button type="button" id="booster-btn-1" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doBooster(1)">'
                                                html += '<div class="mb-1"><span>-0.5% generator cost</span></div>'
                                                html += '<div class="mb-1"><span id="booster-count-1"></span></div>'
                                                html += '<div class="lh-1">'
                                                    html += '<img src="img/omega.png" width="14px" height="14px" />'
                                                    html += '<span id="booster-cost-1" class="ms-1"></span>'
                                                html += '</div>'
                                            html += '</button>'
                                        html += '</div>'
                                        html += '<div class="col-3">'
                                            html += '<button type="button" id="booster-btn-2" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doBooster(2)">'
                                                html += '<div class="mb-1"><span>10% faster tech</span></div>'
                                                html += '<div class="mb-1"><span id="booster-count-2"></span></div>'
                                                html += '<div class="lh-1">'
                                                    html += '<img src="img/omega.png" width="14px" height="14px" />'
                                                    html += '<span id="booster-cost-2" class="ms-1"></span>'
                                                html += '</div>'
                                            html += '</button>'
                                        html += '</div>'
                                        html += '<div class="col-3">'
                                            html += '<button type="button" id="booster-btn-3" class="w-100 btn btn-secondary bg-gradient" onclick="window.App.game.doBooster(3)">'
                                                html += '<div class="mb-1"><span>Increase base click</span></div>'
                                                html += '<div class="mb-1"><span id="booster-count-3"></span></div>'
                                                html += '<div class="lh-1">'
                                                    html += '<img src="img/omega.png" width="14px" height="14px" />'
                                                    html += '<span id="booster-cost-3" class="ms-1"></span>'
                                                html += '</div>'
                                            html += '</button>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div role="tabpanel" id="pane-stats" class="h-100 tab-pane">'
                                html += '<div class="h-100 p-2 d-flex">'
                                    html += '<div class="flex-fill row gx-3">'
                                        html += '<div class="col-3">'
                                            html += '<div role="tablist" id="tab-stats" class="nav nav-pills nav-fill flex-column">'
                                                html += '<div role="presentation" class="nav-item">'
                                                    html += '<button type="button" role="tab" class="nav-link active" data-bs-toggle="tab" data-bs-target="#pane-stats-energy">'
                                                        html += 'Energy'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div role="presentation" class="nav-item">'
                                                    html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-stats-generatorsCount">'
                                                        html += 'Generators count'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div role="presentation" class="nav-item">'
                                                    html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-stats-generatorsMax">'
                                                        html += 'Generators max'
                                                    html += '</button>'
                                                html += '</div>'
                                                html += '<div role="presentation" class="nav-item">'
                                                    html += '<button type="button" role="tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#pane-stats-game">'
                                                        html += 'Game'
                                                    html += '</button>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                        html += '<div class="col-9 h-100 tab-content scrollbar">'
                                            html += '<div role="tabpanel" id="pane-stats-energy" class="tab-pane show active">'
                                                html += '<div class="row flex-column gy-2">'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row gx-2 align-items-center">'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2 text-end"><span>This run</span></div>'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2"><span>All time</span></div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    let stats = [
                                                        { id:'energyProduced', label:'Total energy produced' },
                                                        { id:'energyClick', label:'Total energy clicked' },
                                                        { id:'energyResearch', label:'Energy spent in research' },
                                                        { id:'energyCountMax', label:'Max energy stored' },
                                                        { id:'energyProdMax', label:'Max energy production' },
                                                    ]
                                                    for (let i = 0; i < stats.length; ++i) {
                                                        let stat = stats[i]
                                                        html += '<div class="col-12">'
                                                            html += '<div class="row gx-2 align-items-center">'
                                                                html += '<div class="col-4"><span>' + stat.label + '</span></div>'
                                                                html += '<div class="col-2 text-end"><span id="stat-current-' + stat.id + '" class="text-white"></span></div>'
                                                                html += '<div class="col-4">'
                                                                    html += '<div class="progress bg-dark" style="height:5px;">'
                                                                        html += '<div id="stat-progress-' + stat.id + '" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                                html += '<div class="col-2"><span id="stat-alltime-' + stat.id + '" class="text-white"></span></div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    }
                                                html += '</div>'
                                            html += '</div>'
                                            html += '<div role="tabpanel" id="pane-stats-generatorsCount" class="tab-pane">'
                                                html += '<div class="row flex-column gy-2">'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row gx-2 align-items-center">'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2 text-end"><span>This run</span></div>'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2"><span>All time</span></div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    for (let i = 0; i < BUILDINGS.length; ++i) {
                                                        html += '<div class="col-12">'
                                                            html += '<div class="row gx-2 align-items-center">'
                                                                html += '<div class="col-4"><span>Generator #' + i + ' count</span></div>'
                                                                html += '<div class="col-2 text-end"><span id="stat-current-buildingCount' + i + '" class="text-white"></span></div>'
                                                                html += '<div class="col-4">'
                                                                    html += '<div class="progress bg-dark" style="height:5px;">'
                                                                        html += '<div id="stat-progress-buildingCount' + i + '" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                                html += '<div class="col-2"><span id="stat-alltime-buildingCount' + i + '" class="text-white"></span></div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    }
                                                html += '</div>'
                                            html += '</div>'
                                            html += '<div role="tabpanel" id="pane-stats-generatorsMax" class="tab-pane">'
                                                html += '<div class="row flex-column gy-2">'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row gx-2 align-items-center">'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2 text-end"><span>This run</span></div>'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2"><span>All time</span></div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    for (let i = 0; i < BUILDINGS.length; ++i) {
                                                        html += '<div class="col-12">'
                                                            html += '<div class="row gx-2 align-items-center">'
                                                                html += '<div class="col-4"><span>Generator #' + i + ' max</span></div>'
                                                                html += '<div class="col-2 text-end"><span id="stat-current-buildingMax' + i + '" class="text-white"></span></div>'
                                                                html += '<div class="col-4">'
                                                                    html += '<div class="progress bg-dark" style="height:5px;">'
                                                                        html += '<div id="stat-progress-buildingMax' + i + '" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                                html += '<div class="col-2"><span id="stat-alltime-buildingMax' + i + '" class="text-white"></span></div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    }
                                                html += '</div>'
                                            html += '</div>'
                                            html += '<div role="tabpanel" id="pane-stats-game" class="tab-pane">'
                                                html += '<div class="row flex-column gy-2">'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row gx-2 align-items-center">'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2 text-end"><span>This run</span></div>'
                                                            html += '<div class="col-4"></div>'
                                                            html += '<div class="col-2"><span>All time</span></div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    stats = [
                                                        { id:'timePlayed', label:'Time played' },
                                                        { id:'timeOffline', label:'Offline time' },
                                                        { id:'techResearched', label:'Total tech researched' },
                                                        { id:'techTime', label:'Time spent in research' },
                                                        { id:'clickCount', label:'Total clicks' },
                                                        { id:'omegaGained', label:'Total omega gained' },
                                                        { id:'omegaSpent', label:'Total omega spent' },
                                                        { id:'evolutionCount', label:'Total evolution count' },
                                                        { id:'ascensionCount', label:'Total ascension count' },
                                                    ]
                                                    for (let i = 0; i < stats.length; ++i) {
                                                        let stat = stats[i]
                                                        html += '<div class="col-12">'
                                                            html += '<div class="row gx-2 align-items-center">'
                                                                html += '<div class="col-4"><span>' + stat.label + '</span></div>'
                                                                html += '<div class="col-2 text-end"><span id="stat-current-' + stat.id + '" class="text-white"></span></div>'
                                                                html += '<div class="col-4">'
                                                                    html += '<div class="progress bg-dark" style="height:5px;">'
                                                                        html += '<div id="stat-progress-' + stat.id + '" class="progress-bar bg-success bg-gradient" role="progressbar" style="width:0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                                html += '<div class="col-2"><span id="stat-alltime-' + stat.id + '" class="text-white"></span></div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    }
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
            html += TplToastExport()
            html += TplToastNewAchievement()
            html += TplToastImportEmpty()
            html += TplToastImportCorrupted()
        html += '</div>'
    html += '</div>'
    html += TplModalDisclaimer()
    html += TplModalOffline()
    html += TplModalWipe()
    html += TplModalAscend()
    html += TplModalVictory()
    //---
    return html
}
//---
class ScreenGame {
    //---
    init(data) {
        //---
        let node = document.getElementById('screen')
        //---
        node.classList.add('d-flex')
        node.classList.add('align-items-center')
        node.classList.add('justify-content-center')
        //---
        node.innerHTML = TplScreenGame(data)
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        //---
        window.App.mainloop()
        //---
        window.App.saveInterval = setInterval(() => { window.App.save() }, 30000)
        //---
        window.App.showModal('modalDisclaimer')
        //---
        let total = 0
        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
            total += ACHIEVEMENTS[i].steps.length
        }
        //---
        node = document.getElementById('achievement-total')
        let html = '<small>/' + formatNumber(total) + '</small>'
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('autoResearch')
        if (window.App.game.autoResearch) node.checked = true
    }
    //---
    draw(deltaMs) {
        //---
        let node, html
        //---
        node = document.getElementById('energy-count')
        html = formatNumber(window.App.game.energy.count, 2)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('energy-prod')
        html = '<small class="opacity-50">+</small> ' + formatNumber(window.App.game.energy.prod) + ' <small class="opacity-50">/s</small>'
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('omega-count')
        html = formatNumber(window.App.game.omega)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('click-prod')
        html = '<small class="opacity-50">+</small> ' + formatNumber(window.App.game.getClickProd())
        if (node.innerHTML != html) node.innerHTML = html
        //---
        this.drawEvolution()
        this.drawAscension()
        //---
        node = document.getElementById('build-amount')
        if (window.App.game.buildAmount == 1) html = '+1'
        else if (window.App.game.buildAmount == 10) html = '+10'
        else if (window.App.game.buildAmount == 25) html = '+25'
        else if (window.App.game.buildAmount == 100) html = '+100'
        else if (window.App.game.buildAmount == 'MAX') html = 'MAX'
        else if (window.App.game.buildAmount == 'NXT') html = 'NXT'
        else if (window.App.game.buildAmount == 'MXT') html = 'MXT'
        if (node.innerHTML != html) node.innerHTML = html
        //---
        for (let i = 0; i < window.App.game.buildings.length; ++i) {
            //---
            let building = window.App.game.buildings[i]
            if (building.level >= 0) {
                //---
                let buildAmount = window.App.game.buildAmount
                let amount = buildAmount == 'MAX' ? window.App.game.getBuildingMax(i) : (buildAmount == 'NXT' || buildAmount == 'MXT' ? window.App.game.getBuildingNext(i, buildAmount == 'NXT') : buildAmount)
                let cost = window.App.game.getBuildingCost(i, amount)
                //---
                node = document.getElementById('building-btn-' + i)
                node.classList.remove('d-none')
                if (cost > window.App.game.energy.count) { if (node.disabled != true) node.disabled = true }
                else if (node.disabled == true) node.disabled = false
                //---
                node = document.getElementById('building-count-' + i)
                html = '<small class="opacity-50">x</small> ' + formatNumber(building.count)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                node = document.getElementById('building-cost-' + i)
                html = ''
                if (buildAmount != 1) html += '<small class="me-2 opacity-50">+' + formatNumber(amount) + '</small>'
                html += '<img src="img/energy.png" width="14px" height="14px"> '
                html += formatNumber(cost)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                node = document.getElementById('building-level-' + i)
                html = '<small class="opacity-50">lvl</small> ' + building.level + '.' + building.upgrade
                if (node.innerHTML != html) node.innerHTML = html
            }
            else {
                //---
                node = document.getElementById('building-btn-' + i)
                if (!('d-none' in node.classList)) node.classList.add('d-none')
            }
        }
        //---
        let currentTechHtmlId = 0
        //---
        for (let techName of window.App.game.techIdsToResearch) {
            //---
            node = document.getElementById('tech-btn-' + currentTechHtmlId)
            if (node.disabled == true) node.disabled = false
            //---
            if (techName == window.App.game.currentTechId && (!('btn-primary' in node.classList))) node.classList.add('btn-primary')
            else node.classList.remove('btn-primary')
            //---
            let tech = TECHS[techName]
            let reward = tech.rewards[0]
            //---
            node = document.getElementById('tech-name-' + currentTechHtmlId)
            if (reward.key == 'clickCoeff') html = 'Improve manual click'
            else if (reward.key == 'globalCoeff') html = 'Improve all productions'
            else if (reward.type == 'level') html = 'Discovery'
            else if (reward.type == 'upgrade') html = 'Improve Generator #' + reward.key
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('tech-desc-' + currentTechHtmlId)
            if (reward.key == 'clickCoeff') html = 'Manual click gain <small class="opacity-50">x</small> ' + reward.value
            else if (reward.key == 'globalCoeff') {
                if (reward.value == 2) html = 'Double all productions'
                else if (reward.value == 3) html = 'Triple all productions'
            }
            else if (reward.type == 'level') {
                if (reward.value == 0) html = 'A new type of generator'
                else html = 'Generator #' + reward.key + ' next level'
            }
            else if (reward.type == 'upgrade') html = 'Double production'
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('tech-descLine-' + currentTechHtmlId)
            if ('text-start' in node.classList) node.classList.remove('text-start')
            if (!('text-end' in node.classList)) node.classList.add('text-end')
            //---
            node = document.getElementById('tech-progress-' + currentTechHtmlId)
            node.classList.remove('bg-transparent')
            //---
            node = document.getElementById('tech-progressTitle-' + currentTechHtmlId)
            if (techName == window.App.game.currentTechId) {
                let boosterCoeff = Math.pow(1.1, window.App.game.currentBoosterCount[2])
                let time = ((TECHS[window.App.game.currentTechId].cost - window.App.game.techsInProgress[window.App.game.currentTechId].done) / boosterCoeff) / window.App.game.energy.prod
                html = formatTime(time)
            }
            else {
                let todo = (window.App.game.techsInProgress[techName] ? TECHS[techName].cost - window.App.game.techsInProgress[techName].done : TECHS[techName].cost)
                html = '<img src="img/energy.png" width="8px" height="8px"> ' + formatNumber(todo)
            }
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('tech-progress-bar-' + currentTechHtmlId)
            let percent = 0
            if (techName in window.App.game.techsInProgress) percent = 100 * window.App.game.techsInProgress[techName].done / TECHS[techName].cost
            if (node.style.width != percent + '%') node.style.width = percent + '%'
            //---
            currentTechHtmlId++
        }
        //---
        for (let techName of window.App.game.techIdsToUnlock) {
            //---
            node = document.getElementById('tech-btn-' + currentTechHtmlId)
            if (node.disabled != true) node.disabled = true
            node.classList.remove('btn-primary')
            //---
            let tech = TECHS[techName]
            let req = tech.reqs[0]
            //---
            node = document.getElementById('tech-name-' + currentTechHtmlId)
            if (req.type == 'building') html = 'Build'
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('tech-desc-' + currentTechHtmlId)
            if (req.type == 'building') html = req.value + ' Generators #' + req.key
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('tech-descLine-' + currentTechHtmlId)
            node.classList.remove('text-end')
            //---
            node = document.getElementById('tech-progress-' + currentTechHtmlId)
            if (!('bg-transparent' in node.classList)) node.classList.add('bg-transparent')
            //---
            node = document.getElementById('tech-progressTitle-' + currentTechHtmlId)
            if (node.innerHTML != '') node.innerHTML = ''
            //---
            node = document.getElementById('tech-progress-bar-' + currentTechHtmlId)
            if (node.style.width != '0%') node.style.width = '0%'
            //---
            currentTechHtmlId++
        }
        //---
        this.drawAchievements()
        this.drawBoosters()
        this.drawStats()
    }
    //---
    drawEvolution() {
        //---
        let node, html
        //---
        node = document.getElementById('evolution-name')
        html = 'Evolution #' + window.App.game.currentEvolution
        if (node.innerHTML != html) node.innerHTML = html
        //---
        let time = window.App.game.energy.prod ? (EVOLUTIONS[window.App.game.currentEvolution + 1].cost - window.App.game.stats.currentRun.energyProduced) / window.App.game.energy.prod : 0
        let percent = 100 * Math.min(1, window.App.game.stats.currentRun.energyProduced / EVOLUTIONS[window.App.game.currentEvolution + 1].cost)
        percent = formatNumber(percent, 2)
        //---
        node = document.getElementById('evolution-progressTitle')
        html = '<span>' + percent + '%</span>' + (time > 0 ? '<span class="ms-3">' + formatTime(time) + '</span>' : '')
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('evolution-progress-bar')
        if (node.style.width != percent + '%') node.style.width = percent + '%'
        //---
        node = document.getElementById('evolution-btn')
        if (percent < 100) node.disabled = true
        else node.disabled = false
    }
    //---
    drawAscension() {
        //---
        let node, html
        //---
        if (window.App.game.currentEvolution > 0) {
            //---
            node = document.getElementById('ascend-block')
            node.classList.remove('d-none')
            //---
            let omega = window.App.game.getAscendOmega()
            omega = omega >= 0 ? omega : 0
            //---
            node = document.getElementById('ascend-omega')
            html = '<img src="img/omega.png" width="12px" height="12px" class="ms-1"><small class="ms-2 opacity-50">+</small> ' + formatNumber(omega)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('modal-ascend-omega')
            html = '<img src="img/omega.png" width="12px" height="12px" class="ms-1"><small class="ms-2 opacity-50">+</small> ' + formatNumber(omega)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            let prod = (window.App.game.getOmegaCoeff(window.App.game.stats.allTime.omegaGained + omega) / window.App.game.getOmegaCoeff()) || 1
            //---
            node = document.getElementById('ascend-prod')
            html = '<img src="img/prod.png" width="12px" height="12px" class="ms-1"><small class="ms-2 opacity-50">x</small> ' + formatNumber(prod, 2)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('modal-ascend-prod')
            html = '<img src="img/prod.png" width="12px" height="12px" class="ms-1"><small class="ms-2 opacity-50">x</small> ' + formatNumber(prod, 2)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('ascend-btn')
            if (omega <= 0) { if (node.disabled != true) node.disabled = true }
            else if (node.disabled != false) node.disabled = false
        }
        else {
            //---
            node = document.getElementById('ascend-block')
            if (!('d-none' in node.classList)) node.classList.add('d-none')
        }
    }
    //---
    drawAchievements() {
        //---
        let node, html
        //---
        let count = window.App.game.getAchievementCount()
        //---
        node = document.getElementById('achievement-current')
        html = formatNumber(count)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('achievement-bonus')
        html = '<small class="ms-2 opacity-50">x</small> ' + formatNumber(1 + 0.02 * count, 2)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        for (let i = 0; i < ACHIEVEMENTS.length; ++i) {
            //---
            let ach = ACHIEVEMENTS[i]
            let level = window.App.game.currentAchLevels[i]
            if (level > 0) {
                //---
                node = document.getElementById('achievement-card-' + i)
                let value = node.getAttribute('data-bs-title')
                let newValue = ''
                if (ach.type == 'buildingCount') { newValue = 'Have ' + ach.steps[level] + ' Generators #' + ach.key }
                else if (ach.type == 'buildingMax') { newValue = 'Build ' + ach.steps[level] + ' Generators #' + ach.key }
                else if (ach.type == 'allBuildings') { newValue = 'Build ' + ach.steps[level] + ' Generators'}
                else if (ach.key == 'clickCount') { newValue = 'Click ' + ach.steps[level] + ' times'}
                else if (ach.key == 'evolutionCount') { newValue = 'Evolve ' + ach.steps[level] + ' times'}
                else if (ach.key == 'ascensionCount') { newValue = 'Ascend ' + ach.steps[level] + ' times'}
                else if (ach.key == 'techResearched') { newValue = 'Research ' + ach.steps[level] + ' techs'}
                else if (ach.key == 'techTime') { newValue = 'Spend ' + formatTime(ach.steps[level]) + ' in research'}
                if (newValue != value) {
                    node.setAttribute('data-bs-title', newValue)
                    new bootstrap.Tooltip(node)
                }
                node.classList.remove('opacity-50')
                //---
                node = document.getElementById('achievement-text-' + i)
                html = formatNumber(level) + '<small class="ms-1 opacity-50">/' + ach.steps.length + '</small>'
                if (node.innerHTML != html) node.innerHTML = html
            }
            else {
                //---
                node = document.getElementById('achievement-card-' + i)
                let value = node.getAttribute('data-bs-title')
                let newValue = 'Locked'
                if (newValue != value) {
                    node.setAttribute('data-bs-title', newValue)
                    new bootstrap.Tooltip(node)
                }
                if (!('opacity-50' in node.classList)) node.classList.add('opacity-50')
                //---
                node = document.getElementById('achievement-text-' + i)
                html = '<i class="fas fa-lock small opacity-50"></i>'
                if (node.innerHTML != html) node.innerHTML = html
            }
        }
        //---
        if (window.App.game.notiftAch.length > 0) {
            //---
            window.App.showToast('toastNewAchievement')
            window.App.game.notiftAch = []
        }
    }
    //---
    drawBoosters() {
        //---
        let node, html
        //---
        for (let i = 0; i < BOOSTERS.length; ++i) {
            //---
            let count = window.App.game.currentBoosterCount[i]
            //---
            node = document.getElementById('booster-count-' + i)
            html = '<small class="me-1 opacity-50">x</small>' + formatNumber(count)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            let cost = BOOSTERS[i].cost(count)
            //---
            node = document.getElementById('booster-cost-' + i)
            html = formatNumber(cost)
            if (node.innerHTML != html) node.innerHTML = html
            //---
            node = document.getElementById('booster-btn-' + i)
            if (cost > window.App.game.omega) { if (node.disabled != true) node.disabled = true }
            else if (node.disabled != false) node.disabled = false
        }
    }
    //---
    displayStatNumber(statId, currentRun, allTime, decimal=0) {
        //---
        let node, html
        //---
        node = document.getElementById('stat-current-' + statId)
        html = formatNumber(currentRun, decimal)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('stat-alltime-' + statId)
        html = formatNumber(allTime, decimal)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('stat-progress-' + statId)
        let percent = 100 * currentRun / allTime
        if (node.style.width != percent + '%') node.style.width = percent + '%'
    }
    //---
    displayStatTime(statId, currentRun, allTime) {
        //---
        let node, html
        //---
        node = document.getElementById('stat-current-' + statId)
        html = formatTime(currentRun)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('stat-alltime-' + statId)
        html = formatTime(allTime)
        if (node.innerHTML != html) node.innerHTML = html
        //---
        node = document.getElementById('stat-progress-' + statId)
        let percent = 100 * currentRun / allTime
        if (node.style.width != percent + '%') node.style.width = percent + '%'
    }
    //---
    drawStats() {
        //---
        let node, html
        //---
        let currentRun = window.App.game.stats.currentRun
        let allTime = window.App.game.stats.allTime
        //---
        this.displayStatNumber('energyProduced', currentRun['energyProduced'], allTime['energyProduced'], 2)
        this.displayStatNumber('energyClick', currentRun['energyClick'], allTime['energyClick'])
        this.displayStatNumber('energyResearch', currentRun['energyResearch'], allTime['energyResearch'], 2)
        this.displayStatNumber('energyCountMax', currentRun['energyCountMax'], allTime['energyCountMax'], 2)
        this.displayStatNumber('energyProdMax', currentRun['energyProdMax'], allTime['energyProdMax'])
        //---
        for (let i = 0; i < BUILDINGS.length; ++i) {
            //---
            this.displayStatNumber('buildingCount' + i, currentRun.buildings[i], allTime.buildings[i])
            this.displayStatNumber('buildingMax' + i, currentRun.maxBuildings[i], allTime.maxBuildings[i])
        }
        //---
        this.displayStatTime('timePlayed', currentRun['timePlayed'], allTime['timePlayed'])
        this.displayStatTime('timeOffline', currentRun['timeOffline'], allTime['timeOffline'])
        this.displayStatNumber('techResearched', currentRun['techResearched'], allTime['techResearched'])
        this.displayStatTime('techTime', currentRun['techTime'], allTime['techTime'])
        this.displayStatNumber('clickCount', currentRun['clickCount'], allTime['clickCount'])
        this.displayStatNumber('omegaGained', currentRun['omegaGained'], allTime['omegaGained'])
        this.displayStatNumber('omegaSpent', currentRun['omegaSpent'], allTime['omegaSpent'])
        this.displayStatNumber('evolutionCount', currentRun['evolutionCount'], allTime['evolutionCount'])
        this.displayStatNumber('ascensionCount', currentRun['ascensionCount'], allTime['ascensionCount'])
    }
}