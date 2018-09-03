export class Auth {
    private auth: firebase.auth.Auth;
    
    constructor(auth: firebase.auth.Auth) {
        this.auth = auth;
    }
    
    login() {
        
    }
    
    loginAnonymously() {
        this.auth.signInAnonymously().catch(function(error) {
            console.error(error);
        });
    }
    
    logout() {
        
    }
    
    getAuth() {
        return this.auth;
    }
    
    getCurrentUser() {
        return this.auth.currentUser;
    }
    
    getUserId() {
        return this.auth.currentUser.uid;
    }
}