import 'reflect-metadata'
import {loadConfig} from '@barath/typed-config'
import { IsDefined } from 'class-validator'
import { LoggerOptions } from 'pino'

class Config {
  @IsDefined()
  logger: LoggerOptions
}

export const config = loadConfig(Config)