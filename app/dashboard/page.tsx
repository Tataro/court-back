import { getUsers } from "./action";

export default async function Page() {
  const { users } = await getUsers();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User List</p>
      <hr />
      {users.map((user) => (
        <div key={user._id as string}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
