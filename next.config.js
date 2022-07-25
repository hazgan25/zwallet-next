module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['zwalet.herokuapp.com', 'cdn.pixabay.com', 'res.cloudinary.com']
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
      { source: '/home/confirmation', destination: '/confirmation' },
      { source: '/transfer/success', destination: '/successTransfer' },
      { source: '/personal/information', destination: '/personalInformation' },
      { source: '/manage/phone-number', destination: '/managePhoneNumber' },
      { source: '/change-password', destination: '/changePassword' },
      { source: '/change-pin', destination: '/changePin' },
      { source: '/reset-password/:key', destination: '/resetPassword' }
    ]
  }
}
