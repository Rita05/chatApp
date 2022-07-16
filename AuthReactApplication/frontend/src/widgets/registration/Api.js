
import config from "../../config"

class RegistrationApi {
    async sendRegistrationData(uLogin, uPassword) {
        let userData = {
            login: uLogin,
            password: uPassword
        }
        let response = await fetch(`http://${config.serverUrl}/registration`, {
            mode: "cors",
            method: "post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userData)

        });
        return response.status;
    }
    async sendUserPhoto(file, login) {
        var formData = new FormData();
        formData.append("image", file)

        let response = await fetch(`http://${config.serverUrl}/photo/?login=${login}`, {
            method: "post",
            body: formData
        });

        console.log(response.status)
        return response.status;
        
    }
}

export default new RegistrationApi();


