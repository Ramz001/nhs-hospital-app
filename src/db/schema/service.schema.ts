import {
  pgTable,
  uuid,
  text,
  numeric,
  timestamp,
  index,
} from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'
import { relations } from 'drizzle-orm/relations'
import { createSelectSchema } from 'drizzle-zod'

/** Define the service_type table with metadata */
export const serviceTypes = pgTable('service_types', {
  id: uuid().defaultRandom().primaryKey().notNull(),
  title: text().notNull(),           // Short human-readable title
  description: text().notNull(),     // Full description
  icon: text(),                       // Optional icon path or emoji
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow(),
})

/** Define the services table referencing service_types */
export const services = pgTable(
  'services',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    serviceTypeId: uuid().notNull().references(() => serviceTypes.id),
    name: text().notNull(),
    address: text().notNull(),
    postcode: numeric({ precision: 6, scale: 0 }).notNull(),
    telephone: text().notNull(),
    latitude: numeric().notNull(),
    longitude: numeric().notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).defaultNow(),
  },
  (table) => [
    index('idx_services_postcode').using('btree', table.postcode.asc().nullsLast()),
    sql`CHECK (${table.postcode} BETWEEN 100000 AND 999999)`,
  ]
)

/** Relations */
export const servicesRelations = relations(services, ({ one }) => ({
  serviceType: one(serviceTypes, {
    fields: [services.serviceTypeId],
    references: [serviceTypes.id],
  }),
}))

export const serviceTypesRelations = relations(serviceTypes, ({ many }) => ({
  services: many(services),
}))

/** Optional: create Zod schemas for selection */
export const ServiceTypeSchema = createSelectSchema(serviceTypes)
export const ServiceSchema = createSelectSchema(services)
