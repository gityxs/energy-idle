//---
var TplToastExport = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastExport" class="toast bg-gradient align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body text-center">'
                html += 'Local data copied in clipboard!'
                html += '<button type="button" class="ms-3 btn btn-dismiss" data-bs-dismiss="toast" aria-label="Close"><i class="fas fa-times"></i></button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplToastNewAchievement = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastNewAchievement" class="toast bg-gradient align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body text-center">'
                html += 'Achievement reached!'
                html += '<button type="button" class="ms-3 btn btn-dismiss" data-bs-dismiss="toast" aria-label="Close"><i class="fas fa-times"></i></button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplToastImportEmpty = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastImportEmpty" class="toast bg-gradient align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body text-center">'
                html += 'No data to import!'
                html += '<button type="button" class="ms-3 btn btn-dismiss" data-bs-dismiss="toast" aria-label="Close"><i class="fas fa-fw fa-times"></i></button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplToastImportCorrupted = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastImportCorrupted" class="toast bg-gradient align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body text-center">'
                html += 'Data corrupted!'
                html += '<button type="button" class="ms-3 btn btn-dismiss" data-bs-dismiss="toast" aria-label="Close"><i class="fas fa-fw fa-times"></i></button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
