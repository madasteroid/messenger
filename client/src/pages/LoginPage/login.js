import React from "react";
import Login from "../../components/LoginForm/Login";
import AuthLayout from "../../components/Layout/auth/AuthLayout";



const LoginPage = () => {
    return(
      <AuthLayout>
          <Login/>
      </AuthLayout>
    );
}

export default LoginPage;
