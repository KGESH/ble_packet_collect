-- CreateTable
CREATE TABLE "routers" (
    "router_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "routers_pkey" PRIMARY KEY ("router_id")
);

-- CreateTable
CREATE TABLE "sensors" (
    "sensor_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "router_id" UUID NOT NULL,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("sensor_id")
);

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_router_id_fkey" FOREIGN KEY ("router_id") REFERENCES "routers"("router_id") ON DELETE RESTRICT ON UPDATE CASCADE;
