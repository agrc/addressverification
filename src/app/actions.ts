"use server";
import pg from "pg";

let client: pg.Client | null = null;
async function getClient(): Promise<pg.Client> {
  if (!client) {
    client = new pg.Client({
      user: "agrc",
      password: "agrc",
      host: "opensgid.agrc.utah.gov",
      database: "opensgid",
    });
    await client.connect();
  }

  return client;
}

export async function getTypeahead(text: string) {
  const client = await getClient();
  const { rows } = await client.query(
    `SELECT fulladd, xid FROM location.address_points WHERE fulladd LIKE $1 LIMIT 10`,
    [`${text}%`]
  );

  return rows;
}
