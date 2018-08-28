import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config.js';
import { Database } from './Database';
import { Editor } from './Editor';
import { Auth } from './Auth';
import { Notifications } from './Notifications';
import { Validate } from './Validate';
import { Events } from './Events';
import { UserInterface } from './UserInterface';

firebase.initializeApp(config.firebase);

let db = new Database(firebase.firestore(), {timestampsInSnapshots: true});
let editor = new Editor('editor', config.editor);