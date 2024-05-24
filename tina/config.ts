import { defineConfig } from "tinacms";

const dateTime = (new Date()).toUTCString();
const date = (new Date()).toISOString().split('T')[0];


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
      publicFolder: "src",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "writing",
        label: "Writing",
        path: "src/writing",
        format: "md",
        defaultItem: () => {
          return {
            date: dateTime,
          }
        },
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
            name: "category",
            label: "Tags",
            list: true,
          }
        ],
      },
      {
        name: "notes",
        label: "Notes",
        path: "src/notes",
        format: "md",
        defaultItem: () => {
          return {
            date: dateTime,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "string",
            name: "targetLink",
            label: "Target Link",
          },
          {
            type: "image",
            name: "imageSrc",
            label: "Image",
          },
          {
            type: "string",
            name: "alt",
            label: "Image alt-text",
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
              {
                value: 'follow',
                label: 'Follow',
              },
            ]
          },
          {
            type: "string",
            name: "category",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "customSlug",
            label: "Slug",
          },
        ],
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              if (values.title) {
                return `${date}-${values.title
                  ?.toLowerCase()
                  .replace(/ /g, '-')}`
              } else if (values.customSlug){
                return `${date}-${values.customSlug
                  ?.toLowerCase()
                  .replace(/ /g, '-')}`
              } else {
                return `${date}`
              }
            },
          },
        },
      },
      {
        name: "now",
        label: "Now",
        path: "src/now",
        format: "md",
        defaultItem: () => {
          return {
            date: dateTime,
          }
        },
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "number",
            name: "latitude",
            label: "Location Latitude",
          },
          {
            type: "number",
            name: "longitude",
            label: "Location Longitude",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "string",
            name: "weatherLink",
            label: "Weather link for weatherwidget.io",
          },
          {
            type: "rich-text",
            name: "locationStatus",
            label: "Location Status",
          },
          {
            type: "rich-text",
            name: "work",
            label: "Work",
          },
          {
            type: "rich-text",
            name: "study",
            label: "Study",
          },
          {
            type: "rich-text",
            name: "hobbyOne",
            label: "Hobby One",
          },
          {
            type: "rich-text",
            name: "hobbyTwo",
            label: "Hobby Two",
          },
          {
            type: "rich-text",
            name: "computer",
            label: "Computer",
          },
          {
            type: "rich-text",
            name: "phone",
            label: "Phone",
          },
          {
            type: "rich-text",
            name: "drawing",
            label: "Drawing",
          },
          {
            type: "rich-text",
            name: "watch",
            label: "Watch",
          },
        ],
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: true,
            // Example of using a custom slugify function
            slugify: () => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
                return `${date}-now`
            },
          },
        },
      },
    ],
  },
});
