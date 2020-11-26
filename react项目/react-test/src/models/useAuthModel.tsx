import { useState, useCallback } from 'react';
export default function useAuthModel() {
  const [user, setUser] = useState(123);
  const signin = useCallback((account, password) => {
     
      console.log('account',account);
      console.log('password',password);
    /* signin implementation
    setUser(user from signin API) */
  }, []);
  const signout = useCallback(() => {
    /* signout implementation
    setUser(null) */
  }, []);
  return {
    user,   
    signin,
    signout,
  };
}
