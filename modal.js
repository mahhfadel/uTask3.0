function iniciaModalFrase(modalContainerID) {
    const modalContainer = document.getElementById(modalContainerID);
    if (modalContainer) {
        modalContainer.classList.add('mostrar');
        modalContainer.addEventListener('click', (e) => {
            if (e.target.id == modalContainerID || e.target.className == 'close') {
                modalContainer.classList.remove('mostrar')
            }
        });
    }
}

const containerFraseDoDia = document.querySelector('.containerFraseDoDia');
containerFraseDoDia.addEventListener('click', () => iniciaModalFrase('modal-frase'));



function iniciaModalAdd(modalContainerID) {
    const modalContainer = document.getElementById(modalContainerID);
    if (modalContainer) {
        modalContainer.classList.add('mostrar');
        modalContainer.addEventListener('click', (e) => {
            if (e.target.id == modalContainerID || e.target.className == 'close') {
                modalContainer.classList.remove('mostrar')
            }
        });
    }
}

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => iniciaModalAdd('modal-add'));