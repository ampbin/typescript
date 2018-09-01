import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Database } from './Database';
import { Editor } from './Editor';
import { Events } from './Events';
import { getEl, getHash } from './Helpers';

function ampbin(ampbinConfig: any) {
    // Load firebase
    firebase.initializeApp(ampbinConfig.firebase);
    
    // Load core components
    let db = new Database(firebase.firestore(), {timestampsInSnapshots: true});
    let editor = new Editor(ampbinConfig.editor);
    let events = new Events("userid", db, editor);
    
    // Event handlers
    // # Save bin
    getEl(ampbinConfig.save).onclick = () => events.save();
    
    // Loader
    // # Load bin if there is a hash in the URL
    (getHash().length > 0) ? db.load(getHash(), editor) : '';
}

const _global = window as any
_global.ampbin = ampbin
