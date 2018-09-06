export class Auth {
    private auth: firebase.auth.Auth;
    private googleProvider: firebase.auth.AuthProvider;
    private user: any;

    constructor(auth: firebase.auth.Auth, providers: any) {
        this.auth = auth;
        this.googleProvider = providers.google;
    }

    login() {
        this.auth.signInWithPopup(this.googleProvider).then((result) => {
            this.user = result.user;
        }).catch((err) => {
            console.error(err);
        });
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
