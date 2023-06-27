import { AuthData } from "@/libs/types/types";

const handleAuth = async ({ name, email, password }: AuthData) => {
  let data: any = {};
  if (name === undefined) {
    (data.email = email), (data.password = password);
  } else {
    data.name = name;
    (data.email = email), (data.password = password);
  }
  try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    // Handle the response as needed
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
export default handleAuth;
