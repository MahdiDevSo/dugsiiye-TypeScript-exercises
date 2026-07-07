
type Welcome_Props_type = {
  username: string;
  isPremium: boolean;
};

const Welcome_Props = ({username, isPremium} : Welcome_Props_type) => {
  return (
    <>
    <h2>Hello {username}</h2>
    <p>
        {isPremium
          ? "Welcome back, premium user!"
          : "Welcome, guest"}
      </p>
    </>
  )
}

export default Welcome_Props