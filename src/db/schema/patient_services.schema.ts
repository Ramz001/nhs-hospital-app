import {
  pgTable,
  index,
  uuid,
  timestamp,
  primaryKey,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm/relations'
import { services } from './service.schema'
import { patientRecords } from './patient_records.schema'

export const patientServices = pgTable(
  'patient_services',
  {
    patientRecordId: uuid('patient_record_id')
      .notNull()
      .references(() => patientRecords.id, { onDelete: 'cascade' }),

    serviceId: uuid('service_id')
      .notNull()
      .references(() => services.id, { onDelete: 'restrict' }),

    createdAt: timestamp('created_at', {
      withTimezone: true,
      mode: 'string',
    }).defaultNow(),
  },
  (table) => [
    primaryKey({
      columns: [table.patientRecordId, table.serviceId],
    }),

    index('idx_patient_services_record').using('btree', table.patientRecordId),

    index('idx_patient_services_service').using('btree', table.serviceId),
  ]
)

export const patientServicesRelations = relations(
  patientServices,
  ({ one }) => ({
    patientRecord: one(patientRecords, {
      fields: [patientServices.patientRecordId],
      references: [patientRecords.id],
    }),
    service: one(services, {
      fields: [patientServices.serviceId],
      references: [services.id],
    }),
  })
)
