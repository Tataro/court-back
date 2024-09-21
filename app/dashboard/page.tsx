import { getUsers } from "./action";

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
    </div>
  );
}
