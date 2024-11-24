"use client";

import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col justify-center items-center h-full mt-36">
      <h1 className="text-transparent font-mono bg-clip-text bg-gradient-to-r from-red-500 via-50% via-orange-500 to-yellow-500 text-7xl font-semibold">
        404
      </h1>
      <h2 className="mt-8 text-lg font-mono">Not found</h2>
      <Button onClick={()=> {router.back()}}>Go back</Button>
    </section>
  );
}
