import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text, Heading, Blockquote, Code, Em, Kbd, Link, Quote, Strong } from '@radix-ui/themes';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllComponents: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ maxWidth: 600 }}>
      <Flex direction="column" gap="3">
        <Heading size="8">Heading Size 8</Heading>
        <Heading size="7">Heading Size 7</Heading>
        <Heading size="6">Heading Size 6</Heading>
        <Heading size="5">Heading Size 5</Heading>
        <Heading size="4">Heading Size 4</Heading>
        <Heading size="3">Heading Size 3</Heading>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="5">Text Size 5 - Large body text</Text>
        <Text size="4">Text Size 4 - Medium body text</Text>
        <Text size="3">Text Size 3 - Default body text</Text>
        <Text size="2">Text Size 2 - Small body text</Text>
        <Text size="1">Text Size 1 - Extra small text</Text>
      </Flex>

      <Blockquote>
        "This is a blockquote. It's used for highlighting important quotes or testimonials."
      </Blockquote>

      <Text>
        You can use <Strong>Strong text</Strong> for emphasis, <Em>Em for italic</Em>, 
        and <Code>inline code</Code> in your content.
      </Text>

      <Text>
        Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
      </Text>

      <Quote>
        A short inline quote within a sentence.
      </Quote>

      <Text>
        Visit our <Link href="#">documentation</Link> for more information.
      </Text>
    </Flex>
  ),
};

export const Headings: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Heading size="9">Heading 9 - Extra Large</Heading>
      <Heading size="8">Heading 8 - Very Large</Heading>
      <Heading size="7">Heading 7 - Large</Heading>
      <Heading size="6">Heading 6 - Medium Large</Heading>
      <Heading size="5">Heading 5 - Medium</Heading>
      <Heading size="4">Heading 4 - Small Medium</Heading>
      <Heading size="3">Heading 3 - Small</Heading>
      <Heading size="2">Heading 2 - Very Small</Heading>
      <Heading size="1">Heading 1 - Extra Small</Heading>
    </Flex>
  ),
};

export const TextSizes: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Text size="9">Size 9 - The quick brown fox</Text>
      <Text size="8">Size 8 - The quick brown fox</Text>
      <Text size="7">Size 7 - The quick brown fox</Text>
      <Text size="6">Size 6 - The quick brown fox</Text>
      <Text size="5">Size 5 - The quick brown fox</Text>
      <Text size="4">Size 4 - The quick brown fox</Text>
      <Text size="3">Size 3 - The quick brown fox</Text>
      <Text size="2">Size 2 - The quick brown fox</Text>
      <Text size="1">Size 1 - The quick brown fox</Text>
    </Flex>
  ),
};

export const TextWeights: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Text weight="light">Light (300) - The quick brown fox jumps over the lazy dog</Text>
      <Text weight="regular">Regular (400) - The quick brown fox jumps over the lazy dog</Text>
      <Text weight="medium">Medium (500) - The quick brown fox jumps over the lazy dog</Text>
      <Text weight="bold">Bold (600) - The quick brown fox jumps over the lazy dog</Text>
    </Flex>
  ),
};

export const TextColors: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Text>Default color text</Text>
      <Text color="gray">Gray text</Text>
      <Text color="indigo">Indigo text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="green">Green text</Text>
      <Text color="orange">Orange text</Text>
      <Text color="red">Red text</Text>
    </Flex>
  ),
};

export const InlineElements: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ maxWidth: 500 }}>
      <Text>
        This paragraph contains <Strong>strong (bold) text</Strong> for emphasis.
      </Text>
      
      <Text>
        This paragraph has <Em>emphasized (italic) text</Em> for subtle emphasis.
      </Text>
      
      <Text>
        Use <Code>const greeting = "Hello World";</Code> for inline code snippets.
      </Text>
      
      <Text>
        The <Quote>quick brown fox</Quote> jumped over the lazy dog.
      </Text>
    </Flex>
  ),
};

export const KeyboardShortcuts: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Text>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy</Text>
      <Text>Press <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> to paste</Text>
      <Text>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to search</Text>
      <Text>Press <Kbd>Esc</Kbd> to close</Text>
      <Text>Press <Kbd>Enter</Kbd> to submit</Text>
    </Flex>
  ),
};

export const Blockquotes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ maxWidth: 600 }}>
      <Blockquote size="3">
        Design is not just what it looks like and feels like. Design is how it works.
      </Blockquote>
      
      <Blockquote size="2">
        The best way to predict the future is to invent it.
      </Blockquote>
      
      <Blockquote size="1">
        Simplicity is the ultimate sophistication.
      </Blockquote>
    </Flex>
  ),
};

export const Links: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text>
        Visit our <Link href="#">documentation</Link> to learn more.
      </Text>
      
      <Text>
        Check out the <Link href="#" color="indigo">Radix Themes</Link> for component examples.
      </Text>
      
      <Text>
        Read our <Link href="#" underline="always">privacy policy</Link> for details.
      </Text>
      
      <Link href="#" size="5">Large standalone link</Link>
      <Link href="#" size="3">Medium standalone link</Link>
      <Link href="#" size="2">Small standalone link</Link>
    </Flex>
  ),
};

export const ArticleExample: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ maxWidth: 650 }}>
      <Heading size="7">Getting Started with Design Systems</Heading>
      
      <Text size="3" color="gray">
        Published on October 21, 2025 • 5 min read
      </Text>
      
      <Text size="4">
        A design system is a <Strong>collection of reusable components</Strong>, guided by 
        clear standards, that can be assembled together to build any number of applications.
      </Text>
      
      <Blockquote>
        Design systems enable teams to build better products faster by making design reusable.
      </Blockquote>
      
      <Heading size="5">Key Components</Heading>
      
      <Text>
        Every design system should include:
      </Text>
      
      <Flex direction="column" gap="2" ml="4">
        <Text>• <Strong>Design tokens</Strong> - Colors, typography, spacing</Text>
        <Text>• <Strong>Components</Strong> - Reusable UI elements</Text>
        <Text>• <Strong>Patterns</Strong> - Common solutions to recurring problems</Text>
        <Text>• <Strong>Documentation</Strong> - Guidelines and best practices</Text>
      </Flex>
      
      <Heading size="5">Implementation</Heading>
      
      <Text>
        To implement a component, you can use <Code>npm install @radix-ui/themes</Code> 
        to get started. For more details, visit the <Link href="#">official documentation</Link>.
      </Text>
      
      <Text size="2" color="gray">
        <Em>Note: This is a sample article demonstrating typography components.</Em>
      </Text>
    </Flex>
  ),
};

