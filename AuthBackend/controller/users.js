module.exports = new class UsersController{
  constructor() {
    this.registerUsers = new Map()
    this.usersPhotos = []
  }

  getUsers(req, res) {
    console.log(`Registered users get request`)
    let ArraofUsers = Array.from(this.registerUsers.keys())
    res.send(JSON.stringify(ArraofUsers))
  }

  registerUser(req, res) {
    let { login, password } = req.body
    if (this.registerUsers.has(login)) {
      res.status(400).send()
    }
    this.registerUsers.set(login, password)
    res.status(200).send()
  }

  authorize(req, res) {
    let { login, password } = req.body
    let date = new Date()
    let authorizationDate = login + "|" + date.valueOf().toLocaleString();
    let token = {
      user_name: login,
      key: authorizationDate
    }
    if (!this.registerUsers.has(login) || !this.registerUsers.get(login)) {
      res.status(401).send()
    }
    this.registerUsers.set(login, password)
    res.status(200).send()
  }

  sendPhoto(req, res) {
    var login = req.query.login
    var photo = req.file

    try {
      if (photo === undefined || login === undefined) {
        throw new Error("Invalid response")
      }

      this.usersPhotos.push({ login: login, photo: photo })
      console.log(`user ${login} sent photo`)
      res.status(200).end()
    }
    catch (e) {
      console.error(e)
      res.status(500).send(e)
    }
  }

  getPhoto(req, res){
    console.log("Get photos request")
    res.send(JSON.stringify(this.usersPhotos))
  }

}


