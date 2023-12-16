import { Expose } from 'class-transformer';
import { BaseDto } from 'src/common/base.dto';
export class ImageDto extends BaseDto {
  @Expose()
  src: string;
}
