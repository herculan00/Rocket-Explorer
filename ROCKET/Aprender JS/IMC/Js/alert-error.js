export const AlertError = {
    node: document.querySelector(".modal-alert"),
    open(){
        this.node.classList.remove('hide')
    },
    close(){
        this.node.classList.add('hide')
    }
} 