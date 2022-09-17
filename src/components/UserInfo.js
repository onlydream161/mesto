export default class UserInfo {
    constructor(profile) {
        this._name = profile.name;
        this._job = profile.job
        this._avatar = profile.avatar


    }
    getUserInfo() {

        const profile = {

            name: this._name.textContent,
            job: this._job.textContent,
            avatar: this._avatar.src
        }
        return profile
    }







    setUserInfo({ name, job, avatar }) {
        this._name.textContent = name;
        this._job.textContent = job;
        this._avatar.src = avatar
    }

    setUserAvatar({ avatar }) {
        this._avatar.src = avatar
    }
}