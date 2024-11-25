<<<<<<< HEAD
// src\sections\NonAuthHomeView.tsx


import { Typography, Box } from '@mui/material';

export default function NonAuthHomeView() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4">
        Registrovať sa
      </Typography>
    </Box>
  );
}
=======
// src/sections/NonAuthHomeView.tsx

import { Container, Typography } from "@mui/material";

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography>
        Registrujte sa, aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
    </Container>
  );
}
>>>>>>> 4884aae69cdf60cfa05934141fd199d9aba7054b
