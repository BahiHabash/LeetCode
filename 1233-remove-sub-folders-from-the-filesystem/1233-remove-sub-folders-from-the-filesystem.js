/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function(folders) {
    folders.sort((a, b) => a.length - b.length);
    
    const set = new Set();
    
    for (const folder of folders) {
        let parts = folder.split('/');
        let path = '';
        let founded = false;
        
        for (const part of parts) {
            path += part;
            
            if (set.has(path)) {    
                founded = true;
                break;
            }
            
            path += '/';
        }
        
        if (!founded) {
            set.add( path.slice(0, -1) );
        }
    }
    
    return [...set];
};