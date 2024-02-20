import { createContext, useState, useEffect, useRef } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const unsubscribe = useRef(null);

  useEffect(() => {
    unsubscribe.current = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false); // Indicate auth state is ready
    });

    return () => unsubscribe.current(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
