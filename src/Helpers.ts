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