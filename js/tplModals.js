//---
var TplModalWipe = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalWipe" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header bg-gradient">'
                    html += '<span class="h6 text-white">Wipe Local Data</span>'
                    html += '<button type="button" class="btn btn-dismiss" data-bs-dismiss="modal">'
                       html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body">'
                    html += '<div class="text-center text-white">Are you sure to want to wipe your local data ?</div>'
                    html += '<div class="text-danger text-center">You will lost all your progression and restart from the beginning.</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-danger bg-gradient" onclick="window.App.wipeSave()">'
                        html += 'Wipe'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalDisclaimer = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalDisclaimer" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header bg-gradient">'
                    html += '<span class="h6 text-white">Welcome</span>'
                    html += '<button type="button" class="btn p-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body text-center">'
                    html += '<div class="text-normal mb-2"><span class="badge bg-danger">Alpha Version</span></div>'
                    html += '<div class="text-danger">This game is still under development with bugs and maybe data lost!<br>Play as your own risks!</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-secondary bg-gradient" data-bs-dismiss="modal">'
                        html += 'Close'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalOffline = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalOffline" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header bg-gradient">'
                    html += '<span class="h6 text-white">Offline Gains</span>'
                    html += '<button type="button" class="btn p-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body">'
                    html += '<div class="text-center text-normal">Welcome back!</div>'
                    html += '<div class="text-center text-white">You were away <span id="offlineTime"></span></div>'
                    html += '<div class="text-center text-white"><span id="energyProduced"></span> energy produced</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-secondary bg-gradient" data-bs-dismiss="modal">'
                        html += 'Close'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalAscend = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalAscend" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header bg-gradient">'
                    html += '<span class="h6 text-white">Ascension</span>'
                    html += '<button type="button" class="btn p-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body">'
                    html += '<div class="text-center text-white mb-2">Are you sure to want to ascend?</div>'
                    html += '<div class="text-center text-normal mb-2">You will lose your progression but you will win</div>'
                    html += '<div class="mb-2">'
                        html += '<div class="row gx-2"><div class="col-6 text-end">Omega</div><div id="modal-ascend-omega" class="col-6 text-white"></div></div>'
                        html += '<div class="row gx-2"><div class="col-6 text-end">Production</div><div id="modal-ascend-prod" class="col-6 text-white"></div></div>'
                    html += '</div>'
                    html += '<div class="text-center">'
                        html += '<button type="button" id="ascend-btn" class="btn btn-sm btn-primary bg-gradient" data-bs-dismiss="modal" onclick="window.App.game.doAscend()">'
                            html += 'Ascend'
                        html += '</button>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalVictory = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalVictory" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header bg-gradient">'
                    html += '<span class="h6 text-white">Victory</span>'
                    html += '<button type="button" class="btn p-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body">'
                    html += '<div class="text-center h5 text-white">Congratulations</div>'
                    html += '<div class="mt-3 text-center text-normal">'
                        html += '<img src="img/victory.png" width="32px" height="32px" />'
                    html += '</div>'
                    html += '<div class="text-center text-normal mt-3">You beat the game!</div>'
                    html += '<div class="mt-3 text-center">Now you have the choice to continue playing in this game or to try another Freddec games <a href="https://freddecgames.com/" target="_blank">here</a>.</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-secondary bg-gradient" data-bs-dismiss="modal">'
                        html += 'Close'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
