export function updateHash(hash) {
    if(hash.length > 0) {
        return window.location.hash = '#' + hash;
    }
    
    return window.location.reload();
}