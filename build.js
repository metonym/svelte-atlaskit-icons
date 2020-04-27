const fs = require("fs");
const pkg = require("./package.json");
const { cleanDir, generateFromFolder } = require("svg-to-svelte");

const options = { clean: true };

function build() {
  const lib = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs",
    "lib",
    options
  );

  const bitbucket = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/bitbucket",
    "bitbucket",
    options
  );

  const editor = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/editor",
    "editor",
    options
  );

  const emoji = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/emoji",
    "emoji",
    options
  );

  const hipchat = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/hipchat",
    "hipchat",
    options
  );

  const jira = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/jira",
    "jira",
    options
  );

  const mediaServices = generateFromFolder(
    "node_modules/@atlaskit/icon/svgs/media-services",
    "media-services",
    options
  );

  cleanDir("docs");

  const docs = [
    "# docs",
    `> ${lib.moduleNames.length} Library icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${bitbucket.moduleNames.length} Bitbucket icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${editor.moduleNames.length} Editor icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${emoji.moduleNames.length} Emoji icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${hipchat.moduleNames.length} HipChat icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${jira.moduleNames.length} JIRA icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    `> ${mediaServices.moduleNames.length} Media Services icons from @atlaskit/icon@${pkg.devDependencies["@atlaskit/icon"]}.\n`,
    "## Usage",
    "### Library icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/lib/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of Library icons by `ModuleName`",
    lib.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### Bitbucket icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/bitbucket/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of Bitbucket icons by `ModuleName`",
    bitbucket.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### Editor icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/editor/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of Editor icons by `ModuleName`",
    editor.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### Emoji icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/emoji/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of Emoji icons by `ModuleName`",
    emoji.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### HipChat icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/hipchat/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of HipChat icons by `ModuleName`",
    hipchat.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### JIRA icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/jira/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of JIRA icons by `ModuleName`",
    jira.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
    "### Media Services icons",
    "```html",
    `<script>
       import Icon from "svelte-atlaskit-icons/media-services/{ModuleName}";
     </script>

     <Icon />`,
    "```",
    "#### List of Media Services icons by `ModuleName`",
    mediaServices.moduleNames.map((moduleName) => `- ${moduleName}`).join("\n"),
  ];

  fs.writeFileSync("docs/README.md", docs.join("\n"));
}

build();
