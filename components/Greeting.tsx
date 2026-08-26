export function Greeting({ name }: { name: string }) {
  const hour = new Date().getHours();
  let salutation = "Hello";

  if (hour < 12) {
    salutation = "Good morning";
  } else if (hour < 18) {
    salutation = "Good afternoon";
  } else {
    salutation = "Good evening";
  }

  return (
    <p>
      {salutation}, {name}! 👋
    </p>
  );
}
