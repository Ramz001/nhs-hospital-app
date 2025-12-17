import {
  pgTable,
  index,
  uuid,
  numeric,
  timestamp,
  check,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm/relations";
import { patientServices } from "./patient_services.schema";

export const patientRecords = pgTable(
  "patient_records",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),

    postcode: numeric("postcode", {
      precision: 6,
      scale: 0,
    }).notNull(),

    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),

    updatedAt: timestamp("updated_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
  },
  (table) => [
    index("idx_patient_records_postcode").using(
      "btree",
      table.postcode.asc().nullsLast()
    ),

    check(
      "patient_postcode_6_digits",
      sql`${table.postcode} BETWEEN 100000 AND 999999`
    ),
  ]
);

export const patientRecordsRelations = relations(
  patientRecords,
  ({ many }) => ({
    services: many(patientServices),
  })
);
