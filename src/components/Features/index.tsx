import React from "react";
import { Block } from "../Block";

export function Features() {
  return (
    <Block>
      {[
        {
          title: "Transcompile",
          content:
            "swc is a typescript / javascript compiler. It consumes a javascript or typescript file which uses recently added features like async-await and emits javascript code which can be executed on old browsers. It supports all published typescript versions and all valid ecmascript, including some stage 3 proposals as an input, and supports es3 or higher as an output",
        },
        {
          title: "Super fast",
          content:
            "It's 20x faster than babel on single thread, and 70x faster on 4 core benchmark",
        },
        {
          title: "Bundling",
          content: "spack is a super-fast javascript bundler with tree shaking",
        },
      ]}
    </Block>
  );
}
