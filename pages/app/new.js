import Layout from "@/components/app/Layout";
import toast, { Toaster } from "react-hot-toast";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";


export default function NewPage() {
  return (
    <>
      <Layout>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 10000,
          }}
        />
        <div className="max-w-screen-xl mx-auto px-10 sm:px-20 mt-10 mb-16">
          <h1 className="font-cal text-5xl mb-12">New Page</h1>
        </div>
      </Layout>
    </>
  );
}
