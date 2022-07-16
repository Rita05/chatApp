import config from "../../config"
class АuthorizationApi{

    async sendForАuthorizationData(authLogin, authPassword){
        let userData={
            login: authLogin,
            password: authPassword
        }
        let response = await fetch(`http://${config.serverUrl}/authorization`, {
            mode: "cors",
            
            method: "post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userData)
        
        });
        return response.status;   
    }
}

export default new АuthorizationApi();
