import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: any;
  login: (token: string, userData: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      // Normalized name on load to fix legacy data
      if (parsedUser.name === 'Dr. John Admin' || !parsedUser.name) {
        parsedUser.name = 'Dr. Khushi';
      }
      setUser(parsedUser);
    }
  }, []);

  const login = (token: string, userData: any) => {
    // Normalize name to Dr. Khushi if it's the legacy admin name
    const normalizedUser = {
      ...userData,
      name: (userData.name === 'Dr. John Admin' || !userData.name) ? 'Dr. Khushi' : userData.name
    };
    localStorage.setItem('access_token', token);
    localStorage.setItem('user', JSON.stringify(normalizedUser));
    setUser(normalizedUser);
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
