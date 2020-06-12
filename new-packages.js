import React from "react";

const styles = {
  a: {
    color: "inherit",
    fontFamily: "IBM Plex Mono, monospace",
  },
};

// HACK: fix mdx-deck issue
export default () => (
  <ul>
    <li>
      <a
        href="https://github.com/gsandf/wordpress-graphql-schema"
        style={styles.a}
      >
        wordpress-graphql-schema
      </a>
    </li>
    <li>
      <a href="https://github.com/gsandf/create-root-schema" style={styles.a}>
        create-root-schema
      </a>
    </li>
    <li>
      <a href="https://github.com/gsandf/create-gsandf-site" style={styles.a}>
        create-gsandf-site
      </a>
    </li>
  </ul>
);
