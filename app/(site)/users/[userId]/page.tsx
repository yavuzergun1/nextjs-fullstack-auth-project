import { getUserById, getUsers } from "@/lib/prisma/users";
import User from "./user";

export async function generateStaticParams() {
  const { users } = await getUsers()
// @ts-ignore
  return users.map(user => ({
    userId: user.id
  }))
}

type UserProps = {
  params: {
    userId: string;
  };
};

async function getUser(userId: string) {
  console.log("USERID", userId);
  
  const { user } = await getUserById(userId);
  if (!user) {
    throw new Error("Failed to fetch data");
  }

  return user;
}

const Page = async ({ params: {userId} }: UserProps) => {
  const user = await getUser(userId);
  console.log("USER",user);
  
  return <User user={user} />;
};

export default Page;
