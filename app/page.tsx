import { getSkills } from "@/app/admin/server";

export default async function Page() {
  const skills = await getSkills();
  return (
    <div className="space-y-6 lg:container mx-auto p-4 lg:my-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="inline bg-clip-text bg-gradient-to-r from-blue-600 via-30% via-purple-600 to-80% to-yellow-600 text-transparent print:text-black">
            Full-stack Developer
          </p>
        </div>
        <p className="text-sm text-gray-600 text-justify">
          Nostrud fugiat cillum pariatur proident elit. Aute Lorem incididunt
          dolor tempor ut. Ullamco occaecat aliquip dolore incididunt tempor{" "}
          <span className="underline decoration-2 decoration-blue-600">
            exercitation
          </span>{" "}
          do consequat duis. Do sunt{" "}
          <span className="underline decoration-2 decoration-green-600">
            adipisicing
          </span>{" "}
          et ut anim velit mollit veniam eu id mollit. Culpa exercitation nisi
          excepteur ex esse ipsum dolore minim eiusmod et officia nostrud. Sint
          elit Lorem{" "}
          <span className="underline decoration-2 decoration-red-600">
            aliquip
          </span>{" "}
          est nostrud ut culpa proident enim aliquip officia dolore qui officia.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-8 space-y-4 lg:space-y-0">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Personal info
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium">
                Email:{" "}
                <a
                  className="underline font-normal hover:text-gray-400"
                  href="mailto:me@johndoe.com"
                >
                  me@johndoe.com
                </a>
              </p>
              <p className="font-medium">
                LinkedIn:{" "}
                <a
                  className="underline font-normal hover:text-gray-400"
                  href="https://linkedin.com/in/???"
                >
                  linkedin.com/in/???
                </a>
              </p>
              <p className="font-medium">
                Portfolio:{" "}
                <a
                  className="underline font-normal hover:text-gray-400"
                  href="https://example.com/"
                >
                  example.com
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Education
            </div>
            <div className="space-y-2 ">
              <div className="space-y-1">
                <p className="font-medium text-sm">
                  2022-26 | BBA in Information Systems
                </p>
                <p className=" text-gray-600 italic text-xs">
                  The Hong Kong University of Science and Technology, Hong Kong
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.867 19.125h.008v.008h-.008v-.008z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Skills
            </div>
            <div className="text-sm flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <p
                    className="bg-gray-100 rounded-md px-1.5 py-0.5 print:p-0 print:bg-none"
                    key={skill}
                  >
                    {skill}
                  </p>
                ))
              ) : (
                <p>404 Skills not found</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Experience
            </div>
            <div className="space-y-2 ">
              <div className="md:flex md:gap-2">
                <div className="text-xs md:w-16 md:flex-shrink-0">
                  2023-07 - 2023-08
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm">Developer</p>
                  <p className=" text-gray-600 italic text-xs">
                    Google, Hong Kong
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 text-justify">
                    <li>
                      Quis nisi minim exercitation quis in veniam proident enim
                      dolore veniam. Consectetur est deserunt enim ut enim
                      aliquip quis. Exercitation ipsum sit tempor id magna duis
                      consectetur quis in fugiat enim laborum sit.
                    </li>
                    <li>
                      Reprehenderit proident elit occaecat sit est labore
                      ullamco voluptate. Amet anim ex id Lorem. Sunt sunt
                      reprehenderit do proident dolor. Pariatur nisi dolor
                      deserunt laboris quis nulla laboris ex.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Certifications
            </div>
            <ul className="space-y-1 text-sm pl-4 text-gray-600 list-disc">
              <li>2023-08 | Google Cloud Architect Certificate</li>
              <li>2023-07 | Google Analytics Certificate</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 font-medium text-md lg:text-lg items-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8"
              >
                <path
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Honors & Awards
            </div>
            <ul className="space-y-1 text-sm pl-4 text-gray-600 list-disc">
              <li>2023-08 | Champion, XXX Design Award</li>
              <li>2023-07 | 1st Runner-up, XXX Design Award</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
