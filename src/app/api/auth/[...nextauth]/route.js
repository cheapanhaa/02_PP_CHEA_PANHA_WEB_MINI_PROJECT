import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(userInfo) {
        // console.log("userInfo", userInfo);
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        // call login service
        const login = await loginService(newUserInfo)
       
        // console.log("userlogin", login);
        return login;
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
        return {...token, ...user};
    },
    async session({session,token}){
        session.user=token;
        return session;
    },
    secret: process.env.NEXTAUTH_SECRET,
}

};
const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
