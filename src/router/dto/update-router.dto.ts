import { PartialType } from '@nestjs/mapped-types';
import { CreateRouterDto } from './create-router.dto';

export class UpdateRouterDto extends PartialType(CreateRouterDto) {}
