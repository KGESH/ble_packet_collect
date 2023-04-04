import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class RouterMqttController {
  @MessagePattern('hello/+')
  receiveHello(@Payload() payload: unknown, @Ctx() ctx: MqttContext) {
    console.log('topic', ctx.getTopic());
    console.log('received', payload);
  }
}
