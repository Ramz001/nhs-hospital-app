import {
  pgTable,
  pgEnum,
  index,
  uuid,
  text,
  numeric,
  timestamp,
  check,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm/relations";
import { patientServices } from "./patient_services.schema";
import { createSelectSchema } from 'drizzle-zod';

export const serviceTypeEnum = pgEnum("service_type", [
  "gp",
  "school",
  "dentist",
  "optician",
]);

export const services = pgTable(
  "services",
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    type: serviceTypeEnum().notNull(),
    name: text().notNull(),
    address: text().notNull(),
    postcode: numeric({ precision: 6, scale: 0 }).notNull(),
    telephone: text().notNull(),
    latitude: numeric().notNull(),
    longitude: numeric().notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
  },
  (table) => [
    index("idx_services_type_postcode").using(
      "btree",
      table.type,
      table.postcode.asc().nullsLast()
    ),

    check(
      "services_postcode_6_digits",
      sql`${table.postcode} BETWEEN 100000 AND 999999`
    ),
  ]
);

export const servicesRelations = relations(services, ({ many }) => ({
  patientServices: many(patientServices),
}));
