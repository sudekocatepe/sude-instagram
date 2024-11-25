<<<<<<< HEAD
import { Typography, Box } from '@mui/material';

export default function AuthHomeView() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4">
        Vitaj prihlásený
      </Typography>
    </Box>
  );
}
=======
// src/sections/AuthHomeView.tsx

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

import { Session } from "next-auth";

export default function AuthHomeView({ session }: { session: Session }) {

  return (
    <Container>
      <Typography> Domovská stránka - prihlásený user</Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>


      {/* <Box sx={{ mt: 2 }}>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </Box> */}
    </Container>
  );
}
>>>>>>> 4884aae69cdf60cfa05934141fd199d9aba7054b
