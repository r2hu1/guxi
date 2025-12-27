import jwt from "jsonwebtoken";
import "dotenv/config";

function createGitHubAppJWT() {
  const now = Math.floor(Date.now() / 1000);

  return jwt.sign(
    {
      iat: now - 60,
      exp: now + 600,
      iss: process.env.GITHUB_APP_ID,
    },
    process.env.GITHUB_APP_PRIVATE_KEY!,
    { algorithm: "RS256" },
  );
}

async function getInstallationToken(installationId: string) {
  const jwtToken = createGitHubAppJWT();

  const res = await fetch(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/vnd.github+json",
      },
    },
  );

  const data = await res.json();
  return data.token;
}

export async function getRepoDetails(installationId: string, fullName: string) {
  const token = await getInstallationToken(installationId);

  const res = await fetch(`https://api.github.com/repos/${fullName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}
