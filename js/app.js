//---
window.onload = function() {
    //---
    window.App = new App()
    window.App.start()
}
//---
class App {
    //---
    constructor() {
        //---
        this.fps = 60
        this.rafHandle = null
        this.saveInterval = null
        this.resetInProgress = false
        this.lastFrameTimeMs = new Date().getTime()
        this.localStorageName = 'sandbox'
        //---
        this.screens = {
            //---
            game: new ScreenGame(),
            error: new ScreenError(),
            mobile: new ScreenMobile(),
            loading: new ScreenLoading(),
        }
        //---
        this.game = new Game()
    }    
    //---
    start() {
        //---
        document.title = this.game.name
        //---
        window.onbeforeunload = () => {
            //---
            if (!this.resetInProgress) this.save()
            //---
            if (this.rafHandle) cancelAnimationFrame(this.rafHandle)
            if (this.saveInterval) clearInterval(this.saveInterval)
        }
        //---
        let isMobile = false
        //---
        let txt = navigator.userAgent || navigator.vendor || window.opera
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(txt)) {
            isMobile = true
        }
        //---
        if (isMobile == true) this.changeScreenTo('mobile')
        else {
            //---
            this.changeScreenTo('loading')
            //---
            try {
                //---
                this.game.reset()
                //---
                let loadedData = localStorage.getItem(this.localStorageName)
                if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
                    //---
                    let text = LZString.decompressFromBase64(loadedData)
                    if (!text) return console.error('Load failed')
                    loadedData = JSON.parse(text)
                    //---
                    if (loadedData.lastFrameTimeMs != null) this.lastFrameTimeMs = loadedData.lastFrameTimeMs
                    //---
                    if (loadedData.game) this.game.load(loadedData.game)
                }
                //---
                this.game.init()
                //---
                setTimeout(() => { this.changeScreenTo('game') }, 1000)
            }
            catch (error) {
                //---
                this.changeScreenTo('error', { error:error })
                //---
                console.error(error)
            }
        }
    }
    //---
    save() {
        //---
        let savedData = {
            //---
            lastFrameTimeMs: this.lastFrameTimeMs,
            //---
            game: this.game.getSaveData(),
        }
        //---
        let text = JSON.stringify(savedData)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(this.localStorageName, compressed)
        //---
        let node = document.getElementById('localData')
        if (node) node.innerHTML = compressed
    }
    //---
    mainloop() {
        //---
        window.App.update()
        window.App.rafHandle = requestAnimationFrame(window.App.mainloop)
    }
    //---
    update() {
        //---
        let currentTimeMs = Date.now()
        //---
        let deltaMs = currentTimeMs - this.lastFrameTimeMs
        if (deltaMs >= 1000 / this.fps) {
            //---
            this.lastFrameTimeMs = currentTimeMs
            //---
            let energyProduced = this.game.update(deltaMs)
            //---
            if (this.game.isVictoryReached()) {
                //---
                this.game.victory = true
                this.showModal('modalVictory')
            }
            //---
            this.screens['game'].draw(deltaMs)
            //---
            if (deltaMs > 15 * 60 * 1000) {
                //---
                this.game.stats.allTime.timeOffline += deltaMs / 1000
                this.game.stats.currentRun.timeOffline += deltaMs / 1000
                //---
                let node
                //---
                node = document.getElementById('energyProduced')
                node.innerHTML = formatNumber(energyProduced)
                //---
                node = document.getElementById('offlineTime')
                node.innerHTML = formatTime(deltaMs / 1000)
                //---
                this.showModal('modalOffline')
            }
        }
    }
    //---
    changeScreenTo(screenId, data=null) {
        //---
        this.currentScreenId = screenId
        //---
        if (this.screens[this.currentScreenId].init) this.screens[this.currentScreenId].init(data)
    }
    //---
    getLocalData() {
        //---
        return localStorage.getItem(this.localStorageName)
    }
    //---
    exportSave() {
        //---
        navigator.clipboard.writeText(this.getLocalData())
        this.showToast('toastExport')
    }
    //---
    downloadSave() {
        //---
        let element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.getLocalData()))
        element.setAttribute('download', this.localStorageName + '_save_' + (new Date).getTime() + '.txt')
        //---
        element.style.display = 'none'
        document.body.appendChild(element)
        //---
        element.click()
        //---
        document.body.removeChild(element)
    }
    //---
    wipeSave() {
        //---
        this.resetInProgress = true
        //---
        localStorage.removeItem(this.localStorageName)
        window.location.replace('')
    }
    //---
    importSave() {
        //---
        let node = document.getElementById('importData')
        let importData = node.value.trim()
        //---
        if (!importData) return this.showToast('toastImportEmpty')
        if (importData.length % 4 !== 0) return this.showToast('toastImportCorrupted')
        //---
        this.resetInProgress = true
        //---
        localStorage.setItem(this.localStorageName, importData)
        window.location.replace('')
    }
    //---
    showToast(toastElementId) {
        //---
        const toastElement = document.getElementById(toastElementId)
        const toast = new bootstrap.Toast(toastElement)
        toast.show()
    }
    //---
    showModal(modalElementId) {
        //---
        const modalElement = document.getElementById(modalElementId)
        const modal = new bootstrap.Modal(modalElement)
        modal.show()
    }
}
