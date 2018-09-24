import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Database } from './Database';
import { Editor } from './Editor';
import { Events } from './Events';
import { Auth } from './Auth';
import { getEl, getHash } from './Helpers';
import { UserInterface } from './UserInterface';

function ampbin(ampbinConfig: any) {
    // Load firebase
    firebase.initializeApp(ampbinConfig.firebase);
    
    // Load core components
    let auth = new Auth(firebase.auth());
    let db = new Database(firebase.firestore(), {timestampsInSnapshots: true});
    let editor = new Editor(ampbinConfig.editor);
    let events = new Events(auth, db, editor);
    
    // Not logged in with an account, log them in anonymously
    if(firebase.auth().currentUser == null) {
        auth.loginAnonymously();
    }
    
    // Listen for auth change
    events.authChange();
    
    // Event handlers
    // # Save bin
    getEl(ampbinConfig.save).onclick = () => events.save();
    
    // Loader
    // # Load bin if there is a hash in the URL
    (getHash().length > 0) ? db.load(getHash(), editor) : '';
}

let ui = new UserInterface;

const _global = window as any
_global.ampbin = ampbin
_global.ui = ui;
