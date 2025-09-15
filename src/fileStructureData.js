const fileTree = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "UI",
              type: "folder",
              children: [
                {
                  name: "buttons",
                  type: "folder",
                  children: [
                    { name: "PrimaryButton.jsx", type: "file" },
                    { name: "SecondaryButton.jsx", type: "file" },
                  ],
                },
                {
                  name: "inputs",
                  type: "folder",
                  children: [
                    { name: "TextInput.jsx", type: "file" },
                    { name: "Checkbox.jsx", type: "file" },
                  ],
                },
              ],
            },
            { name: "Header.jsx", type: "file" },
            { name: "Footer.jsx", type: "file" },
          ],
        },
        {
          name: "utils",
          type: "folder",
          children: [
            { name: "helpers.js", type: "file" },
            { name: "constants.js", type: "file" },
            {
              name: "validation",
              type: "folder",
              children: [
                { name: "formValidation.js", type: "file" },
                { name: "inputRules.js", type: "file" },
              ],
            },
          ],
        },
        { name: "App.js", type: "file" },
        { name: "index.js", type: "file" },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        {
          name: "assets",
          type: "folder",
          children: [
            { name: "logo.png", type: "file" },
            {
              name: "images",
              type: "folder",
              children: [
                { name: "banner.jpg", type: "file" },
                { name: "background.png", type: "file" },
              ],
            },
          ],
        },
        { name: "index.html", type: "file" },
        { name: "favicon.ico", type: "file" },
      ],
    },
    { name: "package.json", type: "file" },
    { name: "README.md", type: "file" },
  ];

  export const getDataWithId = () => {
    const getData = (data, id = '') => {
        return data?.map((item) => {
            let key = id ?  `${id}/${item.name}` : `/${item.name}`;
            return {
                ...item,
                id: key,
                ...(item.children && {children: getData(item.children, key)})
            }
        })
    }
    return getData(fileTree);
  }