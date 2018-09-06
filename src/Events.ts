import { Database } from './Database';
import { Editor } from './Editor';
import { Auth } from './Auth';

export class Events {
    private auth: Auth;
    private db: Database;
    private editor: Editor;

    constructor(auth: Auth, db: Database, editor: Editor) {
        this.db = db;
        this.editor = editor;
        this.auth = auth;
    }

    loginWithGoogle() {
        this.auth.login();
    }

    save() {
        this.db.save(this.auth.getUserId(), this.editor);
    }

    authChange() {
        this.auth.getAuth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(user);
          }
        });
    }
}
