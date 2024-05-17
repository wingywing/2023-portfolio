import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "dist",
  },
  media: {
    tina: {
      mediaRoot: "assets/img",
      publicFolder: "dist",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "writing",
        label: "Writing",
        path: "src/writing",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "externalLink",
            label: "External Link",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "tag",
            label: "Tag",
            list: true,
          }
        ],
      },
      {
        name: "notes",
        label: "Notes",
        path: "src/notes",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "externalLink",
            label: "External Link",
          },
          {
            type: "string",
            name: "targetLink",
            label: "Target Link",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "notetype",
            label: "Note type",
            list: true,
            options: [
              {
                value: 'note',
                label: 'Note',
              },
              {
                value: 'reply',
                label: 'Reply',
              },
              {
                value: 'photo',
                label: 'Photo',
              },
              {
                value: 'like',
                label: 'Like',
              },
              {
                value: 'bookmark',
                label: 'Bookmark',
              },
            ]
          },
          {
            type: "string",
            name: "tag",
            label: "Tag",
            list: true,
          }
        ],
      },
    ],
  },
});
