import React from 'react'

export default React.createContext({
  token: null,
  userId: null,
  adminId: null,
  login: (token, userId, tokenExpiration) => {},
  adminLogin: (token, adminId, tokenExpiration) => {},
  logout: () => {},
})
