'use client';

import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useStore } from '@/lib/stores/useStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ExampleComponent() {
  // Zustand store
  const { user, setUser } = useStore();

  // Convex queries and mutations
  // const users = useQuery(api.users.list);
  // const createUser = useMutation(api.users.create);

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to convex-test-v1</h2>
      <p className="mb-4">This project is set up with Next.js, Convex, and Zustand.</p>
      <Button onClick={() => console.log('Ready to build!')}>Get Started</Button>
    </Card>
  );
}
