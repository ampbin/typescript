export class Database {
    private db: firebase.firestore.Firestore;
    
    constructor(db: firebase.firestore.Firestore, settings: object) {
        db.settings(settings);
        
        this.db = db;
    }
    
    save() {
        
    }
    
    load() {
        
    }
}