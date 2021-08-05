<p align="center">
  <img alt="Carraway" src="https://raw.githubusercontent.com/keplersj/carraway/master/assets/Carraway_Monogram.svg?sanitize=true" width="100" />
</p>
<h1 align="center">
  Carraway
</h1>

Tool to simplify building a [Gatsby](https://www.gatsbyjs.org/) site. For more information see [Motivation](#motivation) and [Implementation](#implementation) below or read my blog post [Carraway: A Tool to Simplify Gatsby](https://keplersj.com/blog/2019-11-09-carraway-a-tool-to-simplify-gatsby/)
.
## Installation

```bash
# using npm:

npm install gatsby carraway

# using yarn:

yarn add gatsby carraway
```

## Usage

Create a `gatsby.config.json` file in your repos root or add a `gatsby` field to your `package.json`, with the following structure:

```json
{
  "siteMetadata": {},
  "plugins": []
}
```

This will act the basis for the Gatsby site Carraway builds.

### Building Site

To build your Gatsby site with Carraway, run:

```bash
carraway build
```

### Development Mode

To run your Gatsby site in development mode with Carraway, run:

```bash
carraway develop
```

### Cleaning Up

To clean up the artifacts created by Gatsby and Carraway, run:

```bash
carraway clean
```

## Motivation

While building [my website](https://github.com/keplersj/website), [the website for my surname](https://github.com/keplersj/surname-site), the [AtomLinter website](https://github.com/AtomLinter/atomlinter.github.io), and [AtomBuild website](https://github.com/AtomBuild/atombuild.github.io) I became very interested with idea of separating the content of a website from the code that renders it to a webpage.

Gatsby does a lot of the work for us by letting us isolate how data and content is handled from the React code that renders it. The framework then takes this one step further by allowing you to isolate entire website themes, and slotting in content and data.

Carraway aims to take this functionality to the next step with the goal of creating Gatsby sites with repos that contain no code, just the site's data, content, and configuration.

Sites using Carraway will still be using Gatsby, and you will have to configure it as such. However instead of configuring Gatsby in a `gatsby-config.js` at the repo's root, Carraway sites will be configured using JSON in a `gatsby.config.json` file at the repo's root or under the `gatsby` field in the repo's `package.json`.

### Why Carraway?

In _The Great Gatsby_ the reader follows the tale of narrator Nick Carraway as he recalls his summer with the titular character Jay Gatsby. Through the course of the book Nick befriends Gatsby and helps him attain a lifelong muse.

Similar to this dynamic of classic American literature, our Carraway simply hopes to make things easier for us and Gatsby.

## Implementation

Much like the character its named after, this package is rather simple.

Carraway creates a `gatsby-config.js` for Gatsby to interact with, and invokes Gatsby for you. This lets us declare our site's configuration somewhere else, while providing it to Gatsby when Gatsby needs it.

## Prior Art

- [Gatsby](https://www.gatsbyjs.org/) - powerful static-site generating framework
- [Docz](https://www.docz.site/) - builds a Gatsby site based on repo content

## License

Copyright [Kepler Sticka-Jones](https://keplersj.com) 2019. Licensed ISC.
