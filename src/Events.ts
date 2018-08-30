import { Database } from './Database';
import { Editor } from './Editor';

export class Events {
    private userId: string;
    private db: Database;
    private editor: Editor;
    
    constructor(userId: string, db: Database, editor: Editor) {
        this.userId = userId;
        this.db = db;
        this.editor = editor;
    }
    
    save() {
        this.db.save(this.userId, this.editor);
    }
}