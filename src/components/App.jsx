import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { LoginForm } from './LoginForm';
import upcomingEvents from '../upcoming-events.json';
import { Container } from './App.styled';
import { Box } from './Box/Box';
import { SignUpForm } from './SignUpForm';

export const App = () => {
  return (
    <>
      <Box bg="primaryBg" color="darkBlue" as="main">
        <Container>
          <PageTitle text="24th Core Worlds Coalition Conference" />
          <EventBoard events={upcomingEvents} />
        </Container>
      </Box>
      <LoginForm onSubmit={values => console.log(values)} />
      <SignUpForm onSubmit={values => console.log(values)} />
    </>
  );
};
