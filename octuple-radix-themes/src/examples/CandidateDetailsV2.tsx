import React, { useState } from 'react';
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Avatar,
  Separator,
  Progress,
  ScrollArea
} from '@radix-ui/themes';
import { 
  ButtonV2,
  TextAreaV2,
  SelectV2
} from '../index';
import { Icon } from '../components/Icon';
import { sampleCandidate } from './data/mockData';
import { Comment, TimelineEvent } from './data/types';

interface CandidateDetailsV2Props {
  version?: 'radix' | 'v2.5';
}

export const CandidateDetailsV2: React.FC<CandidateDetailsV2Props> = ({ version = 'v2.5' }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(sampleCandidate.comments);

  const candidate = sampleCandidate;

  const stageOptions = [
    { value: 'review', label: 'Under Review' },
    { value: 'interview', label: 'Interview' },
    { value: 'offer', label: 'Offer' },
    { value: 'hired', label: 'Hired' },
    { value: 'rejected', label: 'Rejected' }
  ];

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

        {/* Enhanced Header with V2.5 Components */}
        <Card style={{ padding: '24px', marginBottom: '24px' }}>
          <Flex justify="between" align="start">
            <Flex gap="4">
              <Avatar size="5" fallback="JT" />
              <Box>
                <Flex gap="2" align="center">
                  <Heading size="5">{candidate.name}</Heading>
                  <Badge variant="soft" color="blue">V2.5</Badge>
                </Flex>
                <Text size="3" color="blue" weight="medium">{candidate.role}</Text>
                <Flex gap="4" style={{ marginTop: '8px' }}>
                  <Text size="2" color="gray">📞 {candidate.phone}</Text>
                  <Text size="2" color="gray">📧 {candidate.email}</Text>
                  <Text size="2" color="gray">📍 {candidate.location}</Text>
                </Flex>
              </Box>
            </Flex>
            
            <Flex gap="3">
              <SelectV2
                options={stageOptions}
                value="interview"
                onChange={() => {}}
                placeholder="Move to..."
                shape="rounded"
                size="medium"
                style={{ minWidth: '160px' }}
              />
              
              <ButtonV2 variant="secondary" size="medium">
                <Icon name="edit" size={14} />
                Edit
              </ButtonV2>
              
              <ButtonV2 variant="neutral" size="medium">
                <Icon name="visibility" size={16} />
                View job post
              </ButtonV2>
            </Flex>
          </Flex>
        </Card>

        <Grid columns="3" gap="6">
          {/* Left Column - Main Content */}
          <Box style={{ gridColumn: '1 / 3' }}>
            {/* Enhanced Pipeline Progress */}
            <Card style={{ padding: '24px', marginBottom: '24px', background: 'linear-gradient(135deg, var(--blue-2) 0%, var(--indigo-2) 100%)' }}>
              <Heading size="4" style={{ marginBottom: '20px' }}>Application Progress</Heading>
              <Flex justify="between" align="center">
                {candidate.timeline.map((event, index) => (
                  <React.Fragment key={event.id}>
                    <StageIndicator stage={event.stage} status={event.status} />
                    {index < candidate.timeline.length - 1 && (
                      <Box style={{ 
                        flex: 1, 
                        height: '3px', 
                        background: event.status === 'completed' ? 
                          'linear-gradient(90deg, var(--green-9), var(--green-7))' : 
                          'var(--gray-6)',
                        margin: '0 8px',
                        borderRadius: '2px'
                      }} />
                    )}
                  </React.Fragment>
                ))}
              </Flex>
            </Card>

            {/* Enhanced Work Experience */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
                <Heading size="4">Working experience</Heading>
                <Text size="2" color="gray">4 yr 7 mos</Text>
                <ButtonV2 variant="secondary" size="small">
                  <Icon name="edit" size={14} />
                  Update
                </ButtonV2>
              </Flex>

              {candidate.workExperience.map((exp, index) => (
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
                  {index < candidate.workExperience.length - 1 && (
                    <Separator style={{ margin: '16px 0' }} />
                  )}
                </Box>
              ))}
            </Card>

            {/* Enhanced Cover Letter */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Cover letter</Heading>
              <Text size="2" style={{ lineHeight: '1.6' }}>
                {candidate.coverLetter}
              </Text>
              <ButtonV2 variant="neutral" size="small" style={{ marginTop: '12px' }}>
                Read more
              </ButtonV2>
            </Card>

            {/* Enhanced Resume */}
            <Card style={{ padding: '24px', marginBottom: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Resume</Heading>
              <Flex gap="3" align="center">
                <Box style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, var(--red-9), var(--red-7))',
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
                <ButtonV2 variant="secondary" size="medium">
                  <DownloadIcon />
                  Download
                </ButtonV2>
              </Flex>
            </Card>

            {/* Enhanced Comments Section with V2.5 Components */}
            <Card style={{ padding: '24px' }}>
              <Heading size="4" style={{ marginBottom: '16px' }}>Comments</Heading>
              
              <ScrollArea style={{ height: '300px' }}>
                <Flex direction="column" gap="4">
                  {comments.map((comment) => (
                    <Flex key={comment.id} gap="3">
                      <Avatar size="2" fallback={comment.author.name.slice(0, 2)} />
                      <Card style={{ flex: 1, padding: '12px' }}>
                        <Flex gap="2" align="center" style={{ marginBottom: '4px' }}>
                          <Text size="2" weight="bold">{comment.author.name}</Text>
                          <Badge variant="soft" size="1">{comment.author.role}</Badge>
                          <Text size="1" color="gray">{comment.timestamp}</Text>
                        </Flex>
                        <Text size="2" style={{ lineHeight: '1.5' }}>
                          {comment.content}
                        </Text>
                      </Card>
                    </Flex>
                  ))}
                </Flex>
              </ScrollArea>

              <Separator style={{ margin: '16px 0' }} />
              
              <Flex direction="column" gap="3">
                <TextAreaV2 
                  placeholder="Type a message..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  size="large"
                  shape="rounded"
                  style={{ minHeight: '80px' }}
                />
                <Flex justify="end">
                  <ButtonV2 variant="primary" size="medium" onClick={addComment}>
                    <PaperPlaneIcon />
                    Send Comment
                  </ButtonV2>
                </Flex>
              </Flex>
            </Card>
          </Box>

          {/* Right Column - Enhanced Evaluations */}
          <Box>
            <Card style={{ padding: '24px' }}>
              <Flex justify="between" align="center" style={{ marginBottom: '16px' }}>
                <Heading size="4">Evaluations</Heading>
                <ButtonV2 variant="secondary" size="small">
                  <Icon name="edit" size={14} />
                  Update
                </ButtonV2>
              </Flex>

              {/* Enhanced Overall Rating */}
              <Box style={{ 
                marginBottom: '24px', 
                padding: '16px',
                backgroundColor: 'var(--orange-2)',
                borderRadius: '12px'
              }}>
                <Text size="2" color="gray" style={{ marginBottom: '8px' }}>Overall Rating</Text>
                <Flex gap="3" align="center">
                  <Text size="6" weight="bold" style={{ color: 'var(--orange-11)' }}>
                    {candidate.overallRating.toFixed(1)}
                  </Text>
                  <RatingStars rating={Math.floor(candidate.overallRating)} />
                </Flex>
                <Text size="1" color="gray">Good potential with some training</Text>
              </Box>

              <Separator style={{ margin: '16px 0' }} />

              {/* Enhanced Individual Ratings */}
              <Flex direction="column" gap="4">
                <Card style={{ padding: '12px' }}>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Technical Skills</Text>
                    <RatingStars rating={candidate.evaluations.technicalSkills} />
                  </Flex>
                  <Text size="1" color="gray">Solid skills but lacks experience in cloud technologies</Text>
                </Card>

                <Card style={{ padding: '12px' }}>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Problem-Solving Ability</Text>
                    <RatingStars rating={candidate.evaluations.problemSolving} />
                  </Flex>
                  <Text size="1" color="gray">Exceptional analytical abilities, quickly identified solutions</Text>
                </Card>

                <Card style={{ padding: '12px' }}>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Communication Skills</Text>
                    <RatingStars rating={candidate.evaluations.communication} />
                  </Flex>
                  <Text size="1" color="gray">Good communicator, though could improve presentation of technical ideas</Text>
                </Card>

                <Card style={{ padding: '12px' }}>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Cultural Fit</Text>
                    <RatingStars rating={candidate.evaluations.culturalFit} />
                  </Flex>
                  <Text size="1" color="gray">Great attitude and team-oriented</Text>
                </Card>

                <Card style={{ padding: '12px' }}>
                  <Flex justify="between" align="center" style={{ marginBottom: '8px' }}>
                    <Text size="2" weight="medium">Adaptability</Text>
                    <RatingStars rating={candidate.evaluations.adaptability} />
                  </Flex>
                  <Text size="1" color="gray">Shows willingness to learn and adapt</Text>
                </Card>
              </Flex>

              {/* V2.5 Features Highlight */}
              <Card style={{ 
                padding: '16px', 
                marginTop: '24px', 
                background: 'linear-gradient(135deg, var(--indigo-2), var(--blue-2))'
              }}>
                <Text size="2" weight="bold" color="indigo">✨ V2.5 Enhanced Features</Text>
                <Text size="1" color="gray">
                  SelectV2 with shapes • TextAreaV2 enhanced styling • ButtonV2 variants • Improved visual design
                </Text>
              </Card>
            </Card>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
