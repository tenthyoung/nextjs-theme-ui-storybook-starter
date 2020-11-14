module.exports = function(plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "React Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}/index.ts",
        templateFile: "plop-templates/component/index.hbs",
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/component/Component.hbs",
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.test.tsx",
        templateFile: "plop-templates/component/Component.test.hbs",
      },
      {
        type: "add",
        path: "components/{{name}}/{{name}}.stories.tsx",
        templateFile: "plop-templates/component/Component.stories.hbs",
      },
    ],
  });
};
