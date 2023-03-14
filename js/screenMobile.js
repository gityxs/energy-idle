//---
var TplScreenMobile = function() {
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
                        html += '<span class="text-danger">Your device is not supported for the moment.</span>'
                    html += '</div>'
                    html += '<div class="col-12 text-normal text-center">'
                        html += '<span class="text-normal">To be informed when your device will be supported and new features will be ready, please join Discord server.</span>'
                    html += '</div>'
                    html += '<div class="col-12 d-flex justify-content-center">'
                        html += '<div class="col-12 d-flex justify-content-center">'
                            html += '<a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="btn btn-primary bg-gradient">'
                                html += '<span><i class="fab fa-discord"></i></span>'
                                html += '<span class="ms-1">Discord</span>'
                            html += '</a>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
class ScreenMobile {
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenMobile()
    }
}