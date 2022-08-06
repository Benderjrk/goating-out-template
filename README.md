# Cardano Goat: Goating Out Next.js App

##### It's hard for developers to get experience. We would like to change that. One of the main reasons Cardano Goat was created was to give a common goal.

#### What is that common goal?

##### To build something, gain experience, work as a team, challenge yourself and others. Building features around something that is builder owned. This is something that needs to be understood and built up in a trustless way. If we can bring together a foundation Board of Directors. We can lock away the group funds under a multisig wallet.

##### To build something, gain experience, work as a team, challenge yourself and others. Building features around something that is builder owned. This is something that needs to be understood and built up in a trustless way. If we can bring together a foundation Board of Directors. We can lock away the group funds under a multisig wallet.

Come checkout our community and ask any questions you have:
Cardano Goat Website: https://cardanogoat.io/
Discord: https://discord.gg/Dme3rqSjug
Medium: https://medium.com/@cardanogoat
Reddit: https://www.reddit.com/r/cardanogoat/
Twitch : https://www.twitch.tv/cardanogoat
Twitter: https://twitter.com/Cardano_G_O_A_T

##### This involves NFT's but I don't want you to think about them as anything but a pointer in a database. We can use [BlockFrost API](https://blockfrost.io/). Using the NFT policy ID for Cardano Goat: 65e25586798da863ffdf863053c0b412a5a4019edfc8e0ac9f2cc580

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Benderjrk/goating-out-template?style=plastic)

[![Twitter Follow](https://img.shields.io/twitter/follow/Cardano_G_O_A_T?style=social)](https://twitter.com/Cardano_G_O_A_T)
[![Discord](https://img.shields.io/discord/929963273741295696.svg?style=plastic&label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/hC5Z9bsAPd)

If youd like to show us some support to do this more often. You can send ADA or gifts to our ADA Handle
[![ADA Handle](https://img.shields.io/badge/%24ADA%20Handle-%24cardanogoat.io-brightgreen?style=plastic)](https://adahandle.com)

### Table of contents

- [Features](#features)
- [Documentation](#documentation)
- [Examples](#examples)
  - [Creating and importing simple components (typescript)](#creating-and-importing-simple-components-with-props)
  - [Using BlockFrost](#using-blockfrost-api)
- [Development](#development)
  - [Test](#test)
- [Style guidelines](#style-guidelines)

### Features

- [x] [Next.js](https://nextjs.org/docs/getting-started)
- [x] [Automated Changelog](https://github.com/conventional-changelog/standard-version)
- [x] [TailwindCSS](https://tailwindcss.com/docs/installation)
- [x] Commit Lint - tags:[feat, fix, docs, chore, style, refactor, ci, test, perf, revert] description (lowercase)
- [x] [Husky Git Hooks](https://typicode.github.io/husky/#/)
- [x] [Prettier](https://prettier.io/)
- [ ] [Lucid Cardano](https://github.com/Berry-Pool/lucid)

### Documentation

To be continued as more question arise.

### Examples

#### Creating and importing simple components with props

```typescript
import React from 'react';

interface Props {
  thing: string;
}

function ComponentTwo({ thing }: Props) {
  const passThroughProp = thing;
  return <></>;
}

export default ComponentTwo;
```

```typescript
import React from 'react';
import { ComponentTwo } from '../component-two.tsx';

function ComponentOne() {
  return (
    <>
      <ComponentTwo thing={'hello'} />
    </>
  );
}

export default ComponentOne;
```

#### Using BlockFrost API

```typescript
import { Lucid, Blockfrost } from 'lucid-cardano';

const lucid = await Lucid.new(
  new Blockfrost('https://cardano-testnet.blockfrost.io/api/v0', '<projectId>'),
  'Testnet',
);

// Assumes you are in a browser environment
const api = await window.cardano.nami.enable();
lucid.selectWallet(api);

const tx = await lucid
  .newTx()
  .payToAddress('addr...', { lovelace: 5000000n })
  .complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();

console.log(txHash);
```

---

### Development

Clone from git
`git clone https://github.com/Benderjrk/goating-out-template.git`
Install dependencies:
`cd goating-out-template`
`yarn install`

Don't have [Yarn](https://classic.yarnpkg.com/en/docs)? You can use (only if you have NPM installed and need Yarn):
`npm install --global yarn`

Dev:
`yarn dev`

#### Test

We will be working on behaviour tests when bigger functions get created. No testing at the moment.

### Style guidelines

Functional declairative higher order. No classesm just functions and decorators.
