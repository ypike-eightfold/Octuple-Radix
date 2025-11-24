import React, { useState } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Badge,
  Avatar,
  Separator,
  Progress,
  TextArea,
  Select,
  ScrollArea
} from '@radix-ui/themes';
import { Icon } from '../components/Icon';
import { sampleCandidate } from './data/mockData';
import { Comment, TimelineEvent } from './data/types';

interface CandidateDetailsProps {
  version?: 'radix' | 'v2.5';
}

export const CandidateDetails: React.FC<CandidateDetailsProps> = ({ version = 'radix' }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(sampleCandidate.comments);

  const candidate = sampleCandidate;

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: `comment-${Date.now()}`,
        author: {
          name: 'Current User',
          role: 'HR Manager',
          avatar: '/avatars/current-user.jpg'
        },
        content: newComment,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'comment'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const RatingStars = ({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) => (
    <Flex gap="1">
      {Array.from({ length: maxRating }, (_, index) => (
        <Box key={index}>
          {index < rating ? (
            <Icon name="star" color="orange" size={16} />
          ) : (
            <Icon name="star_outline" color="gray" size={16} />
          )}
        </Box>
      ))}
    </Flex>
  );

  const StageIndicator = ({ stage, status }: { stage: string; status: 'completed' | 'current' | 'upcoming' }) => {
    const getColor = () => {
      switch (status) {
        case 'completed': return 'green';
        case 'current': return 'blue';
        case 'upcoming': return 'gray';
        default: return 'gray';
      }
    };

    return (
      <Flex direction="column" align="center" gap="2" style={{ minWidth: '80px' }}>
        <Box
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: status === 'completed' ? 'var(--green-9)' : 
                           status === 'current' ? 'var(--blue-9)' : 'var(--gray-6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          {status === 'completed' ? '✓' : status === 'current' ? '●' : '○'}
        </Box>
        <Text size="1" color={getColor()} weight="medium" style={{ textAlign: 'center' }}>
          {stage}
        </Text>
      </Flex>
    );
  };

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)', padding: '24px' }}>
      <Box style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <Flex gap="2" align="center" style={{ marginBottom: '16px' }}>
          <Text size="2" color="gray">Candidates</Text>
          <Text size="2" color="gray">&gt;</Text>
          <Text size="2">Candidate Details</Text>
        </Flex>

        {/* Header */}
        <Card style={{ padding: '24px', marginBottom: '24px' }}>
          <Flex justify="between" align="start">
            <Flex gap="4">
              <Avatar size="5" fallback="JT" />
              <Box>
                <Heading size="5">{candidate.name}</Heading>
                <Text size="3" color="blue" weight="medium">{candidate.role}</Text>
                <Flex gap="4" style={{ marginTop: '8px' }}>
                  <Text size="2" color="gray">📞 {candidate.phone}</Text>
                  <Text size="2" color="gray">📧 {candidate.email}</Text>
                  <Text size="2" color="gray">📍 {candidate.location}</Text>
                </Flex>
              </Box>
            </Flex>
            
            <Flex gap="3">
              <Select.Root defaultValue="interview">
                <Select.Trigger>
                  <Flex gap="2" align="center">
                    Move to Offer <Icon name="expand_more" size={16} />
                  </Flex>
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="review">Under Review</Select.Item>
                  <Select.Item value="interview">Interview</Select.Item>
                  <Select.Item value="offer">Offer</Select.Item>
                  <Select.Item value="hired">Hired</Select.Item>
                </Select.Content>
              </Select.Root>
              
              <Button variant="ghost">
                <Icon name="edit" size={16} />
                Edit
              </Button>
              
              <Button variant="ghost">
                <Icon name="visibility" size={16} />
                View job post
              </Button>
            </Flex>
          </Flex>
        </Card>

        <Grid columns="3" gap="6">
          {/* Left Column - Main Content */}
          <Box style={{ gridColumn: '1 / 3' }}>
            {/* Pipeline Progress */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Heading size="4" style={{ marginBottom: '20px' }}>Application Progress</Heading>
              <Flex justify="between" align="center">
                {candidate.timeline.map((event, index) => (
                  <React.Fragment key={event.id}>
                    <StageIndicator stage={event.stage} status={event.status} />
                    {index < candidate.timeline.length - 1 && (
                      <Box style={{ 
                        flex: 1, 
                        height: '2px', 
                        backgroundColor: event.status === 'completed' ? 'var(--green-9)' : 'var(--gray-6)',
                        margin: '0 8px'
                      }} />
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </Card>

            {/* Work Experience */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
                <Heading size="4">Working experience</Heading>
                <Text size="2" color="gray">4 yr 7 mos</Text>
                <Button variant="ghost" size="1">
                  <Icon name="edit" size={14} />
                  Update
                </Button>
              </Flex>

              {candidate.workExperience.map((exp) => (
                <Box key={exp.id} style={{ marginBottom: '16px' }}>
                  <Flex justify="between" align="start">
                    <Box>
                      <Text size="3" weight="bold">{exp.title}</Text>
                      <Text size="2" color="blue">{exp.company}</Text>
                      <Text size="2" color="gray">{exp.location} • {exp.type}</Text>
                    </Box>
                    <Badge variant="soft" color={exp.current ? 'green' : 'gray'}>
                      {exp.current ? 'Working' : 'Past'}
                    </Badge>
                  </Flex>
                  <Text size="2" color="gray" style={{ marginTop: '4px' }}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </Text>
                  {exp !== candidate.workExperience[candidate.workExperience.length - 1] && (
                    <Separator style={{ margin: '16px 0' }} />
                  )}
                </Box>
              ))}
            </Card>

            {/* Cover Letter */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Cover letter</Heading>
              <Text size="2" style={{ lineHeight: '1.6' }}>
                {candidate.coverLetter}
              </Text>
              <Button variant="soft" size="2" style={{ marginTop: '12px' }}>
                Read more
              </Button>
            </Card>

            {/* Resume */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Resume</Heading>
              <Flex gap="3" align="center">
                <Box style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--red-9)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  PDF
                </Box>
                <Box style={{ flex: 1 }}>
                  <Text size="2" weight="medium">Resume.pdf</Text>
                  <Text size="1" color="gray">340 kb</Text>
                </Box>
                <Button variant="ghost" size="2">
                  <Icon name="download" size={16} />
                </Button>
              </Flex>
            </Card>

            {/* Comments Section */}
            <Card style={{ padding: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Comments</Heading>
              
              <ScrollArea style={{ height: '300px' }}>
                <Flex direction="column" gap="4">
                  {comments.map((comment) => (
                    <Flex key={comment.id} gap="3">
                      <Avatar size="2" fallback={comment.author.name.slice(0, 2)} />
                      <Box style={{ flex: 1 }}>
                        <Flex gap="2" align="center" style={{ marginBottom: '4px' }}>
                          <Text size="2" weight="bold">{comment.author.name}</Text>
                          <Text size="1" color="gray">{comment.timestamp}</Text>
                        </Flex>
                        <Text size="2" style={{ lineHeight: '1.5' }}>
                          {comment.content}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              </ScrollArea>

              <Separator style={{ margin: '16px 0' }} />
              
              <Flex direction="column" gap="3">
                <TextArea 
                  placeholder="Type a message"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  style={{ minHeight: '80px' }}
                />
                <Flex justify="end">
                  <Button onClick={addComment}>
                    <Icon name="send" size={16} />
                    Send
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </Box>

          {/* Right Column - Evaluations */}
          <Box>
            <Card style={{ padding: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
                <Heading size="4">Evaluations</Heading>
                <Button variant="ghost" size="1">
                  <Icon name="edit" size={14} />
                  Update
                </Button>
              </Flex>

              {/* Overall Rating */}
              <Box style={{ marginBottom: '24px' }}>
                <Text size="2" color="gray" style={{ marginBottom: '8px' }}>Overall Rating</Text>
                <Flex gap="3" align="center">
                  <Text size="6" weight="bold">{candidate.overallRating.toFixed(1)}</Text>
                  <RatingStars rating={Math.floor(candidate.overallRating)} />
                </Flex>
                <Text size="1" color="gray">Good potential with some training</Text>
              </Box>

              <Separator style={{ margin: '16px 0' }} />

              {/* Individual Ratings */}
              <Flex direction="column" gap="4">
                <Box>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Technical Skills</Text>
                    <RatingStars rating={candidate.evaluations.technicalSkills} />
                  </Flex>
                  <Text size="1" color="gray">Solid skills but lacks experience in cloud technologies</Text>
                </Box>

                <Box>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Problem-Solving Ability</Text>
                    <RatingStars rating={candidate.evaluations.problemSolving} />
                  </Flex>
                  <Text size="1" color="gray">Exceptional analytical abilities, quickly identified solutions</Text>
                </Box>

                <Box>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Communication Skills</Text>
                    <RatingStars rating={candidate.evaluations.communication} />
                  </Flex>
                  <Text size="1" color="gray">Good communicator, though could improve presentation of technical ideas</Text>
                </Box>

                <Box>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Cultural Fit</Text>
                    <RatingStars rating={candidate.evaluations.culturalFit} />
                  </Flex>
                  <Text size="1" color="gray">Great attitude and team-oriented</Text>
                </Box>

                <Box>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Adaptability</Text>
                    <RatingStars rating={candidate.evaluations.adaptability} />
                  </Flex>
                  <Text size="1" color="gray">Shows willingness to learn and adapt</Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
