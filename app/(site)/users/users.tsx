import Link from "next/link";
// import { getUsers } from '@/lib/prisma/users'

type Users = {
  users: { id: string; name: string };
};
type User = {
  user: { id: string; name: string };
};
const Users = async ({ users }: Users) => {
  // const { users } = await getUsers()

  return (
    <section className="bg-rose-900 h-screen">
      <div className="container py-4">
        <h2 className="mb-4 px-4 pb-3 text-xl border-b border-stone-500 font-medium text-white">
          Users
        </h2>
        <ul className="flex flex-col text-sm text-white list-none gap-1 list-inside">
          {/* @ts-ignore */}
          {users?.map((user: any) => (
            <li key={user.id} className="text-base px-4 ">
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
