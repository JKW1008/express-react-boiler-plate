export async function userRegister(props) {
  return await fetch(`/api/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: props.username,
      password: props.password,
      mobile: props.mobile,
      email: props.email,
      name: props.name,
    }),
  });
}
