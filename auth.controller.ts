import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() body: { email: string; name: string; password: string }
  ) {
    const { email, name, password } = body;
    return this.authService.signup(email, name, password);
  }
}
