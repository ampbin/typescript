import * as CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

import { EditorInterface } from  './Interfaces';

export class Editor implements EditorInterface {
    private editor: CodeMirror.Editor;
    
    constructor(containerid: string, options: object) {
        let _editor = <HTMLTextAreaElement> document.getElementById(containerid);
        this.editor = CodeMirror.fromTextArea(
            _editor, 
            options
        );
    }
    
    getCode() {
        return this.editor.getValue();
    }
    
    setCode(amphtml: string) {
        this.editor.setValue(amphtml);
    }
}