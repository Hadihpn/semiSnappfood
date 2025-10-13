
import {Body, Controller, Post} from "@nestjs/common";
import {CheckOtpDto, SendOtpDto} from "./dto/otp.dto";
import {ApiConsumes, ApiTags} from "@nestjs/swagger";
import { AuthService } from "./auth.services";
import { FormType } from "src/common/enums/form-type.enum";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/send-otp")
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  sendOtp(@Body() otpDto: SendOtpDto) {
    return this.authService.sendOtp(otpDto);
  }
  @Post("/check-otp")
  @ApiConsumes(FormType.UrlEncoded, FormType.JSON)
  checkOtp(@Body() otpDto: CheckOtpDto) {
    return this.authService.checkOtp(otpDto);
  }
}
