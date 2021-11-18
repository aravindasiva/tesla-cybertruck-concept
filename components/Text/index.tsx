import { Box, BoxProps } from "@chakra-ui/layout"

export enum TextStyles {
  heading = "heading",
  title = "title",
  caption = "caption"
}

export type TextProps = {
  textStyle: TextStyles,
  children: string,
} & BoxProps

const Text = (props: TextProps) => {
  return <Box {...props}>{props.children}</Box>
}

export default Text