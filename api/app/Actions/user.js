const User = use('App/Models/User')

exports.getAllUsers = async function() {
  const users = await User.all()

  return users.rows.map(user => {
    return {
      id: user.id,
      email: user.email
    }
  })
}

exports.getUser = async function(id) {
  const user = await User.findOrFail(id)
  return {
    id: user.id,
    email: user.email
  }
}

exports.createUser = async function(email, password) {
  const user = await User.create({ email, username: email, password })

  return user.id
}

exports.login = async function(id) {
  if (this.auth.user) {
    await this.auth.logout()
  }
  
  await this.auth.loginViaId(id)
}

exports.getCurrentUser = async function() {
  return this.auth.user ? this.auth.user.username : ''
}
