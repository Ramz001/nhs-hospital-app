import {
  pgTable,
  uuid,
  numeric,
  timestamp,
  index,
  check,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { services } from './service.schema'
import { sql } from 'drizzle-orm'
import { createSelectSchema } from 'drizzle-zod'

/** Patient records simplified: each record links to a single service */
export const patientRecords = pgTable(
  'patient_records',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),

    serviceId: uuid()
      .notNull()
      .references(() => services.id, { onDelete: 'restrict' }),

    postcode: numeric('postcode', {
      precision: 6,
      scale: 0,
    }).notNull(),

    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    }).defaultNow(),

    updatedAt: timestamp('updated_at', {
      withTimezone: true,
      mode: 'string',
    }).defaultNow(),
  },
  (table) => [
    index('idx_patient_records_postcode').using(
      'btree',
      table.postcode.asc().nullsLast()
    ),
    index('idx_patient_records_service').using('btree', table.serviceId),
    check(
      'patient_postcode_6_digits',
      sql`${table.postcode} BETWEEN 100000 AND 999999`
    ),
  ]
)

/** Relations */
export const patientRecordsRelations = relations(patientRecords, ({ one }) => ({
  service: one(services, {
    fields: [patientRecords.serviceId],
    references: [services.id],
  }),
}))

/** Optional Zod schema */
export const PatientRecordSchema = createSelectSchema(patientRecords)
