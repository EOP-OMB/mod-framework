export class UserInfo {
    uniqueName: string;
    upn: string;
    displayName: string;
    emailAddress: string;
    userProfileUrl: string;

    public constructor(uniqueName: string, upn: string) {
        this.uniqueName = uniqueName;
        this.upn = upn;
        console.log(uniqueName + '[]asdf');
        console.log(uniqueName == 'LOGIN\\kuennen_s');
        this.displayName = (uniqueName == "LOGIN\\kuennen_s") ? "Kuennen, Steve (Contractor)" : uniqueName;
        this.userProfileUrl = "";
    }
}
