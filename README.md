# svelte-atlaskit-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Atlaskit SVG icons as Svelte components.

This library builds [@atlastkit/icon](https://atlaskit.atlassian.com/packages/core/icon) as Svelte components with zero dependencies.

There are 7 sub-libraries:

- **lib**: `svelte-atlaskit-icons/lib`
- **bitbucket**: `svelte-atlaskit-icons/bitbucket`
- **editor**: `svelte-atlaskit-icons/editor`
- **emoji**: `svelte-atlaskit-icons/emoji`
- **hipchat**: `svelte-atlaskit-icons/hipchat`
- **jira**: `svelte-atlaskit-icons/jira`
- **media-services**: `svelte-atlaskit-icons/media-services`

## Install

```bash
yarn add -D svelte-atlaskit-icons
```

## Usage

```html
<script>
  import Add from "svelte-atlaskit-icons/lib/Add";
  import Branches from "svelte-atlaskit-icons/bitbucket/Branches";
  import Bold from "svelte-atlaskit-icons/editor/Bold";
  import Food from "svelte-atlaskit-icons/emoji/Food";
  import AudioOnly from "svelte-atlaskit-icons/hipchat/AudioOnly";
  import Capture from "svelte-atlaskit-icons/jira/Capture";
  import ActualSize from "svelte-atlaskit-icons/media-services/ActualSize";
</script>

<Add />
<Branches />
<Bold />
<Food />
<AudioOnly />
<Capture />
<ActualSize />
```

Refer to [docs/README.md](docs/README.md) for a full list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-atlaskit-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-atlaskit-icons
[build]: https://travis-ci.com/metonym/svelte-atlaskit-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-atlaskit-icons
