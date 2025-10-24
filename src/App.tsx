// src/App.tsx
import React from 'react';
import { Button, Container, Typography, List, ListItem, TextField } from '@mui/material';
import { signInAnonymously, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db, auth } from './firebase/firebaseClient';

type Note = { id: string; text: string; createdAt: string };

const notesRef = collection(db, 'notes');

async function fetchNotes(): Promise<Note[]> {
  const q = query(notesRef, orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as Note[];
}

export default function App() {
  const [user, setUser] = React.useState<any>(null);
  const [text, setText] = React.useState('');
  const qc = useQueryClient();

  React.useEffect(() => auth.onAuthStateChanged(u => setUser(u)), []);

  const { data: notes, isLoading } = useQuery({ queryKey: ['notes'], queryFn: fetchNotes, staleTime: 1000 * 10 });

  const createNote = useMutation({
    mutationFn: async (payload: { text: string }) => {
      const docRef = await addDoc(notesRef, { text: payload.text, createdAt: new Date().toISOString() });
      return docRef.id;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['notes'] })
  });

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>Vite + Firebase + Vercel Starter</Typography>

      {user ? (
        <>
          <Typography sx={{ mb: 2 }}>Signed in anonymously: {user.uid}</Typography>
          <Button variant="contained" onClick={() => signOut(auth)} sx={{ mb: 2 }}>Sign out</Button>
        </>
      ) : (
        <Button variant="contained" onClick={() => signInAnonymously(auth)} sx={{ mb: 2 }}>Sign in (anonymous)</Button>
      )}

      <div style={{ marginTop: 16 }}>
        <TextField
          label="Add a note"
          value={text}
          onChange={(e) => setText(e.target.value)}
          size="small"
          sx={{ mr: 1 }}
        />
        <Button
          variant="outlined"
          onClick={() => { if (text.trim()) { createNote.mutate({ text }); setText(''); } }}
        >
          Save
        </Button>
      </div>

      <Typography variant="h6" sx={{ mt: 4 }}>Notes</Typography>
      {isLoading ? <div>Loading...</div> : (
        <List>
          {notes?.map(n => (
            <ListItem key={n.id}>{n.text} <Typography variant="caption" sx={{ ml: 2 }}>{new Date(n.createdAt).toLocaleString()}</Typography></ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
