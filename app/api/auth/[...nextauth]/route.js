import NextAuth from "next-auth/next";
import { prisma } from "@/utils/prismaDb";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { mergeAnonymousCartIntoUserCart } from "@/utils/cart";

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
    
      GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
/*     pages:{signIn:"/sign-in"},
    secret:process.env.NEXTAUTH_SECRET */
    callbacks:{
      session({session,user}){
        session.user.id=user.id
        return session

      }
    },
    events: {
      async signIn({ user }) {
        await mergeAnonymousCartIntoUserCart(user.id);
      },
    },

  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
  