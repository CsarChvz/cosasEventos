// app/routes/login.ts
import { Form } from "@remix-run/react";
import { supabaseStrategy, authenticator } from "~/auth.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/node"; // or cloudflare/deno

export const loader: LoaderFunction = async ({ request }) =>
  supabaseStrategy.checkSession(request, {
    successRedirect: "/private",
  });

export const action: ActionFunction = async ({ request }) =>
  authenticator.authenticate("sb", request, {
    successRedirect: "/private",
    failureRedirect: "/login",
  });

export default function LoginPage() {
  return (
    <Form method="post">
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Sign In</button>
    </Form>
  );
}
