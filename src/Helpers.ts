export function updateHash(hash: string) {
    if(hash.length > 0) {
        return window.location.hash = '#' + hash;
    }

    return window.location.reload();
}

export function getEl(elId: string) {
    return document.getElementById(elId);
}

export function getHash(): string {
    return window.location.hash;
}

export function copyBinUrl(): boolean {
    let tempInput = document.createElement('input');
    let tempText = '';

    // Check to see if they've saved a bin before saving the URL
    if(!window.location.hash) {
        return false;
    }

    tempText = window.location.hash;
    tempText = 'https://static.ampb.in/' + tempText.replace('#', '') + '.html';

    document.body.appendChild(tempInput);
    tempInput.value = tempText;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    return true;
}

export function copyBinCode(amphtml: string) {
    let tempTextarea = document.createElement('textarea');
    document.body.appendChild(tempTextarea);
    tempTextarea.value = amphtml;
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
}
