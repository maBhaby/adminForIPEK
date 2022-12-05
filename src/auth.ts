const fakeAuthProvider = {
  isAuthenticated: false,
  signin () {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(() => {
      return true
    }, 1000)
  },
  signout () {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(() => {
      return false
    }, 1000)
  }
}

export { fakeAuthProvider }

export async function login (email: string, password: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      fakeAuthProvider.isAuthenticated = true
      return resolve(true)
    }, 1000)
  })
}
