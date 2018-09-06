import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Database } from './Database';
import { Editor } from './Editor';
import { Events } from './Events';
import { Auth } from './Auth';
import { getEl, getHash } from './Helpers';

function ampbin(ampbinConfig: any) {
    // Load firebase
    firebase.initializeApp(ampbinConfig.firebase);

    // Load core components
    let auth = new Auth(firebase.auth(), {
        google: new firebase.auth.GoogleAuthProvider()
    });
    let db = new Database(firebase.firestore(), {timestampsInSnapshots: true});
    let editor = new Editor(ampbinConfig.editor);
    let events = new Events(auth, db, editor);

    // authentication state observer
    firebase.auth().onAuthStateChanged((user: any) => {
        // Check if user is not null
        if(user) {
            // User is logged in, this could be anonymously or as a regular user
            console.log(user);
        } else {
            // User is not logged in, so let's log them in anonymously
            auth.loginAnonymously();
        }
    });

    // Event handlers
    // # Save bin
    getEl(ampbinConfig.save).onclick = () => events.save();
    getEl(ampbinConfig.signin).onclick = () => events.loginWithGoogle();
    getEl(ampbinConfig.signout).onclick = () => events.logout();

    // Loader
    // # Load bin if there is a hash in the URL
    (getHash().length > 0) ? db.load(getHash(), editor) : '';
}

const _global = window as any
_global.ampbin = ampbin
