export const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
    
  };
  
  export const validatePassword = (password) => {
    if (password.length < 5) {
      return false;
    }
    const specialCharacters = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
    return specialCharacters.test(password);
  };