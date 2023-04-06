import * as React from "react"
import { chakra } from "@chakra-ui/system"

export * from "./hover"
export * from "./popover"

export default {
  title: "Components / Overlay / Popover",
  decorators: [
    (story: Function) => (
      <chakra.div mx="auto" maxW="400px" mt="200px">
        {story()}
      </chakra.div>
    ),
  ],
}
