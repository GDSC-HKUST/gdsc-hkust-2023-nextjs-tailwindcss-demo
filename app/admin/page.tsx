"use client";

import { deleteSkill, getSkills, upsertSkill } from "@/app/admin/server";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [skills, setSkills] = useState([] as string[]);

  useEffect(() => {
    getSkills().then((data) => setSkills(data));
  }, []);

  return (
    <div>
      {session?.user ? (
        <>
          <p>
            Logged in as {session?.user?.name} ({session?.user?.email}){" "}
            <button onClick={() => signOut()}>Logout</button>
          </p>

          {session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL ? (
            <>
              <h1>Admin Page</h1>
              <h2>Manage Skills</h2>
              <form
                action={async (formData) => {
                  setSkills(await upsertSkill(formData));
                }}
              >
                <input
                  type="text"
                  name="skill"
                  placeholder="Skill, e.g. Next.js"
                />
                <input
                  type="number"
                  name="weight"
                  step={1}
                  defaultValue={0}
                  placeholder="Weight, e.g. 0, 100"
                />
                <button type="submit">Add</button>
              </form>
              <ul>
                {skills.length > 0 ? (
                  skills.map((skill) => (
                    <li key={skill}>
                      {skill}{" "}
                      <button
                        onClick={async () => {
                          setSkills(await deleteSkill(skill));
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  ))
                ) : (
                  <li>No skills</li>
                )}
              </ul>
            </>
          ) : (
            <p>Unauthorized</p>
          )}
        </>
      ) : (
        <button onClick={() => signIn("google")}>Login</button>
      )}
    </div>
  );
}
