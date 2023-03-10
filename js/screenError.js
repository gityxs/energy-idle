//---
var TplScreenError = function(data) {
    //---
    let html = ''
    //---
    html += '<div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">'
        html += '<div class="p-3">'
            html += '<div class="card card-body bg-gradient">'
                html += '<div class="row g-3 flex-column">'
                    html += '<div class="col-12 text-center">'
                        html += '<img src="logo.png" width="64px" height="64px" />'
                    html += '</div>'
                    html += '<div class="col-12 text-center">'
                        html += '<div class="h4 text-white">' + window.App.game.name + '</div>'
                    html += '</div>'
                    html += '<div class="col-12 text-center">'
                        html += '<div class="row g-3 flex-column">'
                            html += '<div class="col-12 text-center">'
                                html += '<div class="text-danger">An error occured during game loading</div>'
                                html += '<div class="text-danger">"' + data.error + '"</div>'
                            html += '</div>'
                            html += '<div class="col-12">'
                                html += '<span class="text-normal">To ask for help, you could contact <span class="text-white">Freddec</span> on Discord with following exported data</span>'
                            html += '</div>'
                            html += '<div class="col-12 d-flex justify-content-center">'
                                html += '<a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary bg-gradient">'
                                    html += '<span><i class="fab fa-fw fa-discord"></i></span>'
                                    html += '<span class="ms-1">Discord</span>'
                                html += '</a>'
                            html += '</div>'
                            html += '<div class="col-12 d-flex justify-content-center">'
                                html += '<textarea spellcheck="false" rows="5" class="form-control" style="max-width:512px;" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                            html += '</div>'
                            html += '<div class="col-12">'
                                html += '<div class="row gx-2 align-items-center justify-content-center">'
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" class="btn btn-primary bg-gradient" onclick="window.App.exportSave()">'
                                            html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                            html += '<span class="ms-1">Copy to clipboard</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" class="btn btn-primary bg-gradient" onclick="window.App.downloadSave()">'
                                            html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                            html += '<span class="ms-1">Download TXT file</span>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                            html += '<div class="col-12">'
                                html += '<span class="text-normal">Or you could wipe your local data to restart the game from the beginning</span>'
                            html += '</div>'
                            html += '<div class="col-12 d-flex justify-content-center">'
                                html += '<button type="button" class="btn btn-danger bg-gradient" onclick="window.App.showModal(\'modalWipe\')">'
                                    html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                    html += '<span class="ms-1">Wipe Local Data</span>'
                                html += '</button>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
            html += TplToastExport()
        html += '</div>'
    html += '</div>'
    html += TplModalWipe()
    //---
    return html
}
//---
class ScreenError {
    //---
    init(data) {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenError(data)
    }
}