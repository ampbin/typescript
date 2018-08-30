import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config.js';
import { Database } from './Database';
import { Editor } from './Editor';
import { Events } from './Events';
import { getEl } from './Helpers';

firebase.initializeApp(config.firebase);

let db = new Database(firebase.firestore(), {timestampsInSnapshots: true});
let editor = new Editor('editor', config.editor);
let events = new Events("userid", db, editor);

let save = getEl('save');
save.onclick = () => {
    events.save();
}