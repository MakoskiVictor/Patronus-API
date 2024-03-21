import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './characters/characters.module';
import { HousesModule } from './houses/houses.module';
import { AlternateNamesModule } from './alternate_names/alternate_names.module';
import { SpeciesModule } from './species/species.module';
import { SpellsModule } from './spells/spells.module';
import { WandsModule } from './wands/wands.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CharactersModule,
    HousesModule,
    AlternateNamesModule,
    SpeciesModule,
    SpellsModule,
    WandsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
