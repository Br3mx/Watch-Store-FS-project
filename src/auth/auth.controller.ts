/*import {
  Body,
  Controller,
  Delete,
  Post,
  Request,
  Response,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RegisterDTO } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { NoFilesInterceptor } from 'src/interceptors/no-files.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UseInterceptors(NoFilesInterceptor)
  async register(@Body() registerData: RegisterDTO) {
    console.log('registerData:', registerData);
    return this.authService.register(registerData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @UseInterceptors(NoFilesInterceptor)
  async login(@Request() req, @Response() res) {
    const tokens = await this.authService.createSession(req.user);
    res.cookie('auth', tokens, { httpOnly: true });
    res.send({
      message: 'success',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  async logout(@Request() req, @Response() res) {
    try {
      res.clearCookie('auth', { httpOnly: true });
      res.send({ message: 'success' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).send({ message: 'Error during logout' });
    }
  }
}
*/
