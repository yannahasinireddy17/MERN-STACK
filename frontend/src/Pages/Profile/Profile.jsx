import { Card, Avatar, Text, Group, Container } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getName, getIsLoggedIn } from '../../redux/slices/User';

const Profile = () => {
  const name = useSelector(getName);
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <Container style={{ padding: 40 }}>
        <Text>Please log in to view your profile.</Text>
      </Container>
    );
  }

  // derive email from name if not stored separately
  // The app stores email in state; attempt to read it directly
  // Fallback to placeholder if not set
  const email = useSelector((state) => state.user.email) || '';

  return (
    <Container size="sm" style={{ paddingTop: 40 }}>
      <Card shadow="sm" padding="lg">
        <Group position="center" direction="column" spacing="md">
          <Avatar size={100} radius={100} src={useSelector((s) => s.user.avatar) || undefined} />
          <Text weight={700} size="lg">{name || 'Hasini Reddy'}</Text>
          <Text color="dimmed">{email || 'yannahasinireddy@gmail.com'}</Text>
        </Group>
      </Card>
    </Container>
  );
}

export default Profile;
