import type { NextPage } from "next";

import Layout from "@components/Layout";
import LoginForm from "@components/LoginForm";

const Login: NextPage = () => {
  return (
    <Layout title="Login">
      <h1>Login</h1>
      <LoginForm />
    </Layout>
  );
};

export default Login;
