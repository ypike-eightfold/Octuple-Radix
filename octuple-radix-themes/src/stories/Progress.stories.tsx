import type { Meta, StoryObj } from '@storybook/react';
import { Progress, Button, Flex, Card, Text } from '@radix-ui/themes';
import { useState } from 'react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={50} />,
};

export const Complete: Story = {
  render: () => <Progress value={100} />,
};

export const Error: Story = {
  render: () => <Progress value={30} color="red" />,
};

export const AllStatuses: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Default (25%)</Text>
        <Progress value={25} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">In Progress (50%)</Text>
        <Progress value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Almost Done (75%)</Text>
        <Progress value={75} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Complete (100%)</Text>
        <Progress value={100} />
      </Flex>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="1">Size 1</Text>
        <Progress size="1" value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2">Size 2</Text>
        <Progress size="2" value={50} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="3">Size 3</Text>
        <Progress size="3" value={50} />
      </Flex>
    </Flex>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Indigo (Default)</Text>
        <Progress value={60} color="indigo" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Blue</Text>
        <Progress value={60} color="blue" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Green (Success)</Text>
        <Progress value={60} color="green" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Amber (Warning)</Text>
        <Progress value={60} color="amber" />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">Red (Error)</Text>
        <Progress value={60} color="red" />
      </Flex>
    </Flex>
  ),
};

export const MultiStepForm: Story = {
  render: function MultiStepFormExample() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const progress = (step / totalSteps) * 100;
    
    return (
      <Card style={{ width: 450 }}>
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center">
            <Text size="5" weight="bold">Form Progress</Text>
            <Text size="2" color="gray">Step {step} of {totalSteps}</Text>
          </Flex>
          
          <Progress value={progress} size="2" />
          
          <Flex gap="2" justify="between" mt="2">
            <Button 
              variant="soft" 
              color="gray"
              disabled={step === 1}
              onClick={() => setStep(Math.max(1, step - 1))}
            >
              Previous
            </Button>
            <Flex gap="2">
              <Button 
                variant="outline"
                onClick={() => setStep(1)}
              >
                Reset
              </Button>
              <Button 
                onClick={() => setStep(Math.min(totalSteps, step + 1))}
                disabled={step === totalSteps}
              >
                Next
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  },
};

export const AnimatedUpload: Story = {
  render: function AnimatedUploadExample() {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    
    const startUpload = () => {
      setIsUploading(true);
      setProgress(0);
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    };
    
    return (
      <Card style={{ width: 400 }}>
        <Flex direction="column" gap="4">
          <Text size="4" weight="bold">Upload File</Text>
          
          {progress > 0 && (
            <Flex direction="column" gap="2">
              <Flex justify="between">
                <Text size="2">document.pdf</Text>
                <Text size="2" color="gray">{Math.round(progress)}%</Text>
              </Flex>
              <Progress 
                value={progress} 
                color={progress === 100 ? 'green' : 'indigo'}
              />
            </Flex>
          )}
          
          <Button 
            onClick={startUpload}
            disabled={isUploading}
            style={{ width: '100%' }}
          >
            {isUploading ? 'Uploading...' : progress === 100 ? 'Upload Complete!' : 'Start Upload'}
          </Button>
        </Flex>
      </Card>
    );
  },
};

