import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './typeorm/data-source';
import { UserModule } from './user/user.module';
import { AuthCodeController } from './auth-code/auth-code.controller';
import { AuthCodeModule } from './auth-code/auth-code.module';
import { UserCredentialModule } from './user-credential/user-credential.module';
import { AuthCodeService } from './auth-code/auth-code.service';
import { UserCredentialService } from './user-credential/user-credential.service';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './business/business.module';
import { UserService } from './user/user.service';
import { RefreshTokenService } from './refresh-token/refresh-token.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AuthCodeModule,
    UserCredentialModule,
    BusinessModule,
  ],
  controllers: [AppController, AuthCodeController],
  providers: [
    AppService,
    AuthCodeService,
    UserService,
    UserCredentialService,
    RefreshTokenService,
  ],
})
export class AppModule {}
