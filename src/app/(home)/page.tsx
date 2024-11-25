
<<<<<<< HEAD
'use client'

import { useSession } from 'next-auth/react';
import NonAuthHomeView from '../../sections/NonAuthHomeView';
import AuthHomeView from '../../sections/AuthHomeView';
import Typography from '@mui/material/Typography';

// export const metadata = { title: "Domov | Kutyl s.r.o." };
=======
// src/app/page.tsx

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import AuthHomeView from "../../sections/AuthHomeView";
import NonAuthHomeView from "../../sections/NonAuthHomeView";
>>>>>>> 4884aae69cdf60cfa05934141fd199d9aba7054b

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return <NonAuthHomeView />;
    }

    return <AuthHomeView session={session} />;
  } catch (error) {
    console.error("Error fetching session:", error);
    return <NonAuthHomeView />;
  }
}




