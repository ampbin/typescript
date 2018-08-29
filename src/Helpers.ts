export function updateHash(hash: string) {
    if(hash.length > 0) {
        return window.location.hash = '#' + hash;
    }
    
    return window.location.reload();
}
