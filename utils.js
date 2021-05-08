
function setLoadTime() {
    const timeEl = document.getElementById("load-time");
    timeEl.innerText = new Date().toLocaleTimeString();
}

const UUID = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );


function createButtonGroup(name) {
    const group = document.createElement('div');
    group.setAttribute('name', name);
    group.setAttribute('id', name);
    group.setAttribute('class', 'buttons');
    return group;
}

function createRadioButton(name, id) {
    const radiobutton = document.createElement('input');
    radiobutton.setAttribute('type', 'radio');
    radiobutton.setAttribute('id', id);
    radiobutton.setAttribute('name', name);
    return radiobutton;
}

function createButton(text, handler) {
    const button = document.createElement('button');
    button.addEventListener('click', handler);
    button.innerText = text;
    return button;
}

function createLabel(text, target) {
    const label = document.createElement('label');
    label.setAttribute('for', target);
    label.innerText = text;
    return label;
}

function appendRadioLikeButton(text, handler, node) {
    const uuid = UUID();

    node.appendChild(createRadioButton(node.name, uuid));

    const button = createButton('', handler);
    node.appendChild(button);

    button.appendChild(createLabel(text, uuid));

    return button;
}


export {
    setLoadTime,
    UUID,
    createButtonGroup,
    appendRadioLikeButton
};
