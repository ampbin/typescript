import { Database } from './Database';
import { Editor } from './Editor';
import { Auth } from './Auth';
import { copyBinUrl, copyBinCode } from './Helpers';

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

    logout() {
        this.auth.logout();
    }

    save() {
        this.db.save(this.auth.getUserId(), this.editor);
    }

    newBin() {
        window.location.href = '/';
    }

    copyUrl() {
        if(copyBinUrl()) {
            console.log('copied url');
        } else {
            console.log('Save a bin first');
        }
    }

    copyBinCode() {
        copyBinCode(this.editor.getCode());
        console.log('copied code');
    }

    authChange() {
        this.auth.getAuth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(user);
          }
        });
    }
}
