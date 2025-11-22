import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col } from '../components/GridV2';

const meta: Meta<typeof Row> = {
  title: 'Octuple V2.5/GridV2',
  component: Row,
  parameters: {
    docs: {
      description: {
        component: `
Our 12-column grid system is responsive, and the columns will rearrange depending on the screen size. 
It has a fixed gutter value, and a fixed margin value depending on device type to restructure the column layout best for the viewport width.

The reason a 12-column grid is more popular than an 8 or 10 columns grid is because of the variety of ways it can be divided: into columns of 1, 2, 3, 4, 6, or 12.
        `,
      },
    },
  },
  subcomponents: { Col } as any,
};

export default meta;
type Story = StoryObj<typeof Row>;

const style: React.CSSProperties = {
  background: '#A0C1E5',
  border: '2px solid #6791C4',
  padding: '8px 0',
  textAlign: 'center',
};

export const Basic: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row>
        <Col span={6} push={6}>
          <div style={style}>col-6 push-6</div>
        </Col>
        <Col span={6} pull={6}>
          <div style={style}>col-6 pull-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <div style={style}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={style}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={style}>col-4</div>
        </Col>
      </Row>
      <Row>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
        <Col span={1}>
          <div style={style}>col-1</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Horizontal_Gutter: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
    </Row>
  ),
};

export const Responsive_Gutter: Story = {
  render: () => (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 48 }}>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
    </Row>
  ),
};

export const Vertical_Gutter: Story = {
  render: () => (
    <Row gutter={[16, 16]}>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
      <Col span={3}>
        <div style={style}>col-3</div>
      </Col>
    </Row>
  ),
};

export const Column_Offset: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row>
        <Col span={4}>
          <div style={style}>col-4</div>
        </Col>
        <Col span={4} offset={4}>
          <div style={style}>col-4 col-offset-4</div>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={4}>
          <div style={style}>col-4 col-offset-4</div>
        </Col>
        <Col span={4} offset={4}>
          <div style={style}>col-4 col-offset-4</div>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          <div style={style}>col-6 col-offset-6</div>
        </Col>
        <Col span={6} offset={6}>
          <div style={style}>col-6 col-offset-6</div>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={2}>
          <div style={style}>col-6 col-offset-2</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Grid_Sort: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row>
        <Col span={8} push={4}>
          <div style={style}>col-8 col-push-4</div>
        </Col>
        <Col span={4} pull={8}>
          <div style={style}>col-4 col-pull-8</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Typesetting: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row justify="start">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row justify="end">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
      <Row justify="space-evenly">
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
        <Col span={2}>
          <div style={style}>col-2</div>
        </Col>
      </Row>
    </div>
  ),
};

const DemoBox: React.FC<{ children: React.ReactNode; value: number }> = (props) => (
  <p
    style={{
      background: '#A0C1E5',
      border: '2px solid #6791C4',
      height: `${props.value}px`,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {props.children}
  </p>
);

export const Alignment: Story = {
  render: () => (
    <>
      <Row justify="center" align="top">
        <Col span={2}>
          <DemoBox value={100}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={50}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={120}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={80}>col-2</DemoBox>
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col span={2}>
          <DemoBox value={100}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={50}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={120}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={80}>col-2</DemoBox>
        </Col>
      </Row>
      <Row justify="space-between" align="bottom">
        <Col span={2}>
          <DemoBox value={100}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={50}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={120}>col-2</DemoBox>
        </Col>
        <Col span={2}>
          <DemoBox value={80}>col-2</DemoBox>
        </Col>
      </Row>
    </>
  ),
};

export const Order_Normal: Story = {
  render: () => (
    <Row>
      <Col span={3} order={4}>
        <div style={style}>1 col-order-4</div>
      </Col>
      <Col span={3} order={3}>
        <div style={style}>2 col-order-3</div>
      </Col>
      <Col span={3} order={2}>
        <div style={style}>3 col-order-2</div>
      </Col>
      <Col span={3} order={1}>
        <div style={style}>4 col-order-1</div>
      </Col>
    </Row>
  ),
};

export const Order_Responsive: Story = {
  render: () => (
    <Row>
      <Col span={3} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        <div style={style}>1 col-order-responsive</div>
      </Col>
      <Col span={3} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        <div style={style}>2 col-order-responsive</div>
      </Col>
      <Col span={3} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        <div style={style}>3 col-order-responsive</div>
      </Col>
      <Col span={3} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
        <div style={style}>4 col-order-responsive</div>
      </Col>
    </Row>
  ),
};

export const Percentage_Columns: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row>
        <Col flex="20%">
          <div style={style}>20%</div>
        </Col>
        <Col flex="30%">
          <div style={style}>30%</div>
        </Col>
        <Col flex="50%">
          <div style={style}>50%</div>
        </Col>
      </Row>
      <Row>
        <Col flex="100px">
          <div style={style}>100px</div>
        </Col>
        <Col flex="auto">
          <div style={style}>auto</div>
        </Col>
      </Row>
      <Row>
        <Col flex={2}>
          <div style={style}>2 / 5</div>
        </Col>
        <Col flex={3}>
          <div style={style}>3 / 5</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Fill_Rest: Story = {
  render: () => (
    <div style={{ border: '1px solid #6791C4' }}>
      <Row>
        <Col flex="none">
          <div style={style}>none</div>
        </Col>
        <Col flex="auto">
          <div style={style}>auto</div>
        </Col>
        <Col flex="none">
          <div style={style}>none</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Raw_Flex_Style: Story = {
  render: () => (
    <Row wrap={false}>
      <Col flex="1 1 200px">
        <div style={style}>1 1 200px</div>
      </Col>
      <Col flex="0 1 300px">
        <div style={style}>0 1 300px</div>
      </Col>
    </Row>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Row>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={style}>Responsive Col</div>
      </Col>
    </Row>
  ),
};

export const Playground: Story = {
  args: {
    gutter: 16,
    align: 'top',
    justify: 'start',
    wrap: true,
  },
  render: (args) => (
    <Row {...args}>
      <Col span={4}>
        <div style={style}>Col 1</div>
      </Col>
      <Col span={4}>
        <div style={style}>Col 2</div>
      </Col>
      <Col span={4}>
        <div style={style}>Col 3</div>
      </Col>
      <Col span={4}>
        <div style={style}>Col 4</div>
      </Col>
    </Row>
  ),
  argTypes: {
    align: {
      options: ['top', 'middle', 'bottom', 'stretch'],
      control: { type: 'select' },
    },
    justify: {
      options: ['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'],
      control: { type: 'select' },
    },
    wrap: {
      control: { type: 'boolean' },
    },
  },
};

