import React from "react";
import Register from "../../components/RegisterForm/Signup";
import AuthLayout from "../../components/Layout/auth/AuthLayout";



const SignUpPage = () => {
    return(
        <AuthLayout>
            <Register/>
        </AuthLayout>
    );
}

export default SignUpPage;
