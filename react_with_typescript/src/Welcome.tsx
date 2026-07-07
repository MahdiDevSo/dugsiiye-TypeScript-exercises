interface Welcome_Props {
  username: string;
  isPremium: boolean;
}


const Welcome = ({ username, isPremium }: Welcome_Props) => {
  return (
    <>
      <h1>Hello Good Morning {username}</h1>
      <p>{isPremium ? "Welcome back, premium user!" : "Welcome, guest"}</p>
    </>
  );
};

export default Welcome;
