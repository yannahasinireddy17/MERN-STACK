import { Card, Avatar, Text, Stack, Container } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getName, getIsLoggedIn } from '../../redux/slices/User';

const Profile = () => {
  const name = useSelector(getName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const avatar = useSelector((state) => state.user.avatar) || null;
  const email = useSelector((state) => state.user.email) || '';

  if (!isLoggedIn) {
    return (
      <Container style={{ padding: 40 }}>
        <Text>Please log in to view your profile.</Text>
      </Container>
    );
  }

  return (
    <Container size="sm" style={{ paddingTop: 40 }}>
      <Card shadow="sm" padding="lg">
        <Stack align="center" spacing="sm">
          <Avatar
            component="a"
            href="https://github.com/rtivital"
            target="_blank"
            src={avatar || 'avatar.png'}
            alt="it's me"
            size={120}
            radius={120}
          />
          <Text weight={700} size="lg" align="center">{name || 'Hasini Reddy'}</Text>
          <Text color="dimmed" align="center">{email || 'yannahasinireddy@gmail.com'}</Text>
        </Stack>
      </Card>
    </Container>
  );
}

export default Profile;
