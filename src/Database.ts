export class Database {
    private db: firebase.firestore.Firestore;
    
    constructor(db: firebase.firestore.Firestore, settings: object) {
        db.settings(settings);
        
        this.db = db;
    }
    
    save(userId: string, editor: CodeMirror.Editor) {
        this.db.collection('bins').add({
            user: userId,
            amphtml: editor.getValue(),
            saved: new Date().getTime()
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // Update URL with hash
            // Show toast notification
        }).catch((error) => {
            console.error("Error adding document: ", error);
        })
        ;
    }
    
    load(binId: string, editor: CodeMirror.Editor) {
        let docRef = this.db.collection('bins').doc(binId.replace("#", ""));
        
        docRef.get().then((doc) => {
            if(doc.exists) {
                return editor.setValue(doc.data().amphtml);
            }
        }).catch((error) => {
            console.error("Error reading document: ", error);
        })
        ;
    }
}