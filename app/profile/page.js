import { getSession } from '@auth0/nextjs-auth0';

export default async function Profile() {
  const { user } = await getSession();

  return (
      user && (
        <>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <a href="/api/auth/logout">Logout</a>
        </>
      )
  );
}