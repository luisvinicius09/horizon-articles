import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db";
import { createTable } from "@/server/db/schema";
import { type Adapter } from "next-auth/adapters";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userExists = await ctx.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, input.email),
      });

      if (userExists) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User already exists",
        });
      }

      const adapter = DrizzleAdapter(db, createTable) as Adapter;

      if (!adapter) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "DB Adapter not found",
        });
      }

      // TODO: encrypt password

      const user = await adapter.createUser!({
        email: input.email,
        name: input.name,
        emailVerified: null,
      });

      return { id: user.id, email: user.email };
    }),
  signIn: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, input.email),
      });

      if (!user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email or password is incorrect",
        });
      }

      // TODO: check if password matches

      const passwordMatches = true;

      if (!passwordMatches) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email or password is incorrect",
        });
      }

      return {
        id: user.id,
        email: user.email,
      };
    }),
});
