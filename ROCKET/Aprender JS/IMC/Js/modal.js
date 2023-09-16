export const Modal = {

    wrapper: document.querySelector(".modal-wrap"),
    btnClose: document.querySelector("#btn-close"),
    message: document.querySelector(".modal-wrap div h2"),

    toggle(){
        this.wrapper.classList.toggle('hide')
    }
}

Modal.btnClose.onclick = (e) => {
    Modal.toggle()
}


window.addEventListener('keydown', handleKeydown)

function handleKeydown(e){
    if (e.key == 'Escape' && Modal.wrapper.classList.contains('hide') == false) {
        Modal.toggle()
    }
}