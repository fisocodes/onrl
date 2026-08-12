import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";

@Module({
  imports: [BullModule.registerQueue({ name: "mailer" })],
})
export class MailerModule {}
