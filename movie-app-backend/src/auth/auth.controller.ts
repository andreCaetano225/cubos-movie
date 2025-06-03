import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './Dtos/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() userLoginDto: LoginDto) {
    return this.authService.login(userLoginDto);
  }

  @Post('register')
  register(@Body() userRegistrationDto: RegisterDto) {
    return this.authService.register(userRegistrationDto);
  }
}
