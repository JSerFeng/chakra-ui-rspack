import { PortalManager } from "@chakra-ui/portal"
import * as React from "react"

export * from "./modal"
export * from "./drawer"
export * from "./focus-ref"

export default {
  title: "Components / Overlay / Modal",
  decorators: [
    (StoryFn: Function) => (
      <PortalManager>
        <StoryFn />
      </PortalManager>
    ),
  ],
}
