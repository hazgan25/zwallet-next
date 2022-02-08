module.exports = {
  reactStrictMode: true,
  image: {
    domain: ['zwalet.herokuapp.com', 'cdn.pixabay.com']
  },
  rewrites: async = () => {
    return [
      { source: '/auth/register', destination: '/register' },
      { source: '/auth/login', destination: '/login' },
      { source: '/auth/forgot/password', destination: '/password' },
      { source: '/user/pin', destination: '/pin' },
      { source: '/home/topup', destination: '/topup' },
      { source: '/home/transfer', destination: '/transfer' },
      { source: '/home/profile', destination: '/profile' },
      { source: '/home/history', destination: '/history' },
    ]
  }
}
