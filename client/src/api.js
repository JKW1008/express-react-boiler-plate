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

export async function userLogin(props) {
  return await fetch(`/api/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: props.username,
      password: props.password,
    }),
  });
}

export async function loginSuccess() {
  return await fetch(`/api/users/signin/success`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
}

export async function missinComplated({userId, missionId}){
  console.log(userId, missionId);
  return await fetch('api/users/mission/add', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      missionId,
      userId
    })
  }).then((res) => res.json());
}