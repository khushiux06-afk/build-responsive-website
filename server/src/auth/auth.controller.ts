import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('refresh')
  async refresh(@Body() body: any) {
    // Implementation for refresh token would go here
    return { message: 'Refresh functionality coming soon' };
  }

  @Post('logout')
  async logout() {
    return { message: 'Logged out successfully' };
  }
}
