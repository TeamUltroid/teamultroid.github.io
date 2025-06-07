/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "sidebar": [
    {
      "type": "doc",
      "id": "ultroid/intro"
    },
    {
      "type": "category",
      "label": "Installation",
      "items": [
        "installation/heroku",
        "installation/local_deploy"
      ]
    },
    {
      "type": "category",
      "label": "Variables",
      "items": [
        "variables/env_variables",
        "variables/redis_vars"
      ]
    },
    {
      "type": "doc",
      "id": "guides/index"
    },
    {
      "type": "doc",
      "id": "pyUltroid/pyUltroid"
    },
    {
      "type": "doc",
      "id": "VCBot/vcguide"
    },
    {
      "type": "category",
      "label": "Contributing",
      "items": [
        "contributing/userplugins",
        "contributing/translate"
      ]
    }
  ]
};

export default sidebars;
