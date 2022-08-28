export default class UserInfo {
    constructor(profile) {
        this._name = profile.name;
        this._job = profile.job


    }
    getUserInfo() {

        const profile = {

            name: this._name.textContent,
            job: this._job.textContent
        }
        return profile
    }







    setUserInfo({ name, job }) {
        this._name.textContent = name;
        this._job.textContent = job;
    }
}