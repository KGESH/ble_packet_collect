-- CreateTable
CREATE TABLE "events" (
    "eventId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "packets" (
    "packet_id" UUID NOT NULL,
    "payload" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sensor_id" UUID NOT NULL,
    "event_id" INTEGER NOT NULL,

    CONSTRAINT "packets_pkey" PRIMARY KEY ("packet_id")
);

-- AddForeignKey
ALTER TABLE "packets" ADD CONSTRAINT "packets_sensor_id_fkey" FOREIGN KEY ("sensor_id") REFERENCES "sensors"("sensor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "packets" ADD CONSTRAINT "packets_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;
