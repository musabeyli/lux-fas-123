import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "sZ5SvX7SCiapc2PanYFiTM",  // ID of a project you are using
      token: "slJjVmh7MZgLVdWqKcW8XYEAOy4QdaTYvyGjXrJwR2jcpY3PAY89qo5L1Ear66HdLgJLSIQV5rW3WswgFbXsA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})